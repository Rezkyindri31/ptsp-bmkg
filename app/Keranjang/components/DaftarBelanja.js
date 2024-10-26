"use client";
import { Typography, Button } from "@/app/MTailwind";
import "@/app/globals.css";
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import { FaTrash } from "react-icons/fa6";

const PemesananProduk = () => {
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif();
  const HeaderPesanan = [
    "Nama",
    "Harga",
    "Kuantitas",
    "Jenis Produk",
    "Total",
    "Action",
  ];

  const cartContent = [
    {
      Nama: "Produk A",
      Harga: 100000,
      Jumlah_Pesanan: 2,
      Kategori: "Kategori A",
      Total_perItem: 200000,
    },
    {
      Nama: "Produk B",
      Harga: 150000,
      Jumlah_Pesanan: 1,
      Kategori: "Kategori B",
      Total_perItem: 150000,
    },
  ];

  const totalPrice = cartContent.reduce(
    (total, item) => total + item.Total_perItem,
    0
  );
  const formattedTotalPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalPrice);

  return (
    <div className="mt-10 py-20 lg:py-10 z-10 relative">
      <div className="text-base justify-center text-center font-bold"></div>
      <div className="grid grid-cols-1 justify-center items-center gap-10 lg:gap-2 space-y-10">
        <div className="flex flex-col items-center justify-center w-full h-full mx-auto text-center leading-relaxed px-4 lg:px-80 overflow-auto">
          <table className="w-full min-w-max table-fixed mx-auto bg-white rounded-2xl">
            <thead>
              <tr>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center w-10">
                  <Typography
                    variant="h6"
                    className="text-black font-black leading-none opacity-70"
                  >
                    No
                  </Typography>
                </th>
                {HeaderPesanan.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center w-40"
                  >
                    <Typography
                      variant="h6"
                      className="text-black font-black leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {cartContent.length > 0 ? (
                cartContent.map(
                  (
                    { Nama, Harga, Jumlah_Pesanan, Kategori, Total_perItem },
                    index
                  ) => (
                    <tr key={index}>
                      <td className="p-4 text-center">{index + 1}</td>
                      <td className="p-4">{Nama}</td>
                      <td className="p-4">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(Harga)}
                      </td>
                      <td className="p-4">{Jumlah_Pesanan}</td>
                      <td className="p-4">{Kategori}</td>
                      <td className="p-4">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(Total_perItem)}
                      </td>
                      <td className="p-4">
                        <button className="p-2" type="button">
                          <FaTrash className="text-red-500" />
                        </button>
                      </td>
                    </tr>
                  )
                )
              ) : (
                <tr>
                  <td
                    colSpan={HeaderPesanan.length + 1}
                    className="text-center p-4"
                  >
                    Keranjang kosong
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full mx-auto text-center leading-relaxed overflow-auto">
          <div className="flex flex-col items-center justify-center w-full h-full mx-auto text-center leading-relaxed px-96 overflow-auto">
            <table className="w-full min-w-max table-auto bg-secondary text-white rounded-2xl shadow-2xl">
              <thead className="text-center ">
                <tr>
                  <td className="p-4 border-b border-blue-gray-50 w-44 uppercase">
                    <Typography variant="h6" className="font-extrabold">
                      Total Harga
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50 w-44">
                    <Typography variant="h6" className="font-normal">
                      {formattedTotalPrice}
                    </Typography>
                  </td>
                </tr>
              </thead>
            </table>
            <div className="flex justify-start mt-10 mx-3">
              <Button
                className="button-effect"
                type="button"
                onClick={() => handlenavbarAktif("/Pemesanan")}
              >
                <span>Lanjutkan Pemesanan</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PemesananProduk;
