import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { daDK } from "@clerk/localizations";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Bygger (Rasmus Bøgh)",
  description: "Se mit arbejde på www.rasmusbogh.dk",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider localization={daDK}>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
