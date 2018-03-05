import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as $ from 'jquery';
import { ApiService } from '../../../services/api.service';
import { Get, Put } from '../../../types/issues.d';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit {

  title = 'チケット';
  public issueFormGroup: FormGroup;
  private issue: Put.Issue; // 修正対象のチケットデータ
  private originalIssue: Get.Issue; // 修正前のチケットデータ
  public enums = {
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
    private route: ActivatedRoute,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
    this.issueFormGroup = fb.group({
      project_id: '',
      tracker_id: '',
      status_id: '',
      priority_id: '',
      assigned_to_id: '',
      category_id: '',
      fixed_version_id: '',
      parent_issue_id: '',
      subject: '',
      description: '',
      start_date: '',
      due_date: '',
      done_ratio: '',
      is_private: '',
      estimated_hours: '',
      spent_hours: '',
      custom_fields: fb.array([]),
      watcher_user_ids: fb.array([]),
      notes:'',
      private_notes: ''
    });
  }

  ngOnInit(): void {
    this.getIssue();
  }

  onSubmit() {
console.log({ issue: this.issue });
    /*
    this.api.put(`/issues/${this.id}`, { issue: this.issue }).subscribe(
      response => {
        console.log(response);
        this.getIssue();
      },
      error => console.log(error),
      () => {}
    );
    */
  }

  getIssue(): void {
    this.api.get(`/issues/${this.id}`, ['include=journals']).subscribe(
      response => {
        this.originalIssue = response.issue;
        this.issue = {
          project_id: this.originalIssue.project.id,
          tracker_id: this.originalIssue.tracker.id,
          status_id: this.originalIssue.status.id,
          priority_id: this.originalIssue.priority.id,
          subject: this.originalIssue.subject
        };
        ['assigned_to','category','fixed_version','parent'].forEach(function(key) {
          if(this.originalIssue[key] && this.originalIssue[key]['id']) this.issue[`${key}_id`] = this.originalIssue[key]['id'];
        }.bind(this));
        ['description','start_date','due_date','done_ratio','is_private','estimated_hours','spent_hours','custom_fields'].forEach(function(key) {
          if(this.originalIssue[key]) this.issue[key] = this.originalIssue[key];
        }.bind(this));
        // TODO watcher_user_ids
      },
      error => console.log(error),
      () => {
        this.issueFormGroup.patchValue(this.issue);
        this.getEnums(this.issue.project_id);
      }
    );
  }

  getEnums(project_id: number): void {
    Observable.forkJoin([
      this.api.get('/projects'),
      this.api.get('/trackers'),
      this.api.get('/issue_statuses'),
      this.api.get('/enumerations/issue_priorities'),
      this.api.get(`/projects/${project_id}/issue_categories`),
      this.api.get(`/projects/${project_id}/versions`)
    ]).subscribe(
      response => {
        this.enums.projects = response[0].projects;
        this.enums.trackers = response[1].trackers;
        this.enums.issue_statuses = response[2].issue_statuses;
        this.enums.issue_priorities = response[3].issue_priorities;
        this.enums.issue_categories = response[4].issue_categories;
        this.enums.versions = response[5].versions;
      },
      error => console.log(error),
      () => {}
    );
  }

}
