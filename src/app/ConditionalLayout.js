// src/app/ConditionalLayout.js
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname.startsWith("/extension-details/");

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
