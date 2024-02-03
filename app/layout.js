import { Inter } from "next/font/google";
import "./globals.css";

import Background from "./Background";
import ScrollTopButton from "./ScrollTopButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Van Precilla Portfolio",
  description: "Portfolio showcasing web development project for job hiring as a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Background />
      <ScrollTopButton />
        {children}</body>
    </html>
  );
}
