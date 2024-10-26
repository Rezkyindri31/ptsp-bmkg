"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import {
  Card,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@/app/MTailwind";
import {
  FaInfoCircle,
  FaFileAlt,
  FaBox,
  FaPaperPlane,
  FaDollarSign,
  FaNewspaper,
  FaPlus,
} from "react-icons/fa";
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";
import "@/app/globals.css";

function OrderList({ onDetailClick }) {
  return (
    <Card shadow={false} className="rounded-lg border-2 border-gray-300 p-4">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="border border-gray-200 p-2.5 rounded-lg">
            <FaNewspaper className="h-6 w-6 text-gray-900" />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-1 font-bold"
            >
              # Nomor Pesanan
            </Typography>
            <Typography className="!text-gray-600 text-xs font-normal">
              Status Pesanan
            </Typography>
          </div>
        </div>
        <Button
          size="sm"
          variant="text"
          className="flex items-center gap-2"
          onClick={onDetailClick}
        >
          <FaInfoCircle className="h-4 w-4 text-gray-600" />
          <Typography className="!font-semibold text-xs text-gray-600 md:block hidden">
            Lihat Detail
          </Typography>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-1">
        <Typography className="mb-1 text-xs !font-medium !text-gray-600">
          Nama Pesanan
        </Typography>
        <Typography className="mb-1 text-xs !font-medium !text-gray-600">
          Email Pesanan
        </Typography>
        <Typography className="mb-1 text-xs !font-medium !text-gray-600">
          Nomor Telepon Pesanan
        </Typography>
      </div>
    </Card>
  );
}

