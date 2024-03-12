import { Injectable } from '@angular/core';
import { DefaultHttpUrlGenerator, HttpResourceUrls, Pluralizer } from '@ngrx/data';
import { environment } from 'src/environments/environment';

@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
    constructor(pluralizer: Pluralizer) {
        super(pluralizer);
    }
    protected override getResourceUrls(
        entityName: string,
        root: string,
        trailingSlashEndpoints?: boolean
    ): HttpResourceUrls {
        let resourceURLs: any = super.getResourceUrls(entityName, root, trailingSlashEndpoints);
        switch (entityName) {
            case 'User':
                resourceURLs = {
                    collectionResourceUrl: `${environment.apiURL}/`,
                    entityResourceUrl: `${environment.apiURL}/`,
                };
                this.registerHttpResourceUrls({ [entityName]: resourceURLs });
                break;
            case 'UserDetail':
                resourceURLs = {
                    collectionResourceUrl: `${environment.apiURL}/`,
                    entityResourceUrl: `${environment.apiURL}/`,
                };
                this.registerHttpResourceUrls({ [entityName]: resourceURLs });
                break;
            default:
        }
        return resourceURLs;
    }
}
