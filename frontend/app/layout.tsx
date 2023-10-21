import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "verdict.ai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="footer footer-center p-4 bg-slate-200 ">
          <p>Copyright ©2023 | Pawełki | #hack4law</p>
        </footer>
      </body>
    </html>
  );
}
