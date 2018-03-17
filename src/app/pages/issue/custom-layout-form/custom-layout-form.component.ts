import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { IssueResponse } from '../../../types/issues.d';

@Component({
  selector: 'custom-layout-form',
  templateUrl: './custom-layout-form.component.html'
})
export class CustomLayoutFormComponent implements OnInit {

  @Input() issueFormGroup: FormGroup; // フォームデータ
  @Input() originalIssue: IssueResponse; // 修正前のチケットデータ
  @Input() projectEnums;  // 選択肢の値

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  trackByFn(i, item){
    return item.id
  }

}
