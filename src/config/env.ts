export const config = {
  mail: {
    fromEmail: process.env.MAIL_FROM_EMAIL!,
    host: process.env.MAIL_HOST!,
    port: Number(process.env.MAIL_PORT!), 
    secure: process.env.MAIL_SECURE === "true",
    user: process.env.MAIL_USER!,
    password: process.env.MAIL_PASSWORD!,
  },
};
