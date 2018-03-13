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
      custom_fields: fb.array([]),
      watcher_user_ids: fb.array([]),
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
        this.patchIssue();
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
      is_private: _issue.is_private || null,
      estimated_hours: _issue.estimated_hours || null,
      spent_hours: _issue.spent_hours || null
    });
    if(_issue.custom_fields) {
      let custom_fields = <FormArray>this.issueFormGroup.controls.custom_fields;
      _issue.custom_fields.forEach(cf => {
        custom_fields.push(this.fb.group({
          id: [cf.id],
          name: [cf.name],
          value: [cf.value]
        }))
      })
    }
    // TODO watcher_user_ids
  }

}
