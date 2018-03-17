import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[notifications-menu]',
  templateUrl: './notifications-menu.component.html'
})
export class NotificationsMenuComponent implements OnInit {

  notifications;
  header = '通知';

  constructor() { }

  ngOnInit() {
  }

}
