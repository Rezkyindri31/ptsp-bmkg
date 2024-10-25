"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import LogoPerorangan from "@/assets/img/Icon/Logo-Perorangan.png";
import useStepperForm from "@/hooks/Frontend/useStepperForm";
import "@/app/globals.css";

function FormPerorangan() {
  const { stepAktif, handleSelanjutnya, handleSebelumnya } = useStepperForm();

  const StepForm = () => {
    switch (stepAktif) {
      case 0:
        return (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <h2 className="text-center text-lg bg-primary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
                Data Diri
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div>
                  <p className="text-sm font-bold"> No Identitas</p>
                  <Input
                    className="input-custom"
                    placeholder="No Identitas (KTP/SIM/KITAS/PASSPORT)"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Nama Depan</p>
                  <Input
                    className="input-custom"
                    placeholder="Nama Depan"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Nama Belakang</p>
                  <Input
                    className="input-custom"
                    placeholder="Nama Belakang"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold"> Pekerjaan</p>
                  <Input
                    className="input-custom"
                    placeholder="Pekerjaan"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Pendidikan Terakhir</p>
                  <Input
                    className="input-custom"
                    placeholder="Pendidikan Terakhir"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700">
                    Jenis Kelamin
                  </label>
                  <select className="block w-full mt-1 p-2 border rounded-lg text-gray-500 input-custom">
                    <option>Pilih Jenis Kelamin</option>
                    <option>Laki-laki</option>
                    <option>Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="my-3">
                <p className="text-sm font-bold"> Email</p>
                <Input
                  className="input-custom"
                  placeholder="Email"
                  size="lg"
                  labelProps={{
                    className: "hidden",
                  }}
                  required
                />
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <h2 className="text-center text-lg bg-primary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
                Alamat Lengkap
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div>
                  <p className="text-sm font-bold"> Alamat</p>
                  <Input
                    className="input-custom"
                    placeholder="Alamat"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">No HP / No Telepon</p>
                  <Input
                    className="input-custom"
                    placeholder="No HP / No Telepon"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Provinsi</p>
                  <Input
                    className="input-custom"
                    placeholder="Provinsi"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold"> Kabupaten/Kota</p>
                  <Input
                    className="input-custom"
                    placeholder="Kabupaten/Kota"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-7xl">
              <h2 className="text-center text-lg bg-primary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
                Data Perusahaan Badan Usaha
              </h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div>
                  <p className="text-sm font-bold"> NPWP</p>
                  <Input
                    className="input-custom"
                    placeholder="NPWP"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">Nama Perusahaan</p>
                  <Input
                    className="input-custom"
                    placeholder="Nama Perusahaan"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="my-3">
                <p className="text-sm font-bold">Alamat Perusahaan</p>
                <Input
                  className="input-custom"
                  placeholder="Alamat Perusahaan"
                  size="lg"
                  labelProps={{
                    className: "hidden",
                  }}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                <div>
                  <p className="text-sm font-bold">Provinsi</p>
                  <Input
                    className="input-custom"
                    placeholder="Provinsi"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold"> Kabupaten/Kota</p>
                  <Input
                    className="input-custom"
                    placeholder="Kabupaten/Kota"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold"> Email Perusahaan</p>
                  <Input
                    className="input-custom"
                    placeholder="Email Perusahaan"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
                <div>
                  <p className="text-sm font-bold">
                    {" "}
                    No HP / No Telepon Perusahaan
                  </p>
                  <Input
                    className="input-custom"
                    placeholder="No HP / No Telepon Perusahaan"
                    size="lg"
                    labelProps={{
                      className: "hidden",
                    }}
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-8 gap-y-3">
                <Checkbox
                  color="blue"
                  label="Dengan ini saya menyetujui semua syarat dan ketentuan sebagai pengguna Web PTSP BMKG"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-full grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white shadow-2xl rounded-lg max-w-full">
      <div className="hidden lg:flex items-center justify-center bg-cover bg-center">
        <Image
          src={LogoPerorangan}
          width={200}
          height={200}
          alt="Perorangan"
          className="w-96 h-96 mb-4"
          priority
        />
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-screen-xl">
          <h2 className="text-center text-2xl font-bold mb-6 uppercase">
            Daftar Perorangan
          </h2>
          <div className="mt-8">{StepForm()}</div>
          <div className="mt-4 w-[600px] p-4 text-base text-left text-white bg-gradient-to-b from-primary to-secondary rounded-xl">
            <h3 className="font-semibold mb-2">
              Ketentuan Pengguna Perseorangan:
            </h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>
                Nama Pengguna akun Anda adalah NPWP Perusahaan, pastikan NPWP
                sudah benar dan masih berlaku.
              </li>
              <li>
                Pengguna yang terdaftar pada Web PTSP BMKG tunduk pada aturan
                yang berlaku.
              </li>
              <li>
                Tidak menyalahgunakan akun terdaftar kepada pihak yang tidak
                berkepentingan dan memanfaatkannya untuk melakukan tindakan
                kriminal.
              </li>
            </ul>
          </div>
          <div className="mt-8 flex justify-between">
            {stepAktif > 0 && (
              <Button className="bg-primary" onClick={handleSebelumnya}>
                Prev
              </Button>
            )}
            {stepAktif < 2 && (
              <Button className="bg-primary" onClick={handleSelanjutnya}>
                Next
              </Button>
            )}
            {stepAktif === 2 && (
              <Button className="bg-secondary">Simpan Data</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPerorangan;
