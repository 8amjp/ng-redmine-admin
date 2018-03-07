import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../services/api.service';
import { StyleService } from '../../services/style.service';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  title = 'チケット';
  issues;
  filterFormGroup: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private style: StyleService,
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

}
