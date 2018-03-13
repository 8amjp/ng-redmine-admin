import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { SqDatetimepickerModule } from 'ngx-eonasdan-datetimepicker';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { IssuesFilterComponent } from './issues-filter/issues-filter.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { DefaultLayoutFormComponent } from './issue-form/default-layout-form/default-layout-form.component';
import { CustomLayoutFormComponent } from './issue-form/custom-layout-form/custom-layout-form.component';
import { IssueHistoryComponent } from './issue-form/issue-history/issue-history.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IssuesRoutingModule,
    NgSelectModule,
    SqDatetimepickerModule,
  ],
  declarations: [
    IssuesComponent,
    IssuesFilterComponent,
    IssueFormComponent,
    DefaultLayoutFormComponent,
    CustomLayoutFormComponent,
    IssueHistoryComponent,
  ]
})
export class IssuesModule { }
