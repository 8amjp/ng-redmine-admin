import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  headers: Headers;
  private issuesUrl = "http://localhost/redmine/issues.json?callback=JSONP_CALLBACK";

  constructor(private http: HttpClient) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getIssues(): Observable<any> {
    return this.http.get(this.issuesUrl);
  }

}