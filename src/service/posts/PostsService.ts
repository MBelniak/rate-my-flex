import container from '../../iocContainer';
import { AbstractDatabaseClient } from '@/database';
import sdk, { Query } from 'node-appwrite';
import { Post, PostAttributes } from '@/model/Post';
import { POSTS_COLLECTION_ID } from '@/service';
import { injectable } from 'inversify';

export abstract class AbstractPostsService {
    abstract getPostsByUserId(userId: string): Promise<Post[]>;
    abstract createNewPost(postData: PostAttributes): Promise<Post>;
    abstract deletePost(postId: string): Promise<string>;
}

@injectable()
export class PostsService implements AbstractPostsService {
    private databaseId = process.env.APPWRITE_DB_ID!;
    async createNewPost(postData: PostAttributes): Promise<Post> {
        const databases = container.get(AbstractDatabaseClient).getClient();
        return await databases.createDocument(
            this.databaseId,
            POSTS_COLLECTION_ID,
            sdk.ID.unique(),
            {
                userId: postData.userId,
                description: postData.description,
                imagePublicIds: postData.imagePublicIds,
                placeId: postData.placeId,
            }
        );
    }

    async deletePost(postId: string): Promise<string> {
        const databases = container.get(AbstractDatabaseClient).getClient();
        return await databases.deleteDocument(
            this.databaseId,
            POSTS_COLLECTION_ID,
            postId
        );
    }

    async getPostsByUserId(userId: string): Promise<Post[]> {
        const databases = container.get(AbstractDatabaseClient).getClient();
        const documents = (
            await databases.listDocuments<Post>(
                this.databaseId,
                POSTS_COLLECTION_ID,
                [Query.equal('userId', userId), Query.orderDesc('$createdAt')]
            )
        ).documents;
        console.log(documents.length);
        return documents;
    }
}
