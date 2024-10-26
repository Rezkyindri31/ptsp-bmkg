import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanTransaksi from "@/app/Transaksi/components/Transaksi";
import Footer from "@/components/Footer";

export default function Transaksi() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanTransaksi />
      <Footer />
    </div>
  );
}
