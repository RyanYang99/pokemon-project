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
        <header className="w-full h-[60px] bg-[#3477ff] text-center pt-[1rem]">
          <h2 className="font-bold">My Pokedex</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
