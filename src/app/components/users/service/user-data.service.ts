import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, map } from 'rxjs';
import { UserList } from 'src/app/entity-metadata/entity-metadata';

@Injectable({
  providedIn: 'root'
})

export class UserDataService extends DefaultDataService<UserList> {

  private url: string = 'https://jsonplaceholder.typicode.com/';

  constructor(http: HttpClient, httpUrl: HttpUrlGenerator) {
    super('User', http, httpUrl);
  }

  override getAll(): Observable<any> {
    return this.http.get(`${this.url}/users`);
    // If Id field not in include API
    // .pipe(map((data: any) =>
    //   data.map((res: any, i: number) => ({ ...res, id: i }))
    // ));
  }

  override add(payload: UserList): Observable<any> {
    return this.http.post(`${this.url}/users`, payload);
  }

  override update(payload: any): Observable<any> {
    return this.http.patch(`${this.url}/users/${payload.id}`, payload.changes);
  }

  override delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/users/${id}`);
  }

  override getWithQuery(userid: any): Observable<any> {
    return this.http.get(`${this.url}/users/${userid}`).pipe(map(res => [res]));
  }

  override getById(userid: any): Observable<any> {
    return this.http.get(`${this.url}/users/${userid}`).pipe(map(res => [res]));
  }
}
