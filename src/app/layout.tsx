import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const font = Exo_2({
  subsets: ["latin"],
  weight: "500",
  style: "normal",
});
export const metadata: Metadata = {
  title: "Next JS 01",
  description: "Trying Next JS! I like it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
