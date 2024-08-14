import type { Metadata } from "next";
import NavBar from "@/components/1.Header/Navbar";
import { Montserrat } from "next/font/google";
import Footer from "@/components/3.Footer/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PurrfectPaws",
  description:
    "PurrfectPaws is your go-to store for premium cat toys and essential food. We offer a curated selection of products designed to keep your feline friends happy and healthy. Shop now for quality toys and nutritious food that your cats will love!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <header>
          <NavBar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
