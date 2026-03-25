import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Iceland } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";


const iceland = Iceland({
      subsets: ["latin"],
      weight: "400",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Martin Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" className={iceland.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
