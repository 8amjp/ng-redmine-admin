import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { IssueResponse } from '../../../../types/issues.d';

@Component({
  selector: 'default-layout-form',
  templateUrl: './default-layout-form.component.html'
})
export class DefaultLayoutFormComponent implements OnInit {

  @Input() issueFormGroup: FormGroup;
  @Input() originalIssue: IssueResponse; // 修正前のチケットデータ
  @Input() projectEnums;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  trackByFn(i, item){
    return item.id
  }
}
