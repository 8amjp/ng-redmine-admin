import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { IssueComponent } from './issue.component';

const issueRoutes: Routes = [{
  path: '',
  component: IssueComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(issueRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IssueRoutingModule { }
