import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Roy Bipro — Computer Science Student & Developer",
  description:
    "The portfolio of Roy Bipro: a computer science student building thoughtful web apps, useful tools, and experiments with AI.",
  icons: { icon: `${basePath}/images/favicon.png` },
  openGraph: {
    title: "Roy Bipro — Computer Science Student & Developer",
    description: "I turn curious ideas into useful things on the web.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
