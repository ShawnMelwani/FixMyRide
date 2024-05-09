import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Shawn Melwani",
    default: "FixMyRide",
  },
  description: "Check out my AI Car Mechanic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClerkProvider>
        <ThemeProvider attribute="class"
        defaultTheme="dark">
          <div className="flex flex-col h-dvh">
            <Navbar/>
            <main className="mx-auto flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}
