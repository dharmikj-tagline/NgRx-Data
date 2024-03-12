import { EntityMetadataMap } from '@ngrx/data';

export interface UserList {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

const entityMetadata: EntityMetadataMap = {
    User: {
        // filterFn: (entities: any, pattern: any) => {
        //     const { name, username } = pattern;
        //     return entities.filter((entity: any) => entity.name === name && entity.username === username);
        // }

        // filterFn: (entities: any, pattern: any) => {
        //     return entities.filter((entity: any) => Object.keys(pattern).every(key => entity[key] === pattern[key]));
        // },

        filterFn: (entities: any[], condition: any) => {
            if (condition) {
                return entities.filter((entity: any) => {
                    return Object.keys(condition).every((key) => {
                        const [operator, targetValue] = condition[key];
                        switch (operator) {
                            case '===':
                                return entity[key] === targetValue;
                            case '<':
                                return entity[key] < targetValue;
                            case '>':
                                return entity[key] > targetValue;
                            case '!==':
                                return entity[key] !== targetValue;
                            default:
                                return true;
                        }
                    });
                });
            }
            return entities;
        },
    },
    UserDetail: {}
};

export const entityConfig = {
    entityMetadata
};



const entitySampMetadata: EntityMetadataMap = {
    Item: {},
};

const pluralNames = {
    Item: 'Items',
};

export const entitySampConfig = {
    entityMetadata,
    pluralNames,
};