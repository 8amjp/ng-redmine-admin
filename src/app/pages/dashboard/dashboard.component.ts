import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ProjectResponse } from '../../types/projects.d';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

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
    if (this.project_id) {
      this.api.get(`/projects/${this.project_id}`).subscribe(
        response => {
          this.project = response.project;
        },
        error => console.log(error),
        () => {}
      );
    }
  }

}
