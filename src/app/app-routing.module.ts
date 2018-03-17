import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsModule } from './pages/projects/projects.module';
import { IssuesModule } from './pages/issues/issues.module';
import { IssueModule } from './pages/issue/issue.module';
import { MyModule } from './pages/my/my.module';

const routes: Routes = [{
  path: 'dashboard',
  component: DashboardComponent
}, {
  path: 'dashboard/:project_id',
  component: DashboardComponent
}, {
  path: 'projects',
  loadChildren: ()=> ProjectsModule
}, {
  path: 'projects/:project_id/issues',
  loadChildren: ()=> IssuesModule
}, {
  path: 'issues',
  loadChildren: ()=> IssuesModule
}, {
  path: 'issues/:id',
  loadChildren: ()=> IssueModule
}, {
  path: 'my',
  loadChildren: ()=> MyModule
}, {
  path: '', redirectTo: 'dashboard', pathMatch: 'full'
}, {
  path: '**', redirectTo: 'dashboard'
}];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, config)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
