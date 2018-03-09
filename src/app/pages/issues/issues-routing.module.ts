import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { IssuesComponent } from './issues.component';
import { IssueFormComponent } from './issue-form/issue-form.component';

const issuesRoutes: Routes = [{
  path: '',
  component: IssuesComponent
}, {
  path: ':id',
  component: IssueFormComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(issuesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class IssuesRoutingModule { }
