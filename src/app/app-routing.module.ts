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

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activity', component: ActivityComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'issues/:id', component: IssueFormComponent },
  { path: 'time-entries', component: TimeEntriesComponent },
  { path: 'news', component: NewsComponent },
  { path: 'my', component: MyComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' },
];

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
