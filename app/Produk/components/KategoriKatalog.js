"use client";
import React, { useState } from "react";
import { KategoriProduk, KategoriJasa } from "@/constant/constKategoriProduk";
import { IoArrowUndo } from "react-icons/io5";

function Katalog() {
  const [pilihStasiun, setPilihComponent] = useState(null);

  return (
    <div>
      {!pilihStasiun && (
        <section className="katalog-section">
          <div className="max-w-screen-xl mx-auto my-16 px-8 py-20 shadow-2xl rounded-lg border-2 border-gray">
            <div className="header-informasi">
              <h1 className="text-4xl text-center mb-6 underline underline-offset-8 font-extrabold tracking-widest text-primary">
                Katalog Produk Informasi
              </h1>
              <p className="text-xl text-center mb-8">
                Produk Informasi Setiap Instansi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {KategoriProduk.map((informasi) => (
                <div
                  key={informasi.name}
                  className="flex flex-col items-center border-2 border-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  {informasi.icon}
                  <h2 className="text-xl font-semibold mb-2 text-center">
                    {informasi.name}
                  </h2>
                  <p className="text-gray-500 text-center mb-4">
                    {informasi.description}
                  </p>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-lg"
                    onClick={() => setPilihComponent(informasi.component)}
                  >
                    Lihat Produk
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-screen-xl mx-auto my-16 px-8 py-20 shadow-2xl rounded-lg border-2 border-gray">
            <div className="header-jasa">
              <h1 className="text-4xl text-center mb-6 underline underline-offset-8 font-extrabold tracking-widest text-primary">
                Katalog Produk Jasa
              </h1>
              <p className="text-xl text-center mb-8">
                Produk Jasa Setiap Instansi
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {KategoriJasa.map((jasa) => (
                <div
                  key={jasa.name}
                  className="flex flex-col items-center border-2 border-secondary p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  {jasa.icon}
                  <h2 className="text-xl font-semibold mb-2">{jasa.name}</h2>
                  <p className="text-gray-500 text-center mb-4">
                    {jasa.description}
                  </p>
                  <button
                    className="px-4 py-2 bg-primary text-white rounded-lg"
                    onClick={() => setPilihComponent(jasa.component)}
                  >
                    Lihat Produk
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <div className="max-w-screen-xl mx-auto px-8 py-20 ">
        {pilihStasiun && (
          <div className="border p-6 rounded-lg shadow-lg ">
            <button
              className="flex items-center mb-4 text-primary"
              onClick={() => setPilihComponent(null)}
            >
              <IoArrowUndo className="mr-2" /> Kembali ke Katalog
            </button>
            {pilihStasiun}
          </div>
        )}
      </div>
    </div>
  );
}

export default Katalog;
