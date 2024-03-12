import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { DefaultDataServiceConfig, HttpUrlGenerator, provideEntityData, withEffects } from '@ngrx/data';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { UserDataService } from './components/users/service/user-data.service';
import { entityConfig, entitySampConfig } from './entity-metadata/entity-metadata';
import { entityCustomConfig } from './components/custom/entity-custom-metadata/entity-custom-metadata';
import { CustomurlHttpGenerator } from './entity-metadata/customurl-http-generator';

// const defaultDataServiceConfig: DefaultDataServiceConfig = {
//   root: 'https://my-api-domain.com:8000/api/v1',
//   timeout: 3000, // request timeout
// }

export const appConfig: ApplicationConfig = {
  providers: [
    // De.registerService('Hero', DefaultDataService),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(),
    provideEffects(),
    provideEntityData(entityConfig, withEffects()),
    provideEntityData(entityCustomConfig, withEffects()),
    // provideEntityData(entitySampConfig, withEffects()),
    provideStoreDevtools({
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
      features: {
        pause: false,
        lock: true,
        persist: true
      }
    }),
    { provide: HttpUrlGenerator, useClass: CustomurlHttpGenerator, },
    // { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
    // UserDataService,
    // {
    //   provide: ENVIRONMENT_INITIALIZER,
    //   useValue() {
    //     const entityDataService = inject(EntityDataService);
    //     const postDataService = inject(UserDataService);
    //     entityDataService.registerService('Post', postDataService);
    //   },
    //   multi: true,
    // },
  ]
};
