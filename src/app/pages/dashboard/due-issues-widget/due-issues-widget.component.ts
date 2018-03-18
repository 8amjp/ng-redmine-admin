import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import * as moment from 'moment';
import { ApiService } from '../../../services/api.service';
import { StyleService } from '../../../services/style.service';

@Component({
  selector: 'due-issues-widget',
  templateUrl: './due-issues-widget.component.html'
})
export class DueIssuesWidgetComponent implements OnInit {

  @Input() project_id: number;
  item;

  constructor(
    private api: ApiService,
    private style: StyleService
  ) { }

  ngOnInit(): void {
    this.item = { context: 'warning', icon: 'fa fa-exclamation-triangle' };
    this.getData();
  }

  getData(): void {
    let today = moment().format('YYYY-MM-DD');
    Observable.forkJoin([
      this.api.get('/issues', Object.assign( {}, { due_date: today }, { project_id: this.project_id } )),
      this.api.get('/issues', Object.assign( {}, { status_id: '*', due_date: today }, { project_id: this.project_id }  ))
    ]).subscribe(
      response => {
        let openIssues: number = response[0]['total_count'];
        let allIssues: number = response[1]['total_count'];
        let ratio: string = ( allIssues > 0 ? Math.round( ( allIssues - openIssues ) / allIssues * 100 ) : 0 ) + '%';
        this.item.number = openIssues;
        this.item.text = ( allIssues > 0 ? `${ratio} 完了 (${allIssues - openIssues} / ${allIssues})` : '-' );
        this.item.issues = response[1]['issues'];
      },
      error => console.log(error),
      () => {
      }
    );
  }
}
