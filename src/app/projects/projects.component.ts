import { Component, OnInit } from '@angular/core';
import { ApiService }     from '../api.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  title = 'プロジェクト';
  projects;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/projects').subscribe(
      data => {
        this.projects = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
