import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import SystemGrid from "@/components/SystemGrid";
export const metadata: Metadata = {
  title: "Abeer Abdulwali Al-Shaibah | Senior Full-Stack Software Engineer",
  description:
    "Portfolio of Abeer Abdulwali Al-Shaibah, a Senior Full-Stack Software Engineer building scalable web applications, SaaS platforms, and business systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
      {/* <SystemGrid /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}