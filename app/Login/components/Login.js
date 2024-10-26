"use client";

import React, { useState } from "react";
import { Input, Button } from "@/app/MTailwind";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import LoginIcon from "@/assets/img/Icon/Login.png";
import useNavbarAktif from "@/hooks/Frontend/useNavbarAktif";

function AuthPage() {
  const { navbarAktif, handlenavbarAktif } = useNavbarAktif("/Beranda");
  const [isPasswordVisibleLogin, setIsPasswordVisibleLogin] = useState(false);
  const togglePasswordVisibilityLogin = () => {
    setIsPasswordVisibleLogin((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full max-w-4xl">
        {/* Login */}
        {navbarAktif === "/Login" && (
          <div className="w-1/2 p-8">
            <div className="page-login">
              <h2 className="text-3xl font-semibold text-gray-800 my-6">
                Silahkan Masuk
              </h2>

              <form>
                <div className="mb-4">
                  <Input
                    className="!border-2 !border-secondary bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    placeholder="Enter your email"
                    labelProps={{ className: "hidden" }}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4 relative">
                  <Input
                    className="!border-2 !border-secondary bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                    type={isPasswordVisibleLogin ? "text" : "password"}
                    placeholder="Password"
                    labelProps={{ className: "hidden" }}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibilityLogin}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2"
                    aria-label={
                      isPasswordVisibleLogin
                        ? "Sembunyikan Password"
                        : "Tampilkan Password"
                    }
                  >
                    {isPasswordVisibleLogin ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
                <div className="flex justify-end items-center mb-6">
                  <a href="/LupaPassword" className="text-blue-500 text-sm">
                    Lupa Password?
                  </a>
                </div>
                <Button className="button-effect w-full my-8" type="submit">
                  Masuk
                </Button>
              </form>
              <p className="text-center text-black font-bold mb-6">OR</p>
              <Button className="w-full mb-4 !border-2 !border-secondary text-black text-sm flex items-center justify-center space-x-2 my-8">
                <FcGoogle />
                <span>Continue with Google</span>
              </Button>
            </div>
          </div>
        )}
        {navbarAktif === "/Login" && (
          <div className="w-1/2 bg-primary text-white flex items-center justify-center py-8">
            <div className="p-1 flex flex-col items-center justify-center">
              <div className="text-end px-4">
                <h3 className="text-2xl font-semibold mb-2">
                  Penasaran Bagaimana Kami
                </h3>
                <p className="mb-4">
                  Kami punya sesuatu yang baru dan segar. Silahkan kunjungi
                  beranda kami
                </p>
                <Button
                  className="mt-4 bg-secondary hover:bg-secondary/80"
                  color="white"
                  variant="outlined"
                  onClick={() => handlenavbarAktif("/Beranda")}
                >
                  Cek Beranda
                </Button>
              </div>
              <Image
                className="w-80 h-80 mt-4"
                src={LoginIcon}
                alt="Login Icon"
                priority
              />
            </div>
          </div>
        )}
        {navbarAktif === "/LupaPassword" && (
          <div className="w-1/2 p-8">
            <div className="page-login">
              <h2 className="text-3xl font-semibold text-gray-800 mb-12 ">
                Lupa Password
              </h2>
              <p className="text-center text-black font-bold mb-6">
                Masukkan Alamat Email Anda dibawah ini
              </p>
              <form>
                <div className="mb-4">
                  <Input
                    type="email"
                    label="Email"
                    color="blue"
                    placeholder="Email"
                    required
                  />
                </div>
                <Button className="w-full" color="green" type="submit">
                  Submit
                </Button>
              </form>
              <p className="mt-4 text-center text-gray-500">
                Sudah punya akun?{" "}
                <a href="/Login" className="text-blue-500">
                  Login
                </a>
              </p>
            </div>
          </div>
        )}

        {navbarAktif === "/LupaPassword" && (
          <div className="w-1/2 bg-primary text-white flex items-center justify-center py-8">
            <div className="p-1 flex flex-col items-center justify-center">
              <div className="text-end px-4">
                <h3 className="text-2xl font-semibold mb-2">
                  Penasaran Bagaimana Kami
                </h3>
                <p className="mb-4">
                  Kami punya sesuatu yang baru dan segar. Silahkan kunjungi
                  beranda kami
                </p>
                <Button
                  className="mt-4"
                  color="white"
                  variant="outlined"
                  onClick={() => handlenavbarAktif("/Beranda")}
                >
                  Cek Beranda
                </Button>
              </div>
              <Image
                className="w-80 h-80 mt-4"
                src={LoginIcon}
                alt="Forgot Password Icon"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
