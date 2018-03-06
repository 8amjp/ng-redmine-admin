import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {

  private protocol: string   = environment['redmine_protocol']   || 'http';
  private host_name: string  = environment['redmine_host_name']  || 'localhost/redmine';
  private api_format: string = environment['redmine_api_format'] || '.json';
  private api_key: string    = environment['redmine_api_key']    || '';
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Redmine-API-Key': this.api_key
    });
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
          値が空欄の場合は配列に追加しない。
          値が空欄でない場合、等号/不等号で始まらないものは値の頭に=を付与し、キーと値を連結して配列に追加する
          */
        if(parameters[key] != '') _params.push(key + (/^[^=<>]/.test(parameters[key]) ? `=${parameters[key]}` : parameters[key]));
      });
      parameters = _params.join('&');
    }
    console.log(`GET: ${this.protocol}://${this.host_name}${resource}${this.api_format}?${parameters}`) //
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

}