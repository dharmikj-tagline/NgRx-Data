import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class PostCustomDataService extends DefaultDataService<any> {

  constructor(http: HttpClient, httpUrl: HttpUrlGenerator) {
    super('PostList', http, httpUrl);
  }
}
