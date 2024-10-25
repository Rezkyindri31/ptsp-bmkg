import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanProduk from "@/app/Produk/components/KategoriKatalog";
import Footer from "@/components/Footer";
function Produk() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanProduk />
      <Footer />
    </div>
  );
}

export default Produk;
