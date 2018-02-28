import { Component, OnInit } from '@angular/core';
import { ApiService }     from '../api.service';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  title = 'チケット';
  issues;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/issues').subscribe(
      data => {
        this.issues = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
