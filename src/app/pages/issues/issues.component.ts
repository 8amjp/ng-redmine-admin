import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './issues.component.html'
})
export class IssuesComponent implements OnInit {

  title = 'チケット';
  issues;
  filter = {
    status: "=open"
  };

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    route.queryParams.subscribe(params => {
      if(params.status) this.filter.status = params.status;
    });
  }

  ngOnInit(): void {
    this.getIssues();
  }

  getIssues(): void {
    let parameters = [
      'status='+this.filter.status
    ];
    this.api.get('/issues', parameters).subscribe(
      response => {
        this.issues = response;
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
