import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const font = Exo_2({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
export const metadata: Metadata = {
  title: "Next JS-01",
  description: "Trying Next JS! I like it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
