import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const pop = Poppins({
  weight:'400',
  subsets:['latin']
})


export const metadata: Metadata = {
  title: "AI Dashboard",
  description: "Hello There User",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pop.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
