import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityDataService } from '@ngrx/data';
import { UserList } from 'src/app/entity-metadata/entity-metadata';
import { UserDataService } from './user-data.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<UserList> {

  private url: string = 'https://jsonplaceholder.typicode.com/';


  constructor(
    private serviceEleFactory: EntityCollectionServiceElementsFactory,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService,
    private http: HttpClient
  ) {
    super('User', serviceEleFactory);
    // entityDataService.registerService('User', userDataService);
  }

  // constructor(entityDataService: EntityDataService, UserDataService: UserDataService) {
  //   entityDataService.registerService('User', UserDataService);
  // }

  // override getAll(): Observable<UserList[]> {
  //   return this.http.get<UserList[]>(`${this.url}/users`);
  // }

  // override add(payload: UserList): Observable<any> {
  //   return this.http.post(`${this.url}/users`, payload);
  // }

  // override update(payload: any): Observable<any> {
  //   return this.http.patch(`${this.url}/users/${payload.id}`, payload.changes);
  // }

  // override delete(id: any): Observable<number | string> {
  //   return this.http.delete<number>(`${this.url}/users/${id}`);
  // }

  // override getWithQuery(params: any): Observable<any> {
  //   return this.http.get(`${this.url}/users`, { params: params }).pipe(map(res => [res]));
  // }
}
