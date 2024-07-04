import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokedex",
  description: "My Pokedex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // 어플리케이션 전체에 적용되는 UI //
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="navbar-center bg-gray-700 w-full h-[100px] text-center pt-[2rem]">
          <a className="font-bold text-2xl">My Pokedex</a>
        </header>
        {children}
      </body>
    </html>
  );
}
