import { Input, Button } from "@nextui-org/react";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "devanagari", "latin-ext"],
});
export default function LupaPassword() {
  return (
    <div
      className={`${poppins.className} flex items-center justify-center h-screen`}
    >
      <form className="max-w-sm px-10 py-10 space-y-2 shadow-2xl shadow-primary-200 rounded-xl">
        <Input
          isClearable
          size="sm"
          className="text-primary"
          color="primary"
          type="email"
          variant="bordered"
          label="Email"
        />
        <Button className="w-full" variant="shadow" color="primary">
          Kirim
        </Button>
      </form>
    </div>
  );
}
