

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
@Injectable({
  providedIn: 'root'
})
export class NgService {

  constructor(private http: HttpClient) { }

  {{#each item}}


  {{camelCase this}}(): Observable<any> {
    return this.http.{{lowerCase this.request.method}}<any>({{this.request.raw.raw}}, {{this.request.body}}, {
      headers: {{this.request.header}}
    });
  }
  {{/each}}
}
