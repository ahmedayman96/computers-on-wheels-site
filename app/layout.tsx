import "./globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Computers on Wheels | Victoria, BC IT Support",
  description: "Fast, friendly IT support for businesses and homes in Greater Victoria. Networks, Microsoft 365, cybersecurity, backups, and PC/Mac repair.",
  openGraph: { title: "Computers on Wheels", description: "IT support for Victoria, BC", type: "website" }
};

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
