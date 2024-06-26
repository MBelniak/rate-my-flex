import { Container } from 'inversify';
import 'reflect-metadata';
import { AbstractDatabaseClient, DatabaseClient } from '@/database';
import {
    AbstractPostsService,
    PostsService,
} from '@/service/posts/PostsService';
import { initLogger } from '@/server/Logger';
import { Logger } from 'winston';

const container = new Container();

// server side
if (typeof window === 'undefined') {
    container
        .bind<AbstractDatabaseClient>(AbstractDatabaseClient)
        .to(DatabaseClient);
    container.bind<AbstractPostsService>(AbstractPostsService).to(PostsService);
    container.bind<Logger>(Logger).toDynamicValue(() => initLogger());
}

export default container;
