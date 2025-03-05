import { object, z } from "zod";

export const createNotificationSchema = object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  message: z.string(),
});

export type CreateNotificationSchemaType = z.infer<
  typeof createNotificationSchema
>;
