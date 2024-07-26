import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Where is the world?",
  description: "REST Countries API with color theme switcher",
  openGraph: {
    title: "REST Countries API with color theme switchers",
    description: "REST Countries API with color theme switcher",
    images: [
      {
        url: "/countries.png",
        width: 800,
        height: 600,
        alt: "Country flag",
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
