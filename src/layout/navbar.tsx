import LoginComponents from "@/components/Login";
import HumbergerIcon from "@/components/icons/Humberger";
import LoginIcons from "@/components/icons/Login";
import { siteConfig } from "@/constant/config";
import { Button } from "@nextui-org/react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const navigation = [
  { title: "Fitur", href: "#fitur" },
  { title: "Harga", href: "#harga" },
  { title: "Tema", href: "#tema" },
  { title: "portfolio", href: "#portfolio" },
];
export default function NavbarComponents() {
  const route = useRouter();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => {
    setValue(value);
  });
  return (
    <nav
      className={
        value > 0
          ? "fixed top-0 z-50 flex items-center justify-start sm:justify-between w-full px-5 sm:px-20 py-4 transition-all duration-1000 bg-gradient-to-r from-primary-300 to-primary-600"
          : "fixed top-0 z-50 flex items-center justify-start sm:justify-between w-full px-5 sm:px-20 py-4 transition-all duration-1000"
      }
    >
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div
            onClick={() => {
              setOpen(!open);
            }}
            className="sm:hidden"
          >
            <HumbergerIcon
              className={
                value > 0
                  ? "h-10  fill-primary-50  outline-primary-50"
                  : "h-10  fill-primary-400"
              }
            />
          </div>
          <a
            title={`Beranda ${siteConfig.title}`}
            href={"#"}
            className={
              value > 0
                ? "text-2xl font-bold text-primary-50"
                : "text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent"
            }
          >
            Alekrangmudo
          </a>
          <Link href={"/login"}>
            <LoginIcons
              className={
                value > 0
                  ? "h-6 fill-primary-50 sm:hidden"
                  : "h-6 fill-primary sm:hidden"
              }
            />
          </Link>
        </div>
        {open ? (
          <div
            className={
              value > 0
                ? "flex flex-col px-5 py-5 mt-5 text-primary-50 rounded-2xl"
                : "flex flex-col px-5 py-5 mt-5 text-primary-50 rounded-2xl bg-gradient-to-r from-primary-400"
            }
          >
            {navigation.map((e, i) => {
              return (
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  className={"font-semibold"}
                  key={i}
                  href={e.href}
                >
                  {e.title}
                </Link>
              );
            })}
            <Link className={"font-semibold"} href={"/login"}>
              Login
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div
        className={
          value > 0
            ? "items-center hidden space-x-4 sm:flex text-primary-50"
            : "items-center hidden space-x-4 sm:flex"
        }
      >
        {navigation.map((e, i) => {
          return (
            <Link className={"font-semibold"} key={i} href={e.href}>
              {e.title}
            </Link>
          );
        })}
        <Button
          onPress={() => {
            route.push("/login");
          }}
          startContent={<LoginIcons className="h-6 fill-primary-50" />}
          variant={value > 0 ? "bordered" : "shadow"}
          color={value > 0 ? "default" : "primary"}
          className="text-primary-50"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}
