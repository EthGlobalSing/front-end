import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import Providers from "./providers";

import { Syne, DM_Serif_Text } from 'next/font/google'

const syne = Syne({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "MiniSafe",
  description: "MiniSafe allows easier access to your Safe Wallet funds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script src="https://telegram.org/js/telegram-web-app.js"></Script>
      </head>
      <body
        className={syne.className}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
