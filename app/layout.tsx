import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { AuthProvider } from "@/providers/auth-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--cp-font-body",
  display: "swap",
});

const pixeloidSans = localFont({
  src: [
    {
      path: "./fonts/PixeloidSans.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PixeloidSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--cp-font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cryptopedea.com"),
  title: {
    default: "CryptoPedea",
    template: "%s | CryptoPedea",
  },
  description:
    "Learn cryptocurrency through interactive lessons, quizzes, achievements, and gamified learning.",
  applicationName: "CryptoPedea",
  keywords: [
    "CryptoPedea",
    "Crypto",
    "Blockchain",
    "Bitcoin",
    "Ethereum",
    "Web3",
    "Learn Crypto",
    "Crypto Education",
  ],
  authors: [{ name: "CryptoPedea Team" }],
  creator: "CryptoPedea",
  publisher: "CryptoPedea",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "CryptoPedea",
    description: "Master cryptocurrency through fun, gamified learning.",
    url: "https://cryptopedea.com",
    siteName: "CryptoPedea",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CryptoPedea",
    description: "Master cryptocurrency through fun, gamified learning.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${pixeloidSans.variable}`}
    >
      <body
        className={`${spaceGrotesk.className} min-h-screen bg-[var(--cp-background)] text-[var(--cp-foreground)] antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}