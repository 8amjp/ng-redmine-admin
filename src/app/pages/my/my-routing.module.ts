import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { MyComponent } from './my.component';

const myRoutes: Routes = [{
  path: '',
  component: MyComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule { }
