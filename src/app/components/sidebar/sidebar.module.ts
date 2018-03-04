import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
