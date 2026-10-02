import type { Metadata } from "next";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tamerlan Mammadov | Cybersecurity & IT",
  description:
    "Tamerlan Mammadov is a Computer Engineer and Cybersecurity professional specializing in cybersecurity, systems administration, networking, and IT.",
  keywords: [
    "Tamerlan Mammadov",
    "Cybersecurity",
    "Computer Engineer",
    "IT",
    "Systems Administration",
    "Networking",
    "Cybersecurity Portfolio",
    "IT Portfolio",
  ],
  authors: [
    {
      name: "Tamerlan Mammadov",
    },
  ],
  creator: "Tamerlan Mammadov",
  metadataBase: new URL("https://tamerlan-partfolio.vercel.app"),
  openGraph: {
    title: "Tamerlan Mammadov | Cybersecurity & IT",
    description:
      "Personal portfolio of Tamerlan Mammadov — Computer Engineer and Cybersecurity professional.",
    url: "https://tamerlan-partfolio.vercel.app",
    siteName: "Tamerlan Mammadov Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamerlan Mammadov | Cybersecurity & IT",
    description:
      "Personal portfolio of Tamerlan Mammadov — Computer Engineer and Cybersecurity professional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

