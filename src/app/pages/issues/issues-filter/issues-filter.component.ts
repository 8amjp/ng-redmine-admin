import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'issues-filter',
  templateUrl: './issues-filter.component.html'
})
export class IssuesFilterComponent implements OnInit {

  @Input() filterFormGroup: FormGroup;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

}
