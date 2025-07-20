import { TRPCError } from "@trpc/server";
import { config } from "~/config";
import { createEmailClient } from "~/packages";
import { type CreateNotificationSchemaType } from "~/schema/notification";

export const createNotification = async (
  input: CreateNotificationSchemaType,
) => {

  const mailer = createEmailClient(config.mail);

  try {
    await mailer.sendMail({
      from: input.email,
      to: "mziyonkefinancial@gmail.com",
      subject: "Email from website",
      data: {
        sentDate: new Date(),
        userEmail: input.email,
        userFirstName: input.firstName,
        userLastName: input.lastName,
        userMessage: input.message,
        userPhoneNumber: input.phoneNumber,
      },
    });
    return {
      message: "Notification created successfully",
    };
  } catch (error) {
    console.log(error);
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Failed to send an email",
    });
  }
};
