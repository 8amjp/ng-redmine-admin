import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IssuesComponent } from './issues.component';
import { IssueFormComponent } from './issue-form/issue-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    IssuesComponent,
    IssueFormComponent,
  ]
})
export class IssuesModule { }
