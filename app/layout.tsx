import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalrushal.com"),
  title: "Free AI Marketing Roadmap | Digital Rushal",
  description:
    "Get a customized marketing strategy and discover practical ways AI can help your business attract and convert more customers.",
  openGraph: {
    title: "Free AI Marketing Roadmap | Digital Rushal",
    description:
      "Know what to fix, what to focus on, and how AI can help you attract and convert more customers.",
    type: "website",
    images: ["/digital-rushal-logo-cropped.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
