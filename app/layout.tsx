import type { Metadata } from "next";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://roybipro.github.io/portfolio/"),
  title: "Roy Bipro | Full-Stack Developer & AI/ML Researcher",
  description:
    "Roy Bipro builds practical software products and explores machine learning, natural language processing, and intelligent systems.",
  icons: { icon: `${basePath}/images/favicon.png` },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Roy Bipro | Full-Stack Developer & AI/ML Researcher",
    description: "Practical software products and research in machine learning and language technologies.",
    type: "website",
    images: [{ url: "images/my-photo.jpg", width: 3406, height: 4541, alt: "Roy Bipro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Roy Bipro | Full-Stack Developer & AI/ML Researcher",
    description: "Software products, machine learning, NLP, and intelligent systems.",
    images: ["images/my-photo.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
