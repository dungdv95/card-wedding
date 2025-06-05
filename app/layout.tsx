import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://card-wedding-dun.vercel.app"),
  title: "Wedding Dũng & Nhàn",
  openGraph: {
    title: "Wedding Dũng & Nhàn",
    description: "Wedding Dũng & Nhàn",
    images: [
      {
        url: `https://card-wedding-dun.vercel.app/images/thum-wed.jpg?v=${Date.now()}`,
        alt: "Hình ảnh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Dũng & Nhàn",
    description: "Wedding Dũng & Nhàn",
    images: [
      {
        url: `https://card-wedding-dun.vercel.app/images/thum-wed.jpg?v=${Date.now()}`,
        alt: "Hình ảnh",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
