import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../services/api.service';
import { IssueResponse, IssueParameters } from '../../types/issues.d';

@Component({
  templateUrl: './issue.component.html'
})

export class IssueComponent implements OnInit, AfterViewInit {

    issueFormGroup: FormGroup;
    originalIssue: IssueResponse; // 修正前のチケットデータ
    id: number;
    successMessage: string = null;
    errorMessage: string = null;
    projectEnums = {
      trackers: [],
      issue_categories: [],
      enabled_modules: [],
      time_entry_activities: [],
      memberships: [],
      versions: []
    }

    constructor(
      private api: ApiService,
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private cd: ChangeDetectorRef
    ) {
      route.params.subscribe(params => {
        this.id = params.id;
      });
      this.issueFormGroup = fb.group({
        project_id: [null, Validators.required],
        tracker_id: [null, Validators.required],
        status_id: [null, Validators.required],
        priority_id: [null, Validators.required],
        assigned_to_id: [null],
        category_id: [null],
        fixed_version_id: [null],
        parent_issue_id: [null],
        subject: ['', Validators.required],
        description: [''],
        start_date: [''],
        due_date: [''],
        done_ratio: [null],
        is_private: [0],
        estimated_hours: [null],
        spent_hours: [null],
        custom_fields: fb.array([]),
        watcher_user_ids: fb.array([]),
        notes: [''],
        private_notes: [null]
      });
    }

    ngOnInit(): void {
      this.getIssue();
    }

    ngAfterViewInit() {
      this.cd.detectChanges();
    }

    onSubmit() {
      let data: IssueParameters = this.issueFormGroup.value;
      this.api.put(`/issues/${this.id}`, { issue: data }).subscribe(
        response => {
          this.successMessage = '更新しました。';
          this.getIssue();
          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        },
        error => {
          this.errorMessage = '更新できませんでした。';
          setTimeout(() => {
            this.errorMessage = null;
          }, 5000);
        }
      );
    }

    onReset() {
      this.patchIssue();
    }

    getProjectEnums(project_id: number): any {
      Observable.forkJoin(
        this.api.get(`/projects/${project_id}`, 'include=trackers,issue_categories,enabled_modules,time_entry_activities'),
        this.api.get(`/projects/${project_id}/memberships`, 'limit=100'),
        this.api.get(`/projects/${project_id}/versions`)
      ).subscribe(
        response => {
          this.projectEnums.trackers = response[0].project.trackers || null;
          this.projectEnums.issue_categories = response[0].project.issue_categories || null;
          this.projectEnums.enabled_modules = response[0].project.enabled_modules || null;
          this.projectEnums.time_entry_activities = response[0].project.time_entry_activities || null;
          this.projectEnums.memberships = response[1].memberships;
          this.projectEnums.versions = response[2].versions;
        },
        error => console.log(error),
        () => {}
      );
    }

    getIssue(): void {
      this.api.get(`/issues/${this.id}`, 'include=journals').subscribe(
        response => {
          this.originalIssue = response.issue;
        },
        error => console.log(error),
        () => {
          this.patchIssue();
          this.getProjectEnums(this.originalIssue.project.id);
        }
      );
    }

    // 取得したissueデータをフォームにセット
    patchIssue(): void {
      let _issue:IssueResponse = this.originalIssue;
      this.issueFormGroup.patchValue({
        project_id: _issue.project.id,
        tracker_id: _issue.tracker.id,
        status_id: _issue.status.id,
        priority_id: _issue.priority.id,
        assigned_to_id: _issue.assigned_to ? _issue.assigned_to.id : null,
        category_id: _issue.category ? _issue.category.id : null,
        fixed_version_id: _issue.fixed_version ? _issue.fixed_version.id : null,
        parent_issue_id: _issue.parent ? _issue.parent.id : null,
        subject: _issue.subject,
        description: _issue.description || '',
        start_date: _issue.start_date || '',
        due_date: _issue.due_date || '',
        done_ratio: _issue.done_ratio || null,
        is_private: _issue.is_private || 0,
        estimated_hours: _issue.estimated_hours || null,
        spent_hours: _issue.spent_hours || null,
        notes: '',
        private_notes: 0
      });
      if(_issue.custom_fields) {
        let custom_fields = this.fb.array([]);
        _issue.custom_fields.forEach(cf => {
          custom_fields.push(this.fb.group({
            id: [cf.id],
            name: [cf.name],
            value: [cf.value]
          }))
        })
        this.issueFormGroup.setControl('custom_fields', custom_fields);
      }
      // TODO watcher_user_ids
    }

}
