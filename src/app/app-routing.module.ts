import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ActivityComponent } from './pages/activity/activity.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { TimeEntriesComponent } from './pages/time-entries/time-entries.component';
import { NewsComponent } from './pages/news/news.component';
import { MyComponent } from './pages/my/my.component';
import { LoginComponent } from './pages/login/login.component';
import { IssueFormComponent } from './pages/issues/issue-form/issue-form.component';

import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { IssuesModule } from './pages/issues/issues.module';
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
