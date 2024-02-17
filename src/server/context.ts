import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';
import { currentUser } from '@clerk/nextjs';

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/v11/context
 */
export const createContext = async (opts: FetchCreateContextFnOptions) => {
    const user = await currentUser();

    console.log(
        'createContext for',
        user?.primaryEmailAddressId ?? 'unknown user'
    );

    return {
        user,
    };
};

export type UserContext = Awaited<ReturnType<typeof createContext>>;
