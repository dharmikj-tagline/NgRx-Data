import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityDataService } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class CustomService extends EntityCollectionServiceBase<any>{


  constructor(
    private serviceEleFactory: EntityCollectionServiceElementsFactory,
    private entityDataService: EntityDataService,
    // private customDataService: UserDataService
  ) {
    super('UserCustomList', serviceEleFactory)
    // entityDataService.registerService('User', userDataService);
  }
  products = [
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 20.49 },
    // Add more products as needed
  ];

  // getAll() {
  //   return this.products;
  // }
}
