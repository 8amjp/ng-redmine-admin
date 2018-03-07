import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { UserResponse } from '../../../types/users.d';

@Component({
  selector: '[alt-user-menu]',
  templateUrl: './user-menu.component.html'
})
export class UserMenuComponent implements OnInit {

  user: UserResponse;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/users/current').subscribe(
      response => {
        this.user = response.user
      },
      error => console.log(error),
      () => {}
    );
  }

}
