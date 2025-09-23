import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const varelaRound = Varela_Round({
  weight: "400",
  variable: "--font-varela-round",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abid Ali Khan Eye Hospital | Hyderabad",
  description:
    "Comprehensive eye care in Darulshifa, Hyderabad. Cataract, squint, DCR/DCT, pterygium, LASIK evaluation, opticals, and pharmacy.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Abid Ali Khan Eye Hospital",
    description:
      "Comprehensive eye care in Darulshifa, Hyderabad. Cataract, squint, DCR/DCT, pterygium, LASIK evaluation, opticals, and pharmacy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${varelaRound.variable} font-sans relative overflow-x-hidden bg-[#e9eff7]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
