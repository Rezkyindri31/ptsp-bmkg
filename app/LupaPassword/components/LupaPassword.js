import { Input, Button, Card, CardBody, Typography } from "@/app/MTailwind";

function ForgotPassword() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-96 shadow-lg">
        <CardBody>
          <div className="text-center mb-4">
            <img
              src="https://www.material-tailwind.com/img/logo.svg"
              alt="BMKG Bengkulu Logo"
              className="h-10 mx-auto"
            />
            <Typography variant="h5" className="mt-4 mb-2">
              BMKG BENGKULU
            </Typography>
            <Typography className="text-gray-500">LUPA KATA SANDI ?</Typography>
            <Typography className="text-gray-500 mt-2">
              Masukkan email Anda di sini untuk mengatur ulang kata sandi Anda
            </Typography>
          </div>
          <div className="mt-6">
            <Input
              type="email"
              label="Masukan Email Anda"
              size="lg"
              className="mb-6"
            />
            <Button fullWidth className="bg-gray-500 hover:bg-gray-600">
              Kirim
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForgotPassword;
