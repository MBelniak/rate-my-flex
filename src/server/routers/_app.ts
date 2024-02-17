import { z } from 'zod';
import { procedure, router } from '../trpc';
import container from '@/iocContainer';
import { AbstractPostsService } from '@/service/posts/PostsService';

export const appRouter = router({
    posts: procedure
        .input(
            z.object({
                description: z.string(),
            })
        )
        .mutation(async (opts) => {
            const postsService = container.get(AbstractPostsService);
            return await postsService.createNewPost(opts.ctx.user?.id, {
                description: opts.input.description,
            });
        }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
