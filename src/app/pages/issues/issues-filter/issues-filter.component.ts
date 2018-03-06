import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'issues-filter',
  templateUrl: './issues-filter.component.html'
})
export class IssuesFilterComponent implements OnInit {

  @Input() filterFormGroup: FormGroup;
  @Input() enums: {};

  constructor() { }

  ngOnInit() {
  }

}
