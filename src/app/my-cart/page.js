"use client";
import { useEffect } from "react";
import CartSectionComponent from "@/components/organisms/CartSection";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function MyCart() {
  useEffect(() => {
    document.querySelectorAll("*").forEach((element) => {
      element.setAttribute("translate", "no");
    });
  }, []);

  return (
    <>
      <head>
        <meta http-equiv="Content-Language" content="es" />
        <meta name="google" content="notranslate" />
      </head>

      <main>
        <Navbar />
        <CartSectionComponent />
        <Footer />
      </main>
    </>
  );
}
