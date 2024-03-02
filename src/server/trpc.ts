import { initTRPC } from '@trpc/server';
import { UserContext } from '@/server/context';
const tRPC = initTRPC.context<UserContext>().create();
// Base router and procedure helpers
export const router = tRPC.router;
export const procedure = tRPC.procedure;
