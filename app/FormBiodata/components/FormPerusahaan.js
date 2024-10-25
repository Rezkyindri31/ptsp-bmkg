import React from "react";
import Image from "next/image";
import { Input, Button, Checkbox } from "@/app/MTailwind";
import LogoPerusahaan from "@/assets/img/Icon/Logo-Perusahaan.png";

const FormRegistrasiPerusahaan = () => {
  return (
    <div className="min-h-full grid grid-cols-1 lg:grid-cols-2 mx-auto bg-white shadow-2xl rounded-lg max-w-screen-full">
      <div className="hidden lg:flex items-center justify-center bg-cover bg-center">
        <Image
          src={LogoPerusahaan}
          width={200}
          height={200}
          alt="Perorangan"
          className="w-96 h-96 mb-4"
          priority
        />
      </div>
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-7xl">
          <h2 className="text-center text-2xl font-bold mb-6 uppercase">
            Daftar Perusahaan
          </h2>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            <div>
              <p className="text-sm">NPWP</p>
              <Input
                className="input-custom"
                placeholder="NPWP"
                size="lg"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <p className="text-sm"> No Identitas</p>
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

            {/* Second Row */}
            <div>
              <p className="text-sm"> Pekerjaan</p>
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
              <Input label="Nama Depan" size="lg" required />
            </div>

            {/* Third Row */}
            <div>
              <Input label="Nama Belakang" size="lg" required />
            </div>
            <div>
              <Input label="Pendidikan Terakhir" size="lg" required />
            </div>

            {/* Dropdown jenis kelamin */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Jenis Kelamin
              </label>
              <select className="block w-full mt-1 p-2 border rounded-lg text-gray-500">
                <option>Pilih Jenis Kelamin</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>

            {/* Checkbox persetujuan */}
            <div className="col-span-2">
              <Checkbox
                color="blue"
                label="Dengan ini saya menyetujui semua syarat dan ketentuan sebagai pengguna Web PTSP BMKG"
              />
            </div>

            {/* Button */}
            <div className="col-span-2">
              <Button color="blue" fullWidth>
                SELANJUTNYA
              </Button>
            </div>
          </div>

          {/* Ketentuan */}
          <div className="mt-4 text-sm text-left text-gray-600">
            <h3 className="font-semibold mb-2">
              Ketentuan Pengguna Perseorangan:
            </h3>
            <ul className="list-disc ml-4 space-y-1">
              <li>
                Username akun Anda adalah NPWP perorangan, pastikan NPWP sudah
                benar dan masih berlaku.
              </li>
              <li>
                Pengguna yang terdaftar pada Web PTSP BMKG tunduk pada aturan
                yang berlaku.
              </li>
              <li>
                Tidak menyalahgunakan akun terdaftar untuk tindakan kriminal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegistrasiPerusahaan;
