import container from '../../iocContainer';
import { AbstractDatabaseClient } from '@/database';
import sdk, { Query } from 'node-appwrite';
import { Post } from '@/model/Post';
import { POSTS_COLLECTION_ID } from '@/service';
import { TRPCError } from '@trpc/server';
import { injectable } from 'inversify';

export abstract class AbstractPostsService {
    abstract getPostsByUserId(userId: string): Promise<Post[]>;
    abstract createNewPost(
        userId: string | undefined,
        postData: { description: string }
    ): Promise<Post>;
}

@injectable()
export class PostsService implements AbstractPostsService {
    private databaseId = process.env.APPWRITE_DB_ID!;
    async createNewPost(
        userId: string | undefined,
        postData: { description: string }
    ): Promise<Post> {
        if (userId == null) {
            throw new TRPCError({
                code: 'UNAUTHORIZED',
                message:
                    'User has not been authenticated and cannot perform the action.',
            });
        }
        const databases = container.get(AbstractDatabaseClient).getClient();
        return await databases.createDocument(
            this.databaseId,
            POSTS_COLLECTION_ID,
            sdk.ID.unique(),
            {
                userId: userId,
                description: postData.description,
            }
        );
    }

    async getPostsByUserId(userId: string): Promise<Post[]> {
        const databases = container.get(AbstractDatabaseClient).getClient();
        return (
            await databases.listDocuments<Post>(
                this.databaseId,
                POSTS_COLLECTION_ID,
                [Query.equal('userId', userId)]
            )
        ).documents;
    }
}
