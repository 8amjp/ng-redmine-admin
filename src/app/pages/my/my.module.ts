import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MyComponent } from './my.component';
import { MyIssuesComponent } from './my-issues/my-issues.component';

@NgModule({
  declarations: [
    MyComponent,
    MyIssuesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
  ]
})
export class MyModule { }
