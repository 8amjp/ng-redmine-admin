import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService }     from '../../api.service';
import * as $ from 'jquery';

@Component({
  templateUrl: './issue-form.component.html'
})
export class IssueFormComponent implements OnInit {

  title = 'チケット';
  issue;
  private id: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit(): void {
    this.api.get(`/issues/${this.id}`).subscribe(
      data => {
        this.issue = data.issue
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

  ngAfterViewInit(): void {
  }

}
