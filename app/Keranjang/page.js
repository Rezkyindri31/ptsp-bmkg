import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanKeranjang from "@/app/Keranjang/components/DaftarBelanja";
import Footer from "@/components/Footer";

function Keranjang() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanKeranjang />
      <Footer />
    </div>
  );
}

export default Keranjang;
