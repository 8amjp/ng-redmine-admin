import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar.component';
import { MessagesMenuComponent } from './messages-menu/messages-menu.component';
import { NotificationsMenuComponent } from './notifications-menu/notifications-menu.component';
import { TasksMenuComponent } from './tasks-menu/tasks-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
  ],
  exports: [
    NavbarComponent,
  ],
  declarations: [
    NavbarComponent,
    MessagesMenuComponent,
    NotificationsMenuComponent,
    TasksMenuComponent,
    UserMenuComponent,
  ]
})
export class NavbarModule { }
