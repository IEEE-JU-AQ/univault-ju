import { Geist } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
