import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  headers: HttpHeaders;
  private issuesUrl = "http://localhost/redmine/issues.json";

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': '0000000000000000000000000000000000000000'
    });
  }

  getIssues(): Observable<any> {
    return this.http.get(this.issuesUrl, { headers: this.headers });
  }

}