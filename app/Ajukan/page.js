"use client";
import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanAjukan from "@/app/Ajukan/components/Ajukan";
import Footer from "@/components/Footer";

function Ajukan() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanAjukan />
      <Footer />
    </div>
  );
}

export default Ajukan;
