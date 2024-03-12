import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, map } from 'rxjs';
import { UserList } from 'src/app/entity-metadata/entity-metadata';

@Injectable({
    providedIn: 'root'
})

export class UserDetailDataService extends DefaultDataService<UserList> {

    private url: string = 'https://jsonplaceholder.typicode.com/';

    constructor(http: HttpClient, httpUrl: HttpUrlGenerator) {
        super('UserDetail', http, httpUrl);
    }

    // override getWithQuery(userid: any): Observable<any> {
    //     return this.http.get(`${this.url}/users/${userid}`).pipe(map(res => [res]));
    // }

    // override getById(userid: any): Observable<any> {
    //     return this.http.get(`${this.url}/users/${userid}`).pipe(map(res => [res]));
    // }
}
