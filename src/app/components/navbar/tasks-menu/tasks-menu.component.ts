import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: '[tasks-menu]',
  templateUrl: './tasks-menu.component.html'
})
export class TasksMenuComponent implements OnInit {

  tasks;
  header = '担当しているチケット';

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.api.get('/issues', 'assigned_to_id=me').subscribe(
      data => {
        this.tasks = data
      },
      error => console.log(error),
      () => {}
    );
  }

}
