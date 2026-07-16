import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sumon | Portfolio",
  description: "This is sumon's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-base-100 text-base-content font-sans">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
