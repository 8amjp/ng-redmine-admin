import { Component, OnInit } from '@angular/core';
import { ApiService }     from '../../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  issuesassignedtome;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/issues', 'assigned_to_id=me').subscribe(
      data => {
        this.issuesassignedtome = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
