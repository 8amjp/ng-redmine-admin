import { Component, OnInit } from '@angular/core';
import { ApiService }     from '../api.service';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  title = 'チケット';
  issues;
  filter = {
    status: "open"
  };

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    let parameters = [this.filter.status].join('&');
    this.api.get('/issues', parameters).subscribe(
      response => {
        console.log(response);
        this.issues = response;
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
