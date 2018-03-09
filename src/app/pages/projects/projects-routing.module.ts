import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { OverviewComponent } from './overview/overview.component';

const projectsRoutes: Routes = [{
  path: '',
  component: ProjectsComponent
}, {
  path: ':project_id',
  component: OverviewComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(projectsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
