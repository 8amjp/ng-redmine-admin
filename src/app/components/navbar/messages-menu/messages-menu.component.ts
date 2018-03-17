import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[messages-menu]',
  templateUrl: './messages-menu.component.html'
})
export class MessagesMenuComponent implements OnInit {

  messages;
  header = 'メッセージ';

  constructor() { }

  ngOnInit() {
  }

}
