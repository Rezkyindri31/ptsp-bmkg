import React from "react";
import { Input, Checkbox } from "@/app/MTailwind";

const StepFormPerorangan = ({ stepAktif, checkboxAktif, setCheckboxAktif }) => {
  switch (stepAktif) {
    case 0:
      return (
        <div className="flex items-center justify-center">
          <div className="w-full max-w-7xl">
            <h2 className="text-center text-lg bg-primary my-4 py-2 text-white uppercase font-bold tracking-wide rounded-md">
              Data Diri
            </h2>
            <div className="grid grid-cols-2 gap-4 ">
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
                <p className="text-sm font-bold">Nama Lengkap</p>
                <Input
                  className="input-custom"
                  placeholder="Nama Lengkap"
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
              <div>
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
            </div>
            <div className="grid grid-cols-1 w-[600px]">
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

export default StepFormPerorangan;
