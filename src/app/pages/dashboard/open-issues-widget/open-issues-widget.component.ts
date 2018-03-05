import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { ApiService } from '../../../services/api.service';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'open-issues-widget',
  templateUrl: './open-issues-widget.component.html'
})
export class OpenIssuesWidgetComponent implements OnInit {

  data: any[] = [];
  items: any[];

  constructor(
    private api: ApiService,
    private style: StyleService
  ) { }

  ngOnInit(): void {
    this.api.get('/trackers').subscribe(
      response => {
        this.items = response.trackers;
        this.items.forEach(function(item) {
          item.param = `tracker_id=${item.id}`;
          let widgetStyle = this.style.tracker[item.id] || this.style.primary;
          this.data.push({
            bg: widgetStyle['bg'],
            icon: widgetStyle['icon'],
            text: item.name,
            number: 0,
            progress: '0%',
            description: ''
          });
        }.bind(this));
      },
      error => console.log(error),
      () => {
        this.getData();
      }
    );
  }

  getData(): void {
    this.items.forEach(function(item, i) {
      Observable.forkJoin([
        this.api.get('/issues', [ item.param ]),
        this.api.get('/issues', [ item.param, 'status_id=*'])
      ]).subscribe(
        response => {
          let openIssues: number = response[0]['total_count'];
          let allIssues: number = response[1]['total_count'];
          let ratio: string = ( allIssues > 0 ? Math.round( ( allIssues - openIssues ) / allIssues * 100 ) : 0 ) + '%';
          this.data[i].number = openIssues;
          this.data[i].progress = ratio;
          this.data[i].description = ( allIssues > 0 ? `${ratio} 完了 (${allIssues - openIssues} / ${allIssues})` : '-' );
        },
        error => console.log(error),
        () => {
        }
      );
    }.bind(this));
  }

}
