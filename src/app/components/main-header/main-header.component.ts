import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'main-header-component',
  templateUrl: './main-header.component.html'
})
export class MainHeaderComponent implements OnInit {

  issuesassignedtome;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.get('/issues', ['assigned_to_id=me']).subscribe(
      data => {
        this.issuesassignedtome = data
      },
      error => console.log(error),
      () => console.log('onCompleted')
    );
  }

}
