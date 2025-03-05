import {
  createCallerFactory,
  createTRPCRouter
} from "~/server/api/trpc";
import { notificationRouter } from "./router";

export const appRouter = createTRPCRouter({
  notification: notificationRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
