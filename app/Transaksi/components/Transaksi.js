"use client";
import React, { useState } from "react";
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
  return (
    <div className="h-full overflow-y-auto">
      <Dialog
        open={isOpen}
        handler={onClose}
        className="fixed z-50 w-screen h-full"
        size="lg"
      >
        <DialogHeader>Tracking Pesanan # Nomor Pesanan</DialogHeader>
        <DialogBody className="overflow-y-auto h-full py-5">
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
                    className="border-2 border-white bg-red-800 text-white"
                    size="sm"
                  >
                    Perbaikan Dokumen
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
                  >
                    Pengisian IKM
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
