import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'custom-layout-form',
  templateUrl: './custom-layout-form.component.html'
})
export class CustomLayoutFormComponent implements OnInit {

  @Input() issueFormGroup: FormGroup;

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

}
