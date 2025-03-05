import { createNotificationSchema } from "~/schema/notification";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { createNotification } from "../controllers/notification/mutation";

export const notificationRouter = createTRPCRouter({
  create: publicProcedure
    .input(createNotificationSchema)
    .mutation(async ({ input }) => {
      return await createNotification(input);
    }),
});
