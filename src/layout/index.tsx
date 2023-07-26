import { Poppins } from "next/font/google";
import React from "react";
import Footer from "./footer";
import NavbarComponents from "./navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${poppins.className}`}>
      <NavbarComponents />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
