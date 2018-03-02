import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TimeEntriesComponent } from './time-entries.component';

@NgModule({
  declarations: [
    TimeEntriesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
  ]
})
export class TimeEntriesModule { }
