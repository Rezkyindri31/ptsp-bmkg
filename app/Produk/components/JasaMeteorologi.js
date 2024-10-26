import React from "react";
import usePagination from "@/hooks/Frontend/usePagination";
import useTampilanJasaMeteorlogi from "@/hooks/Backend/useTampilanJasaMeteorlogi";
import {
  FaMountain,
  FaArrowLeftLong,
  FaArrowRightLong,
  FaCartShopping,
} from "react-icons/fa6";
import {
  Card,
  CardBody,
  Button,
  IconButton,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@/app/MTailwind";

export default function JasaMeteorologi() {
  const { produkJasaMeteorologi, loading, error } = useTampilanJasaMeteorlogi();
  const {
    itemTerkini,
    activePage,
    totalHalaman,
    nextPage,
    prevPage,
    getItemProps,
  } = usePagination(produkJasaMeteorologi);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-8 bg-gradient-to-br from-primary via-white to-secondary rounded-md">
      <h1 className="text-2xl font-extrabold text-center mb-6 uppercase">
        Produk Jasa
      </h1>
      <h5 className="text-center uppercase mb-8">Stasiun Meteorologi</h5>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {itemTerkini.map((product) => (
          <Popover key={product.id}>
            <PopoverHandler>
              <Card className="border-2 hover:shadow-2xl transition relative py-6">
                <div className="flex flex-col items-center my-6">
                  <FaMountain size={100} className="text-secondary" />
                </div>
                <CardBody>
                  <h2 className="text-lg font-semibold text-center">
                    {product.Nama}
                  </h2>
                  <div className="flex flex-col justify-between items-center my-2 space-y-5">
                    <p className="text-gray-500 mb-5">{product.Harga}</p>
                    <Button
                      className="button-effect"
                      disabled={product.Status === "Tidak Tersedia"}
                    >
                      <FaCartShopping size={15} />
                      <span className="text-sm">Masukkan Keranjang</span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </PopoverHandler>
            <PopoverContent>{product.Deskripsi}</PopoverContent>
          </Popover>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-10">
        <Button
          variant="text"
          className="flex items-center gap-2 text-black"
          onClick={prevPage}
          disabled={activePage === 1}
        >
          <FaArrowLeftLong strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2 text-primary">
          {[...Array(totalHalaman)].map((_, index) => (
            <IconButton {...getItemProps(index + 1)} key={index + 1}>
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 text-black"
          onClick={nextPage}
          disabled={activePage === totalHalaman}
        >
          Next
          <FaArrowRightLong strokeWidth={2} className="h-4 w-4 " />
        </Button>
      </div>
    </div>
  );
}
