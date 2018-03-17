import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './my.component.html'
})
export class MyComponent implements OnInit {

  issuesassignedtome;
  issuesreportedbyme;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/issues', 'assigned_to_id=me').subscribe(
      data => {
        this.issuesassignedtome = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
    this.api.get('/issues', 'author_id=me').subscribe(
      data => {
        this.issuesreportedbyme = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
