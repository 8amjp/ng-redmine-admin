import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyComponent } from './my.component';
import { MyIssuesComponent } from './my-issues/my-issues.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
    MyComponent,
    MyIssuesComponent,
  ]
})
export class MyModule { }
