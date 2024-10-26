"use client";
import React from "react";
import { Button } from "@/app/MTailwind";
import "@/app/globals.css";
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import { FiDownload } from "react-icons/fi";

const PemesananProduk = () => {
  const { handlenavbarAktif } = useNavbarAktif();
  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-xl border-2 shadow-xl my-16">
      <h1 className="text-2xl font-semibold mb-2">Detail Pemesanan</h1>
      <p className="text-gray-500 mb-6">
        Detail Pemesanan Produk Informasi Dan Jasa
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-bl from-secondary to-primary text-white p-4 rounded-lg shadow-xl border-2 ">
          <div className="mt-4 ">
            <div className="keranjang-section ">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Premium Suit"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Premium Suit</h3>
                  <p className="text-gray-500">
                    Premium Wool Blend (80% Wool, 20% Polyester)
                  </p>
                  <p>Size: M</p>
                  <p className="font-bold">Price: $790.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/80"
                  alt="Classic Leather Jacket"
                  className="w-16 h-16 object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold">Classic Leather Jacket</h3>
                  <p className="text-gray-500">100% Genuine Leather</p>
                  <p>Size: M</p>
                  <p className="font-bold">Price: $990.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gradient-to-br from-secondary to-primary text-white p-4 rounded-lg shadow-xl border-2 mb-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$1,780.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimasi Pengiriman</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Estimasi Pajak</span>
              <span>$5.00</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>$1,785.00</span>
            </div>
          </div>
          <div className="bg-gradient-to-br from-secondary to-primary text-white p-4 rounded-lg shadow-xl border-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Alamat Pengiriman</h2>
              <Button
                className="text-yellow-800 border-2 shadow-2xl hover:bg-yellow-800 hover:text-white"
                size="sm"
                variant="text"
                onClick={() => handlenavbarAktif("/PengaturanProfil")}
              >
                Edit
              </Button>
            </div>
            <div>
              <p>John Doe</p>
              <p>1234 Elm Street, Suite 567</p>
              <p>Los Angeles, CA 90001</p>
              <p>United States</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <Button
          className="button-effect"
          onClick={() => handlenavbarAktif("/PengaturanProfil")}
        >
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
};

export default PemesananProduk;
