"use client";
import React, { useRef, useState } from "react";
import {
  Input,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@/app/MTailwind";

function FormAjukan() {
  const fileInputRef = useRef(null);
  const [sectionAktif, setSectionAktif] = useState("penanggulanganBencana");

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleMenuItemClick = (section) => {
    setSectionAktif(section);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-7xl">
        <div className="mb-6">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <Button className="w-full border-2 bg-black">
                {(() => {
                  switch (sectionAktif) {
                    case "penanggulanganBencana":
                      return "Kegiatan Penanggulangan Bencana";
                    case "kegiatanSosial":
                      return "Kegiatan Keagamaan : kegiatanSosial";
                    case "kegiatanKeagamaan":
                      return "Kegiatan Keagamaan";
                    case "kegiatanPertahanan":
                      return "Kegiatan Pertahanan dan Keamanan";
                    case "kegiatanPemerintahan":
                      return "Kegiatan Pemerintahan Pusat atau Daerah";
                    case "kegiatanPendidikanPenelitian":
                      return "Kegiatan Pendidikan dan Penelitian Non Komersil";
                    case "kegiatanTarifPNBP":
                      return "Pelayanan Informasi dengan Tarif PNBP";
                    default:
                      return "Pilih Kegiatan Ajuan";
                  }
                })()}
              </Button>
            </MenuHandler>
            <MenuList className="w-3/4">
              <MenuItem
                onClick={() => handleMenuItemClick("penanggulanganBencana")}
              >
                Kegiatan Penanggulangan Bencana
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("kegiatanKeagamaan")}
              >
                Kegiatan Keagamaan
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem onClick={() => handleMenuItemClick("kegiatanSosial")}>
                Kegiatan Sosial
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("kegiatanPertahanan")}
              >
                Kegiatan Pertahanan dan Keamanan
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("kegiatanPemerintahan")}
              >
                Kegiatan Pemerintahan Pusat atau Daerah
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleMenuItemClick("kegiatanPendidikanPenelitian")
                }
              >
                Kegiatan Pendidikan dan Penelitian Non Komersil
                <span className="ml-2 inline-flex items-center justify-center w-12 h-6 bg-red-600 text-white text-xs font-bold rounded-full">
                  Gratis
                </span>
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuItemClick("kegiatanTarifPNBP")}
              >
                Pelayanan Informasi dengan Tarif PNBP
                <span className="ml-2 inline-flex items-center justify-center w-16 h-6 bg-primary text-white text-xs font-bold rounded-full">
                  Berbayar
                </span>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        {sectionAktif === "penanggulanganBencana" && (
          <div className="section-penanggulanganbencana w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Penanggulangan Bencana
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <p className="text-sm font-bold">
                  Surat Pengantar Permintaan Data
                </p>
                <Input
                  className="input-custom"
                  placeholder="Surat Pengantar Permintaan Data"
                  type="file"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}

        {sectionAktif === "kegiatanKeagamaan" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Keagamaan
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <p className="text-sm font-bold">
                  Surat Permintaan Ditandatangani Camat atau Pejabat Setingkat
                </p>
                <Input
                  className="input-custom"
                  placeholder="Surat Pengantar Permintaan Data"
                  type="file"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}
        {sectionAktif === "kegiatanSosial" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Sosial
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <p className="text-sm font-bold">
                  Surat Permintaan Ditandatangani Camat atau Pejabat Setingkat
                </p>
                <Input
                  className="input-custom"
                  placeholder="Surat Pengantar Permintaan Data"
                  type="file"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}
        {sectionAktif === "kegiatanPertahanan" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Pertahanan dan Keamanan
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <p className="text-sm font-bold">
                  Surat Permintaan Ditandatangani Camat atau Pejabat Setingkat
                </p>
                <Input
                  className="input-custom"
                  placeholder="Surat Pengantar Permintaan Data"
                  type="file"
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}
        {sectionAktif === "kegiatanPemerintahan" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Pemerintahan Pusat atau Daerah
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold">
                      Mempunyai Perjanjian Kerjasama dengan BMKG tentang
                      Kebutuhan Informasi MKKuG
                    </p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Surat Pengantar</p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}
        {sectionAktif === "kegiatanPendidikanPenelitian" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Kegiatan Pendidikan dan Penelitian Non Komersil
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold">
                      Identitas Diri KTP / KTM / SIM /Paspor
                    </p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Surat Pengantar dari Kepala Sekolah / Rektor / Dekon
                    </p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Surat Pernyataan Tidak Digunakan untuk Kepentingan Lain
                    </p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">
                      Proposal Penelitian Berisi Maksud dan Tujuan Penelitian
                      yang Telah Disetujui
                    </p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <Button color="blue" className="w-full" ripple="light">
                Ajukan Sekarang
              </Button>
            </div>
          </div>
        )}
        {sectionAktif === "kegiatanTarifPNBP" && (
          <div className="section-keagamaan w-full max-w-7xl p-6 bg-gray-200 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              Form Pelayanan Informasi dengan Tarif PNBP
            </h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Data Keperluan</h3>
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold">Identitas KTP</p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Surat Pengantar</p>
                    <Input
                      className="input-custom"
                      placeholder="Surat Pengantar Permintaan Data"
                      type="file"
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button color="blue" className="w-full" ripple="light">
                  Ajukan Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormAjukan;
