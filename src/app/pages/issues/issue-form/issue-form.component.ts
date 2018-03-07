import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../../services/api.service';
import { Get, Put } from '../../../types/issues.d';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit {

  title = 'チケット';
  issueFormGroup: FormGroup;
  issue: Put.Issue; // 修正対象のチケットデータ
  originalIssue: Get.Issue; // 修正前のチケットデータ
  id: number;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder
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
      is_private: [null],
      estimated_hours: [null],
      spent_hours: [null],
      custom_fields: fb.array([
        fb.group({
          id: [null],
          name: [''],
          value: ['']
        })
      ]),
      watcher_user_ids: fb.array([
        fb.group({
          id: [null]
        })
      ]),
      notes: [''],
      private_notes: ['']
    });
  }

  ngOnInit(): void {
    this.issueFormGroup.valueChanges.subscribe(
      (form: any) => {
console.log('valueChanges', form);
      }
    );
    this.getIssue();
  }

  onSubmit() {
console.log('onSubmit', { issue: this.issue });
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
    this.issueFormGroup.reset(this.issue);
  }

  getIssue(): void {
    this.api.get(`/issues/${this.id}`, ['include=journals']).subscribe(
      response => {
        this.originalIssue = response.issue;
      },
      error => console.log(error),
      () => {
        this.patchIssue();
      }
    );
  }

  // 取得したissueデータをフォームにセット
  patchIssue(): void {
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
    this.issueFormGroup.setControl('custom_fields', this.fb.array(this.issue.custom_fields.map( cf => this.fb.group(cf) )));
    this.issueFormGroup.patchValue(this.issue);
  }

}
