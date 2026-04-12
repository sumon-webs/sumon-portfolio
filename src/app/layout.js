import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Sumon | Portfolio",
  description: "This is sumon's portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-base-100 text-base-content">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
