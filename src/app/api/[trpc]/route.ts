import { appRouter } from '@/server/routers/_app';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from '@/server/context';
const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: '/api',
        req,
        router: appRouter,
        createContext,
        onError(opts) {
            const { error } = opts;
            console.error('Error:', error);
        },
    });
export { handler as GET, handler as POST };
