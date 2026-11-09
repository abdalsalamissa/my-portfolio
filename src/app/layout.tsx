import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-portfolio-peach-six-68.vercel.app"),
  title: {
    default: "Abdelsalam Issa | Software Developer",
    template: "%s | Abdelsalam Issa",
  },
  description: "Explore the portfolio of Abdelsalam Issa, a Software Developer working with React, TypeScript, Next.js, and ASP.NET Core.",
  keywords: [
    "Abdelsalam Issa",
    "Software Developer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "ASP.NET Core",
    ".NET Developer",
  ],
  openGraph: {
    title: "Abdelsalam Issa | Software Developer",
    description: "Explore the portfolio of Abdelsalam Issa, a Software Developer working with React, TypeScript, Next.js, and ASP.NET Core.",
    siteName: "Abdelsalam Issa Portfolio",
    type: "website",
    locale: "en_US"
  },
  verification: {
    google: "xyq3jcUAiSzsPRE5I8zJ9uXvZ9C88U5Nzpw-JNZF93g",
  },
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
