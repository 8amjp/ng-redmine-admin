import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as $ from 'jquery';
import { ApiService } from '../../api.service';
import { Get, Put } from '../../types/issues.d';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit {

  title = 'チケット';
  issue: Put.Issue;
  gotIssue: Get.Issue;
  options = {
    projects: [],
    trackers: [],
    issue_statuses: [],
    issue_priorities: [],
    issue_categories: [],
    versions: [],
  };
  id: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.getIssue();
  }

  onSubmit() {
    this.api.put(`/issues/${this.id}`, { issue: this.issue }).subscribe(
      response => {
        console.log(response);
        this.getIssue();
      },
      error => console.log(error),
      () => {}
    );
  }

  getIssue(): void {
    this.api.get(`/issues/${this.id}`, 'include=journals').subscribe(
      response => {
        console.log(response);
        this.gotIssue = response.issue;
        this.issue = {
          project_id: this.gotIssue.project.id,
          tracker_id: this.gotIssue.tracker.id,
          status_id: this.gotIssue.status.id,
          priority_id: this.gotIssue.priority.id,
          subject: this.gotIssue.subject
        };
        ['assigned_to','category','fixed_version','parent'].forEach(function(key) {
          if(this.gotIssue[key] && this.gotIssue[key]['id']) this.issue[`${key}_id`] = this.gotIssue[key]['id'];
        }.bind(this));
        ['description','start_date','due_date','done_ratio','is_private','estimated_hours','spent_hours','custom_fields'].forEach(function(key) {
          if(this.gotIssue[key]) this.issue[key] = this.gotIssue[key];
        }.bind(this));
        // TODO watcher_user_ids
        this.getOptions(this.issue.project_id);
      },
      error => console.log(error),
      () => {}
    );
  }

  getOptions(project_id: number): void {
    Observable.forkJoin([
      this.api.get('/projects'),
      this.api.get('/trackers'),
      this.api.get('/issue_statuses'),
      this.api.get('/enumerations/issue_priorities'),
      this.api.get(`/projects/${project_id}/issue_categories`),
      this.api.get(`/projects/${project_id}/versions`)
    ]).subscribe(
      response => {
        this.options.projects = response[0].projects;
        this.options.trackers = response[1].trackers;
        this.options.issue_statuses = response[2].issue_statuses;
        this.options.issue_priorities = response[3].issue_priorities;
        this.options.issue_categories = response[4].issue_categories;
        this.options.versions = response[5].versions;
      },
      error => console.log(error),
      () => {}
    );
  }

}
