import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { OpenIssuesWidgetComponent } from './open-issues-widget/open-issues-widget.component';
import { NewIssuesWidgetComponent } from './new-issues-widget/new-issues-widget.component';
import { DueIssuesWidgetComponent } from './due-issues-widget/due-issues-widget.component';

import { SquareWidgetComponent } from '../../widgets/square-widget/square-widget.component';
import { IconWidgetComponent } from '../../widgets/icon-widget/icon-widget.component';

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
    SquareWidgetComponent,
    IconWidgetComponent,
  ]
})
export class DashboardModule { }
