import React from "react";
import { Input, Checkbox } from "@material-tailwind/react";

const StepFormPerusahaan = ({ stepAktif, checkboxAktif, setCheckboxAktif }) => {
  switch (stepAktif) {
    case 0:
      return (
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl">
            <h2 className="text-center text-lg bg-secondary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
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
            <h2 className="text-center text-lg bg-secondary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
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
            <h2 className="text-center text-lg bg-secondary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
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
            <div className="grid grid-cols-1 gap-x-8 gap-y-3 w-[600px]">
              <Checkbox
                color="blue"
                label="Dengan ini saya menyetujui semua syarat dan ketentuan sebagai pengguna Web PTSP BMKG"
                checked={checkboxAktif}
                onChange={(e) => setCheckboxAktif(e.target.checked)}
              />
            </div>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default StepFormPerusahaan;
