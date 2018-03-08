import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-projects',
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
        this.projects = this.unflatten(data.projects);
      },
      error => console.log(error),
      () => {}
    );
  }
  
  unflatten(items): {} {
    var map: any = [];
    var roots: any = [];
    items.forEach(function(item, index, array){
      map[item.id] = index;
      item.children = [];
    });
    items.forEach(function(item, index, array){
      if (item.parent) {
        array[map[item.parent.id]].children.push(item);
      } else {
        roots.push(item);
      }
    });
    return roots;
  }

}
