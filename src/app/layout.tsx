import "~/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Mziyonke Driving School | Code 10",
  description: "Mziyonke Driving School",
  icons: "./mziyonke_logo.avif",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          {children}
          <SpeedInsights />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
