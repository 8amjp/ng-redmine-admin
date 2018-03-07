import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { OpenIssuesWidgetComponent } from './open-issues-widget/open-issues-widget.component';
import { NewIssuesWidgetComponent } from './new-issues-widget/new-issues-widget.component';
import { DueIssuesWidgetComponent } from './due-issues-widget/due-issues-widget.component';

import { SmallBoxComponent } from '../../components/small-box/small-box.component';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    OpenIssuesWidgetComponent,
    NewIssuesWidgetComponent,
    DueIssuesWidgetComponent,
    SmallBoxComponent,
    InfoBoxComponent,
  ]
})
export class DashboardModule { }
