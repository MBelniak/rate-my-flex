import sdk from 'node-appwrite';
import container from '../iocContainer';
import { AbstractDatabaseClient } from '@/database/index';
import { IMAGES_COLLECTION_ID, POSTS_COLLECTION_ID } from '@/service';

export let client = new sdk.Client();

export const initDatabase = async (appwriteDbId: string) => {
    const db = container.get(AbstractDatabaseClient);
    if (!(await isCollectionsInitialized(db.getClient(), appwriteDbId))) {
        await initializeCollections(db.getClient(), appwriteDbId);
    }
};

const isCollectionsInitialized = async (
    databases: sdk.Databases,
    databaseId: string
): Promise<boolean> => {
    try {
        await databases.getCollection(databaseId, 'Posts');
        return true;
    } catch (e) {
        console.error(e);
        return false;
    }
};

const initializeCollections = async (
    databases: sdk.Databases,
    databaseId: string
) => {
    const database = await databases.get(databaseId);
    const postsCollection = await databases.createCollection(
        database.$id,
        POSTS_COLLECTION_ID,
        POSTS_COLLECTION_ID
    );

    await databases.createStringAttribute(
        database.$id,
        postsCollection.$id,
        'userId',
        255,
        true
    );

    await databases.createStringAttribute(
        database.$id,
        postsCollection.$id,
        'description',
        1073741824,
        false
    );

    const imagesCollection = await databases.createCollection(
        database.$id,
        IMAGES_COLLECTION_ID,
        IMAGES_COLLECTION_ID
    );

    await databases.createStringAttribute(
        database.$id,
        imagesCollection.$id,
        'publicId',
        255,
        true
    );

    await databases.createStringAttribute(
        database.$id,
        imagesCollection.$id,
        'postId',
        255,
        true
    );
};
