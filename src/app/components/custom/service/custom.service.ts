import { Injectable } from '@angular/core';
import { EntityActionOptions, EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityDataService } from '@ngrx/data';
import { UserCustomDataService } from './user-custom-data.service';
import { PostCustomDataService } from './post-custom-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomService extends EntityCollectionServiceBase<any>{

  constructor(
    private serviceEleFactory: EntityCollectionServiceElementsFactory,
    private entityDataService: EntityDataService,
    private userCustomDataService: UserCustomDataService,
    private postCustomDataService: PostCustomDataService,
    // private customDataService: UserDataService
  ) {
    super('PostList', serviceEleFactory);
    entityDataService.registerService('PostList', postCustomDataService);
    // // Define the entity names you want to use
    // const entityNames = ['UserCustomList', 'PostCustomList'];

    // // Loop through the entity names and register services
    // entityNames.forEach((entityName) => {
    //   const service: any = entityName === '' ? userCustomDataService : postCustomDataService;

    //   // Register the service for each entity name
    //   console.log('service :>> ', service);
    //   entityDataService.registerService(entityName, service);
    // });
  }
}
