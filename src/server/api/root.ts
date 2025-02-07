import {
  createCallerFactory,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => "Hello Jack WebDev"),
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
