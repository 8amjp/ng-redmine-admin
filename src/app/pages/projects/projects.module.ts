import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsRoutingModule } from './projects-routing.module';

import { ProjectsComponent } from './projects.component';
import { OverviewComponent } from './overview/overview.component';
import { ProjectComponent } from './project/project.component';
import { IssueTrackingComponent } from './overview/issue-tracking/issue-tracking.component';
import { ProjectMembershipsComponent } from './overview/project-memberships/project-memberships.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProjectsRoutingModule,
  ],
  declarations: [
    ProjectsComponent,
    OverviewComponent,
    ProjectComponent,
    IssueTrackingComponent,
    ProjectMembershipsComponent,
  ]
})
export class ProjectsModule { }
