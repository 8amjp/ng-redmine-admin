import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-issues',
  templateUrl: './my-issues.component.html'
})
export class MyIssuesComponent implements OnInit {

  @Input() issues;

  constructor() { }

  ngOnInit() {
  }

}
