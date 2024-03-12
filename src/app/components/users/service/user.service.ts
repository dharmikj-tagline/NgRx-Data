import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityDataService } from '@ngrx/data';
import { UserList } from 'src/app/entity-metadata/entity-metadata';
import { UserDataService } from './user-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends EntityCollectionServiceBase<UserList> {

  constructor(
    private serviceEleFactory: EntityCollectionServiceElementsFactory,
    private entityDataService: EntityDataService,
    private userDataService: UserDataService
  ) {
    super('User', serviceEleFactory)
    entityDataService.registerService('User', userDataService);
  }

  // constructor(entityDataService: EntityDataService, UserDataService: UserDataService) {
  //   entityDataService.registerService('User', UserDataService);
  // }
}
