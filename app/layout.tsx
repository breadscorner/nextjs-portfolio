import React, { Suspense } from "react";
import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import SuspenseLoader from "./components/loading";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Brett Gill",
    template: "%s | Brett Gill",
  },
  description: "Full Stack Web Developer",
  openGraph: {
    title: "Portfolio | Brett Gill",
    description:
      "Full Stack Web Developer",
    url: "www.brettgill.io",
    siteName: "www.brettgill.io",
    images: [
      {
        url: "https://www.brettgill.io/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/favicon-32x32.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dancingScript = LocalFont({
  src: "../public/fonts/DancingScript-Regular.ttf",
  variable: "--font-dancingscript",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, dancingScript.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Suspense fallback={<SuspenseLoader />}>{children}</Suspense>
      </body>
    </html>
  );
}
