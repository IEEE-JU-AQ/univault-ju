import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.className}>
        <ThemeProvider>
          <Suspense>
            <NavBar />
          </Suspense>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
