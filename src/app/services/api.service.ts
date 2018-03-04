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
    parameters: 文字列または文字列の配列
    */
  get(resource: string, parameters: any = ''): Observable<any> {
    return this.http.get<any>(
      `${this.protocol}://${this.host_name}${resource}${this.api_format}?${Array.isArray(parameters) ? parameters.join('&') : parameters}`,
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