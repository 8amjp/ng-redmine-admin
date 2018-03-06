import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  title = 'チケット';
  issues;
  filterFormGroup: FormGroup;
  enums = {
    projects: [],
    trackers: [],
    issue_statuses: [],
    issue_priorities: [],
    issue_categories: [],
    versions: [],
  };

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.filterFormGroup = fb.group({
      tracker_id: [''],
      status_id: ['open']
    });
    route.queryParams.subscribe(params => {
      this.filterFormGroup.patchValue(params);
    });
  }

  ngOnInit(): void {
    this.filterFormGroup.valueChanges.subscribe(
      (form: any) => {
        this.getIssues(form);
      },
      error => console.log(error),
      () => {}
    );
    this.getIssues(this.filterFormGroup.value);
    this.getEnums();
  }

  getIssues(parameters: {}): void {
    this.issues = null;
    this.api.get('/issues', parameters).subscribe(
      response => {
        this.issues = response;
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

  // 選択肢の値を取得
  getEnums(): void {
    Observable.forkJoin([
      this.api.get('/projects'),
      this.api.get('/trackers'),
      this.api.get('/issue_statuses'),
      this.api.get('/enumerations/issue_priorities'),
    ]).subscribe(
      response => {
        this.enums.projects = response[0].projects;
        this.enums.trackers = response[1].trackers;
        this.enums.issue_statuses = response[2].issue_statuses;
        this.enums.issue_priorities = response[3].issue_priorities;
      },
      error => console.log(error),
      () => {}
    );
  }

}
