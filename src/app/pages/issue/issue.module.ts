import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IssueRoutingModule } from './issue-routing.module';
import { IssueComponent } from './issue.component';
import { DefaultLayoutFormComponent } from './default-layout-form/default-layout-form.component';
import { IssueHistoryComponent } from './issue-history/issue-history.component';
import { CustomLayoutFormComponent } from './custom-layout-form/custom-layout-form.component';
// import { Tracker1LayoutFormComponent } from './tracker1-layout-form/tracker1-layout-form.component';
// import { Tracker2LayoutFormComponent } from './tracker2-layout-form/tracker2-layout-form.component';
// import { Tracker3LayoutFormComponent } from './tracker3-layout-form/tracker3-layout-form.component';
// import { Tracker4LayoutFormComponent } from './tracker4-layout-form/tracker4-layout-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbModule,
    IssueRoutingModule,
  ],
  declarations: [
    IssueComponent,
    DefaultLayoutFormComponent,
    IssueHistoryComponent,
    CustomLayoutFormComponent,
    // Tracker1LayoutFormComponent,
    // Tracker2LayoutFormComponent,
    // Tracker3LayoutFormComponent,
    // Tracker4LayoutFormComponent,
  ]
})
export class IssueModule { }
