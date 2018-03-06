import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ControlSidebarComponent } from './control-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    ControlSidebarComponent,
  ],
  declarations: [
    ControlSidebarComponent,
  ]
})
export class ControlSidebarModule { }
