import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

}
