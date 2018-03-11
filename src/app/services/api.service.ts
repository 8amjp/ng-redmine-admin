import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  private protocol: string   = environment['redmine_protocol']   || 'http';
  private host_name: string  = environment['redmine_host_name']  || 'localhost/redmine';
  private api_format: string = environment['redmine_api_format'] || '.json';
  private api_key: string    = environment['redmine_api_key']    || '';

  // enumerations
  private _projects: any[] = [];
  private _trackers: any[] = [];
  private _issue_statuses: any[] = [];
  private _issue_priorities: any[] = [];
  private _custom_fields: any[] = [];

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': this.api_key
    });

    // get enumerations
    Observable.forkJoin([
      this.get('/projects', 'include=trackers,issue_categories,enabled_modules'),
      this.get('/trackers'),
      this.get('/issue_statuses'),
      this.get('/enumerations/issue_priorities'),
      this.get('/custom_fields')
    ]).subscribe(
      response => {
        this._projects = response[0].projects;
        this._trackers = response[1].trackers;
        this._issue_statuses = response[2].issue_statuses;
        this._issue_priorities = response[3].issue_priorities;
        this._custom_fields = response[4].custom_fields;
      },
      error => console.log(error),
      () => {}
    );
  }

  // getter/setter
  get projects() {
    return this._projects;
  }
  get trackers() {
    return this._trackers;
  }
  get issue_statuses() {
    return this._issue_statuses;
  }
  get issue_priorities() {
    return this._issue_priorities;
  }
  get custom_fields() {
    return this._custom_fields;
  }

  /*
    resource:
    parameters: 文字列またはオブジェクト(ex: {status_id:'=open', project_id:1})
    */
  get(resource: string, parameters: any = {}): Observable<any> {
    // オブジェクト型の場合
    if (typeof parameters !== 'string') {
      let _params = [];
      Object.keys(parameters).forEach(function (key) {
        /*
          値が空欄またはnullの場合は配列に追加しない。
          値が空欄でない場合、等号/不等号で始まらないものは値の頭に=を付与し、キーと値を連結して配列に追加する。
          */
        if(parameters[key] != '' && parameters[key] != null) {
          _params.push(key + (/^[^=<>]/.test(parameters[key]) ? `=${parameters[key]}` : parameters[key]));
        }
      });
      parameters = _params.join('&');
    }
    return this.http.get<any>(
      `${this.protocol}://${this.host_name}${resource}${this.api_format}?${parameters}`,
      { headers: this.headers }
    );
  }

  post(resource: string, body: any): Observable<any> {
    return this.http.post<any>(
      `${this.protocol}://${this.host_name}${resource}${this.api_format}`,
      JSON.stringify(body),
      { headers: this.headers, observe: 'response' }
    );
  }

  put(resource: string, body: any): Observable<any> {
    return this.http.put<any>(
      `${this.protocol}://${this.host_name}${resource}${this.api_format}`,
      JSON.stringify(body),
      { headers: this.headers, observe: 'response' }
    );
  }

  // TODO
  /*
  getEnums(project_id: number): any {
    if (project_id) {
      Observable.forkJoin(
        this.get(`/projects/${project_id}/versions`)
      ).subscribe(
        response => {
          this._versions = response[1].versions.map(this.forSelect2)
        },
        error => console.log(error),
        () => {}
      );
    }
  }
  */

  unflatten(items): {} {
    var map: any = [];
    var roots: any = [];
    items.forEach(function(item, index, array){
      map[item.id] = index;
      item.children = [];
    });
    items.forEach(function(item, index, array){
      if (item.parent) {
        array[map[item.parent.id]].children.push(item);
      } else {
        roots.push(item);
      }
    });
    return roots;
  }

}
