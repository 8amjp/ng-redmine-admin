import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../../services/api.service';
import { IssueResponse, IssueParameters } from '../../../types/issues.d';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit, AfterViewInit {

  title = 'チケット';
  issueFormGroup: FormGroup;
  originalIssue: IssueResponse; // 修正前のチケットデータ
  id: number;
  fb: FormBuilder;
  isFormReady: boolean = false;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.issueFormGroup = new FormGroup({});
    this.issueFormGroup.valueChanges.subscribe(
      (form: any) => {
console.log('valueChanges', form);
      }
    );
    this.getIssue();
  }

  ngAfterViewInit(){
  }

  onSubmit() {
console.log('onSubmit', { issue: this.issueFormGroup.value });
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

  onReset() {
  }

  getIssue(): void {
    this.api.get(`/issues/${this.id}`, ['include=journals']).subscribe(
      response => {
        this.originalIssue = response.issue;
      },
      error => console.log(error),
      () => {
        this.buildIssueForm();
      }
    );
  }

  // 取得したissueデータをフォームにセット
  buildIssueForm(): void {
    let _issue:IssueResponse = this.originalIssue;
    this.issueFormGroup = this.fb.group({
      project_id: [_issue.project.id, Validators.required],
      tracker_id: [_issue.tracker.id, Validators.required],
      status_id: [_issue.status.id, Validators.required],
      priority_id: [_issue.priority.id, Validators.required],
      assigned_to_id: [_issue.assigned_to.id || null],
      category_id: [_issue.category.id || null],
      fixed_version_id: [_issue.fixed_version.id || null],
      parent_issue_id: [_issue.parent.id || null],
      subject: [_issue.subject, Validators.required],
      description: [_issue.description || ''],
      start_date: [_issue.start_date || ''],
      due_date: [_issue.due_date || ''],
      done_ratio: [_issue.done_ratio || null],
      is_private: [_issue.is_private || null],
      estimated_hours: [_issue.estimated_hours || null],
      spent_hours: [_issue.spent_hours || null],
      notes: [''],
      private_notes: ['']
    });

    //  if(this.originalIssue[key] && this.originalIssue[key]['id']) this.issue[`${key}_id`] = this.originalIssue[key]['id'];
    //  if(this.originalIssue[key]) this.issue[key] = this.originalIssue[key];
    if(_issue.custom_fields) {
      let custom_fields = this.fb.array([]);
      _issue.custom_fields.forEach(function(cf) {
        custom_fields.push(this.fb.group(cf));
      }.bind(this));
      this.issueFormGroup.addControl('custom_fields', custom_fields);
    }
    // TODO watcher_user_ids

    this.isFormReady = true;
  }

}
