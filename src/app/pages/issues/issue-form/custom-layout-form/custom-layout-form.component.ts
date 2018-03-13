import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';
import { IssueResponse } from '../../../../types/issues.d';

@Component({
  selector: 'custom-layout-form',
  templateUrl: './custom-layout-form.component.hidden.html'
})
export class CustomLayoutFormComponent implements OnChanges {

  @Input() issueFormGroup: FormGroup;
  @Input() originalIssue: IssueResponse; // 修正前のチケットデータ

  datetimeOptions = {
    format: 'YYYY-MM-DDTHH:mm:ss'
  }
  dateOptions = {
    format: 'YYYY/MM/DD'
  }

  constructor(
    private api: ApiService
  ) { }

  ngOnChanges() {
    console.log(this.issueFormGroup)
  }

}
