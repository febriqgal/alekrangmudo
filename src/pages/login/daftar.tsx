import { Input, Button } from "@nextui-org/react";

import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
});
export default function Daftar() {
  const route = useRouter();
  return (
    <div
      className={`${poppins.className} flex items-center justify-center h-screen`}
    >
      <form className="max-w-xs px-10 py-10 space-y-2 shadow-2xl rounded-xl">
        <h1 className="mb-6 text-lg font-semibold text-center">Daftar</h1>
        <Input
          isClearable
          size="sm"
          className="text-primary"
          color="primary"
          type="text"
          variant="bordered"
          label="Nama"
        />
        <Input
          isClearable
          size="sm"
          className="text-primary"
          color="primary"
          type="email"
          variant="bordered"
          label="Email"
        />
        <Input
          size="sm"
          className="text-primary"
          type="password"
          color="primary"
          variant="bordered"
          label="Password"
        />
        <div className="flex flex-col mb-6 -mt-2 space-y-1">
          <Button variant="shadow" color="primary">
            Daftar
          </Button>
        </div>
      </form>
    </div>
  );
}
