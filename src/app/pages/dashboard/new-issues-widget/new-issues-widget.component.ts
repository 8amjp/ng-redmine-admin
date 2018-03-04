import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as moment from 'moment';

import { ApiService } from '../../../services/api.service';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'new-issues-widget',
  templateUrl: './new-issues-widget.component.html'
})
export class NewIssuesWidgetComponent implements OnInit {

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
            number: 0,
            icon: widgetStyle['icon'],
            text: item.name,
            link: ['/'],
            footer: '一覧',
            boxBg: widgetStyle['box'],
            issues: []
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
    let today = moment().format('YYYY-MM-DD');
    this.items.forEach(function(item, i) {
      this.api.get('/issues', [ item.param, 'status_id=*', `created_on=${today}`]).subscribe(
        response => {
          this.data[i].number = response['total_count'];
          this.data[i].issues = response['issues'];
        },
        error => console.log(error),
        () => {}
      );
    }.bind(this));
  }

}
