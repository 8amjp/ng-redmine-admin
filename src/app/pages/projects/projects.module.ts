import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
  ]
})
export class ProjectsModule { }