function TransactionDetails({ isOpen, onClose }) {
  const [bukaPerbaikanDokumen, setBukaPerbaikanDokumen] = useState(false);
  const [perbaikanDokumenDipilih, setPerbaikanDokumenDipilih] =
    useState("Perbaikan Dokumen");
  const [bukaPengisianIkm, setBukaPengisianIkm] = useState(false);
  const [pengisianDokumenIkm, setPengisianDokumenIkm] =
    useState("Pengisian IKM");
  const [pilihFile, setPilihFile] = useState(null);

  const tanganiUbahfile = (event) => {
    setPilihFile(event.target.files[0]);
  };

  const tanganiSimpan = () => {
    if (pilihFile) {
      console.log("File selected:", pilihFile.name);
    }
    setBukaPerbaikanDokumen(false);
  };
  return (
    <div className="h-full overflow-y-auto">
      <Dialog
        open={isOpen}
        handler={onClose}
        className="fixed z-50 w-screen h-full"
        size="lg"
      >
        <DialogHeader>Tracking Pesanan # Nomor Pesanan</DialogHeader>
        <DialogBody className="overflow-y-auto h-full w-full py-5 absolute">
          <div className="space-y-8">
            <Timeline>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-secondary">
                    <FaFileAlt className=" h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Status Pengajuan
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Ajuan pada tanggal 22/10/2024
                  </Typography>
                  <Button
                    size="sm"
                    onClick={() => setBukaPerbaikanDokumen(true)}
                    className="bg-[#0F67B1] text-white"
                  >
                    {perbaikanDokumenDipilih}
                  </Button>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-secondary">
                    <FaDollarSign className=" h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Status Pembayaran
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    Pembayaran Diterima pada tanggal 22/10/2024
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineConnector />
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-primary">
                    <FaBox className="h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Status Pembuatan
                  </Typography>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                  <Typography
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    ...
                  </Typography>
                </TimelineBody>
              </TimelineItem>
              <TimelineItem>
                <TimelineHeader>
                  <TimelineIcon className="p-2 bg-primary">
                    <FaPaperPlane className="h-4 w-4" />
                  </TimelineIcon>
                  <Typography variant="h5" color="blue-gray">
                    Pesanan Selesai
                  </Typography>
                </TimelineHeader>
                <TimelineBody>
                  <Typography
                    color="gary"
                    className="font-normal text-gray-600"
                  >
                    ...
                  </Typography>

                  <Button
                    className="border-2 border-white bg-yellow-800 text-white"
                    size="sm"
                    onClick={() => setBukaPengisianIkm(true)}
                  >
                    {pengisianDokumenIkm}
                  </Button>
                </TimelineBody>
              </TimelineItem>
            </Timeline>
            <div className="p-6 max-w-7xl mx-auto ">
              <h1 className="text-2xl font-semibold mb-2">Detail Pesanan</h1>
              <p className="text-gray-500 mb-6">
                Dipesan pada tanggal <span className="font-bold">1</span>
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                <div className="rounded-lg p-5 bg-gradient-to-bl from-secondary to-primary text-white">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p>Order Number: 1</p>
                      <p>Date Ordered: 123</p>
                    </div>
                    <Button className="border-2 bg-white text-black" size="sm">
                      Download Invoice
                    </Button>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Premium Suit"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">Nama Produk</h3>
                        <p className="text-gray-500">Produk Deskripsi</p>
                        <p className="font-bold">Price: $790.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Premium Suit"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">Nama Produk</h3>
                        <p className="text-gray-500">Produk Deskripsi</p>
                        <p className="font-bold">Price: $790.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Premium Suit"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">Nama Produk</h3>
                        <p className="text-gray-500">Produk Deskripsi</p>
                        <p className="font-bold">Price: $790.00</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center mb-4">
                      <img
                        src="https://via.placeholder.com/80"
                        alt="Premium Suit"
                        className="w-16 h-16 object-cover"
                      />
                      <div className="ml-4">
                        <h3 className="font-semibold">Nama Produk</h3>
                        <p className="text-gray-500">Produk Deskripsi</p>
                        <p className="font-bold">Price: $790.00</p>
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
            </div>
          </div>
        </DialogBody>
      </Dialog>
      <Dialog
        open={bukaPerbaikanDokumen}
        handler={() => setBukaPerbaikanDokumen(false)}
        className="fixed inset-0 items-center justify-center w-96 h-80 mx-auto"
      >
        <DialogHeader>Perbaikan Dokumen</DialogHeader>
        <DialogBody>
          <div className="p-4 bg-white rounded shadow-md w-full">
            <div className="mt-4">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Unggah File
              </label>
              <Button className="bg-[#0F67B1] text-white">
                <input
                  type="file"
                  onChange={tanganiUbahfile}
                  className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                />
              </Button>
            </div>
            <Typography className="text-red-400" variant="h6">
              *Surat kegiatan bencana
            </Typography>
            <div className="flex justify-between mt-4">
              <Button
                size="sm"
                color="blue"
                onClick={tanganiSimpan}
                className="w-[48%]"
              >
                Simpan
              </Button>
              <Button
                size="sm"
                color="red"
                onClick={() => setBukaPerbaikanDokumen(false)}
                className="w-[48%]"
              >
                Tutup
              </Button>
            </div>
          </div>
        </DialogBody>
      </Dialog>
      <Dialog
        open={bukaPengisianIkm}
        handler={() => setBukaPengisianIkm(false)}
        className="fixed inset-0 flex items-center justify-center bg-green-500 w-96 m-auto"
      >
        <div className="p-4 bg-white rounded shadow-md w-full max-w-xs">
          <h2 className="text-lg font-bold mb-4 text-center">Pengisian IKM</h2>
          <ul className="max-h-48 overflow-y-auto"></ul>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Unggah File
            </label>
            <Button className="bg-[#0F67B1] text-white">
              <input
                type="file"
                onChange={tanganiUbahfile}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
              />
            </Button>
          </div>

          <Typography className="text-red-400" variant="h6">
            *Surat kegiatan bencana
          </Typography>

          <div className="flex justify-between mt-4">
            <Button
              size="sm"
              color="blue"
              onClick={tanganiSimpan}
              className="w-[48%]"
            >
              Simpan
            </Button>
            <Button
              size="sm"
              color="red"
              onClick={() => setBukaPerbaikanDokumen(false)}
              className="w-[48%]"
            >
              Tutup
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

function TrackingPesanan() {
  const { handlenavbarAktif } = useNavbarAktif();
  const [bukaDialog, setBukaDialog] = useState(false);
  const handleBukaDetailTransaksi = () => {
    setBukaDialog(true);
  };
  const handleTutupDetailTransaksi = () => {
    setBukaDialog(false);
  };

  return (
    <section className="p-6 w-1/2 mx-auto bg-white rounded-xl shadow-2xl my-16">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-semibold">Tracking Pesanan</h1>
        <Button
          className="flex items-center gap-2"
          color="blue"
          onClick={() => handlenavbarAktif("/Produk")}
        >
          <FaPlus />
          Tambah Pesanan
        </Button>
      </div>
      <div className="justify-center items-center w-full h-full">
        <OrderList onDetailClick={handleBukaDetailTransaksi} />
      </div>
      <TransactionDetails
        isOpen={bukaDialog}
        onClose={handleTutupDetailTransaksi}
      />
    </section>
  );
}

export default TrackingPesanan;
