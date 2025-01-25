import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "cucumbersalad",
  description: "cucumbersalad portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <nav>
            <div className="flex justify-end">
              <ul className="flex gap-2">
                <li>
                  <Link href={"/"} className="hover:underline">
                    home
                  </Link>
                </li>
                <li>
                  <Link href={"/blog"} className="hover:underline">
                    blog
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className="hover:underline">
                    contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {children}
        </div>
      </body>
      <Script
        src="http://umami-h08g0wgw8sskcc8oosg8g44k.129.150.54.71.sslip.io/script.js"
        data-website-id="480d1281-1096-4794-b799-8a71eab39de1"
      />
    </html>
  );
}
