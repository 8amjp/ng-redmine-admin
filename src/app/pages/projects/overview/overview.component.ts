import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ProjectResponse } from '../../../types/projects.d';

@Component({
  selector: 'projects-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  project_id: number = null;
  project: ProjectResponse;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
    route.params.subscribe(params => {
      this.project_id = params.project_id;
    });
  }

  ngOnInit() {
    this.api.get(`/projects/${this.project_id}`, 'include=trackers').subscribe(
      response => {
        this.project = response.project;
      },
      error => console.log(error),
      () => {}
    );
  }

}
