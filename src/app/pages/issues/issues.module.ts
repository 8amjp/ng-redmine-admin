import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IssuesComponent } from './issues.component';
import { IssueFormComponent } from './issue-form/issue-form.component';

@NgModule({
  declarations: [
    IssuesComponent,
    IssueFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
  ]
})
export class IssuesModule { }
