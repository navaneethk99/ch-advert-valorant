import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Valorant Skins!",
  description:
    "Click here to get genuine Valorant skins for absolutely FREE! (not clickbait)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/valorant/download.jpeg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
