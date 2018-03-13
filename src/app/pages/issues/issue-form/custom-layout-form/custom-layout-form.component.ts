import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { IssueResponse } from '../../../../types/issues.d';

@Component({
  selector: 'custom-layout-form',
  templateUrl: './custom-layout-form.component.html'
})
export class CustomLayoutFormComponent implements OnChanges {

  @Input() issueFormGroup: FormGroup;
  @Input() originalIssue: IssueResponse; // 修正前のチケットデータ

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
  }

}
