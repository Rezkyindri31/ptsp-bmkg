"use client";
import React, { useState } from "react";
import {
  Button,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const UserProfile = () => {
  const [modeEdit, setUbahProfil] = useState(false);
  const [detailPengguna, setDetailPengguna] = useState({
    username: "fifovalle",
    fullName: "Naufal FIFA",
    identityNumber: "12345",
    gender: "Pria",
    phone: "+62 082-3183-34287",
    job: "Mahasiswa",
    email: "fifanaufal10@gmail.com",
    address: "Batulajar",
  });

  const handleGantiPengguna = (e) => {
    const { name, value } = e.target;
    setDetailPengguna({ ...detailPengguna, [name]: value });
  };

  const tombolUbahProfil = () => {
    setUbahProfil(!modeEdit);
  };

  return (
    <div className="flex justify-center items-center min-h-full bg-gray py-24 ">
      <div className="w-full max-w-full flex">
        <div className="w-1/6 p-4">
          <Button
            className={`w-full mb-4 ${
              !modeEdit ? "bg-primary text-white" : "bg-secondary text-white"
            }`}
            onClick={() => setUbahProfil(false)}
          >
            Informasi Profil
          </Button>
          <Button
            className={`w-full ${
              modeEdit ? "bg-primary text-white" : "bg-secondary text-white"
            }`}
            onClick={tombolUbahProfil}
          >
            Pengaturan Profil
          </Button>
        </div>
        <div className="w-3/4">
          <Card className="border border-blue-gray-400 shadow-lg rounded-lg">
            <CardBody>
              {modeEdit ? (
                <div className="grid grid-cols-2 gap-4">
                  {/* Edit Mode */}
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Nama Pengguna
                    </Typography>
                    <Input
                      value={detailPengguna.username}
                      name="username"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  {/* <div className="flex justify-center items-center">
                    <img
                      src="https://via.placeholder.com/150"
                      alt="Avatar"
                      className="rounded-full h-28 w-28"
                    />
                  </div> */}
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Nama Lengkap
                    </Typography>
                    <Input
                      value={detailPengguna.fullName}
                      name="fullName"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Pekerjaan
                    </Typography>
                    <Input
                      value={detailPengguna.job}
                      name="job"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Email
                    </Typography>
                    <Input
                      value={detailPengguna.email}
                      name="email"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      No. Handphone
                    </Typography>
                    <Input
                      value={detailPengguna.phone}
                      name="phone"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Jenis Kelamin
                    </Typography>
                    <Input
                      value={detailPengguna.gender}
                      name="gender"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Alamat
                    </Typography>
                    <Input
                      value={detailPengguna.address}
                      name="address"
                      onChange={handleGantiPengguna}
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <Button
                      color="green"
                      onClick={tombolUbahProfil}
                      className="mt-4"
                    >
                      Simpan
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Nama Lengkap
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.fullName}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      NPWP
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.identityNumber}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Jenis Kelamin
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.gender}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Alamat
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.address}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      No. Handphone / Telepon
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.phone}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Username
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.username}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Pekerjaan
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.job}
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="h6" className="mb-2">
                      Email
                    </Typography>
                    <Typography className="mb-2">
                      {detailPengguna.email}
                    </Typography>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
