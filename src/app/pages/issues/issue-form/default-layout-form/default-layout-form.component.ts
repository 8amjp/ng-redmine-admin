import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'default-layout-form',
  templateUrl: './default-layout-form.component.html'
})
export class DefaultLayoutFormComponent implements OnInit {

  @Input() issueFormGroup: FormGroup;
  @Input() enums: {};

  constructor() { }

  ngOnInit() {
  }

}
