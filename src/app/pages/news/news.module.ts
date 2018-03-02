import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NewsComponent } from './news.component';

@NgModule({
  declarations: [
    NewsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  providers: [
  ]
})
export class NewsModule { }
