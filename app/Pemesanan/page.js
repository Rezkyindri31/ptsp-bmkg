import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanPemesanan from "@/app/Pemesanan/components/Pemesanan";
import Footer from "@/components/Footer";

function Pemesanan() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanPemesanan />
      <Footer />
    </div>
  );
}

export default Pemesanan;
