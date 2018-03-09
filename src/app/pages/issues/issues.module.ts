import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IssuesRoutingModule } from './issues-routing.module';

import { IssuesComponent } from './issues.component';
import { IssuesFilterComponent } from './issues-filter/issues-filter.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { DefaultLayoutFormComponent } from './issue-form/default-layout-form/default-layout-form.component';
import { IssueHistoryComponent } from './issue-form/issue-history/issue-history.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    IssuesRoutingModule,
  ],
  declarations: [
    IssuesComponent,
    IssuesFilterComponent,
    IssueFormComponent,
    DefaultLayoutFormComponent,
    IssueHistoryComponent,
  ]
})
export class IssuesModule { }
