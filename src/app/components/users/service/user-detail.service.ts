import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityDataService } from '@ngrx/data';
import { UserList } from 'src/app/entity-metadata/entity-metadata';
import { UserDataService } from './user-data.service';
import { UserDetailDataService } from './user-detail-data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserDetailService extends EntityCollectionServiceBase<UserList> {

    constructor(
        private serviceEleFactory: EntityCollectionServiceElementsFactory,
        private entityDataService: EntityDataService,
        private userdetailDataService: UserDetailDataService,
        private http: HttpClient
    ) {
        super('UserDetail', serviceEleFactory);
        entityDataService.registerService('UserDetail', userdetailDataService);
    }
}