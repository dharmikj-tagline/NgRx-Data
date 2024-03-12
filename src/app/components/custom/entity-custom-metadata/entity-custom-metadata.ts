import { EntityMetadataMap } from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
    PostList: {
        filterFn: (entities: { name: string }[], search: string) => {
            return entities.filter(entity => -1 < entity.name.indexOf(search));
        },
    },
};

export const entityCustomConfig = {
    entityMetadata
};