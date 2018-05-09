import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { ProjectResponse } from '../../types/projects.d';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  issues;
  project: ProjectResponse;
  filterFormGroup: FormGroup;
  isFilterCollapsed: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private fb: FormBuilder
  ) {
    this.filterFormGroup = fb.group({
      project_id: null,
      tracker_id: null,
      status_id: 'open'
    });
    route.params.subscribe(params => {
      this.filterFormGroup.patchValue(params);
    });
    route.queryParams.subscribe(params => {
      this.filterFormGroup.patchValue(params);
    });
  }

  ngOnInit(): void {
    let project_id: number = this.filterFormGroup.get('project_id').value;
    if (project_id) {
      this.api.get(`/projects/${project_id}`).subscribe(
        response => {
          this.project = response.project;
        },
        error => console.log(error),
        () => {}
      );
    }
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
      () => {}
    );
  }

}
