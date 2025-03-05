import nodemailer, {
  type SentMessageInfo,
  type Transporter,
  type SendMailOptions as BaseSendMailOptions,
} from "nodemailer";
import { renderEmail, type MziyonkeClientEmailProps } from "./EmailTemplate";

export function createEmailClient(env: MailOptions): EmailClient {
  const auth =
    env.user && env.password
      ? {
          user: env.user,
          pass: env.password,
        }
      : undefined;
  const transporter = nodemailer.createTransport({
    host: env.host,
    port: env.port,
    secure: env.secure,
    auth,
    tls: {
      rejectUnauthorized: false,
    },
  });

  const baseSendMail = (mailOptions: Parameters<Transporter["sendMail"]>[0]) =>
    new Promise<SentMessageInfo>((resolve, reject) => {
      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          reject(err instanceof Error ? err : new Error(String(err)));
        } else {
          resolve(info);
        }
      });
    });

  return {
    sendMail: async (options: SendMailOptions) => {
      await baseSendMail({
        from: env.fromEmail,
        ...options,
        html: await renderEmail(options.data),
      });
    },
  };
}

export type SendMailOptions = Omit<BaseSendMailOptions, "text"> & {
  to: string;
  data: MziyonkeClientEmailProps;
};

export type EmailClient = {
  sendMail: (options: SendMailOptions) => Promise<void>;
};

type MailOptions = {
  host: string;
  port: number;
  fromEmail?: string;
  secure?: boolean;
  user?: string;
  password?: string;
};
