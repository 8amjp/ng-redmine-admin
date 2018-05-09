import { Component, OnInit, Input } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ApiService } from '../../../../services/api.service';
import { StyleService } from '../../../../services/style.service';
import { ProjectResponse } from '../../../../types/projects.d';

@Component({
  selector: 'issue-tracking',
  templateUrl: './issue-tracking.component.html'
})
export class IssueTrackingComponent implements OnInit {

  @Input() project: ProjectResponse;
  items: any[];

  constructor(
    private api: ApiService,
    private style: StyleService
  ) {
  }

  ngOnInit(): void {
    this.items = this.project.trackers;
    this.items.forEach(function(item) {
      item.param = { tracker_id: item.id };
      let widgetStyle = this.style.tracker[item.id] || this.style.primary;
      item.style= {
        bg: widgetStyle['bg'],
        progressbar: widgetStyle['progressbar']
      }
    }.bind(this));
    this.getData();
  }

  getData(): void {
    this.items.forEach(function(item, i) {
      forkJoin([
        this.api.get('/issues', Object.assign( {}, { project_id: this.project.id }, item.param)),
        this.api.get('/issues', Object.assign( {}, { status_id: '*' }, { project_id: this.project.id }, item.param ))
      ]).subscribe(
        response => {
          let openIssues: number = response[0]['total_count'];
          let allIssues: number = response[1]['total_count'];
          let ratio: string = ( allIssues > 0 ? Math.round( ( allIssues - openIssues ) / allIssues * 1000 ) / 10 : 0 ) + '%';
          this.items[i].openIssues = openIssues;
          this.items[i].allIssues = allIssues;
          this.items[i].closedIssues = (allIssues - openIssues);
          this.items[i].progress = ratio;
        },
        error => console.log(error),
        () => {
        }
      );
    }.bind(this));
  }

}
