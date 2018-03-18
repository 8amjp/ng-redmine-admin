import { Component, Input } from '@angular/core';

@Component({
  selector: 'issue-history',
  templateUrl: './issue-history.component.html'
})
export class IssueHistoryComponent implements OnInit {

  @Input() journals;

}
