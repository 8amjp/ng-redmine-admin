import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { Get, Put } from '../../types/issues.d';
import * as $ from 'jquery';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit {

  title = 'チケット';
  issue: Get.Issue;
  formdata: Put.Issue;
  id: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  onSubmit() {
    console.log(this.formdata)
  }

  ngOnInit(): void {
    this.api.get(`/issues/${this.id}`).subscribe(
      data => {
        let issue = data.issue;
        this.issue = issue;
        this.formdata = {
          issue: {
            project_id:       ( issue.project       && issue.project.id       ? issue.project.id       : null ),
            tracker_id:       ( issue.tracker       && issue.tracker.id       ? issue.tracker.id       : null ),
            status_id:        ( issue.status        && issue.status.id        ? issue.status.id        : null ),
            priority_id:      ( issue.priority      && issue.priority.id      ? issue.priority.id      : null ),
            subject:          ( issue.subject                                 ? issue.subject          : null ),
            description:      ( issue.description                             ? issue.description      : null ),
            category_id:      ( issue.category      && issue.category.id      ? issue.category.id      : null ),
            start_date:       ( issue.start_date                              ? issue.start_date       : null ),
            due_date:         ( issue.due_date                                ? issue.due_date         : null ),
            done_ratio:       ( issue.done_ratio                              ? issue.done_ratio       : null ),
            fixed_version_id: ( issue.fixed_version && issue.fixed_version.id ? issue.fixed_version.id : null ),
            assigned_to_id:   ( issue.assigned_to   && issue.assigned_to.id   ? issue.assigned_to.id   : null ),
            parent_issue_id:  ( issue.parent        && issue.parent.id        ? issue.parent.id        : null ),
            custom_fields:    ( issue.custom_fields                           ? issue.custom_fields    : null ),
            estimated_hours:  ( issue.estimated_hours                         ? issue.estimated_hours  : null )
          }
        };
        // TODO watcher_user_ids,is_private
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

  ngAfterViewInit(): void {
  }

}
