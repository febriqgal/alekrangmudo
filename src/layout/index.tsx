import { Poppins } from "next/font/google";
import React from "react";
import Footer from "./footer";
import NavbarComponents from "./navbar";
import { motion, useScroll, useSpring } from "framer-motion";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className={`${poppins.className}`}>
      <NavbarComponents />
      <motion.div
        className="bg-gradient-to-r from-primary-400  to-primary-600 bottom-0 h-1 z-[99999] rounded-full fixed left-0 right-0 origin-top"
        style={{ scaleX }}
      />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
