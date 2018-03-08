import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  title = 'プロジェクト';
  projects: {};

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get('/projects').subscribe(
      data => {
        this.projects = this.api.unflatten(data.projects);
      },
      error => console.log(error),
      () => {}
    );
  }

}
