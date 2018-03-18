import { Component, OnInit, Input } from '@angular/core';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'issues-table',
  templateUrl: './issues-table.component.html'
})
export class IssuesTableComponent implements OnInit {

  @Input() issues;

  constructor(
    private style: StyleService
  ) { }

  ngOnInit() {
  }

}
