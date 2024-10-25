import Navbar from "@/components/Navbar";
import HeaderTemplate from "@/components/HeaderTemplate";
import TampilanProfile from "@/app/PengaturanProfil/components/TampilanProfile";
import Footer from "@/components/Footer";

function PengaturanProfil() {
  return (
    <div>
      <Navbar />
      <HeaderTemplate />
      <TampilanProfile />
      <Footer />
    </div>
  );
}

export default PengaturanProfil;
