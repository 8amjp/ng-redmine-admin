import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { IssuesFilterComponent } from './issues-filter/issues-filter.component';
import { IssuesTableComponent } from './issues-table/issues-table.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgbModule,
    IssuesRoutingModule,
  ],
  declarations: [
    IssuesComponent,
    IssuesFilterComponent,
    IssuesTableComponent,
  ]
})
export class IssuesModule { }
