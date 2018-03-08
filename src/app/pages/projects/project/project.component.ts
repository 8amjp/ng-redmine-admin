import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'project-box',
  templateUrl: './project.component.html'
})
export class ProjectComponent implements OnInit {

  @Input() project;

  constructor() { }

  ngOnInit() {
  }

}
