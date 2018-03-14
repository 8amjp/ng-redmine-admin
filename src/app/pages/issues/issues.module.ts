import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { IssuesFilterComponent } from './issues-filter/issues-filter.component';
import { IssueFormComponent } from './issue-form/issue-form.component';
import { DefaultLayoutFormComponent } from './issue-form/default-layout-form/default-layout-form.component';
import { IssueHistoryComponent } from './issue-form/issue-history/issue-history.component';
import { CustomLayoutFormComponent } from './issue-form/custom-layout-form/custom-layout-form.component';
// import { Tracker1LayoutFormComponent } from './issue-form/tracker1-layout-form/tracker1-layout-form.component';
// import { Tracker2LayoutFormComponent } from './issue-form/tracker2-layout-form/tracker2-layout-form.component';
// import { Tracker3LayoutFormComponent } from './issue-form/tracker3-layout-form/tracker3-layout-form.component';
// import { Tracker4LayoutFormComponent } from './issue-form/tracker4-layout-form/tracker4-layout-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    IssuesRoutingModule,
    NgSelectModule,
  ],
  declarations: [
    IssuesComponent,
    IssuesFilterComponent,
    IssueFormComponent,
    DefaultLayoutFormComponent,
    IssueHistoryComponent,
    CustomLayoutFormComponent,
    // Tracker1LayoutFormComponent,
    // Tracker2LayoutFormComponent,
    // Tracker3LayoutFormComponent,
    // Tracker4LayoutFormComponent,
  ]
})
export class IssuesModule { }
