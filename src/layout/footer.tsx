import FacebookIcon from "@/components/icons/Facebook";
import InstagramIcon from "@/components/icons/Instagram";
import Logo from "@/components/icons/Logo";
import TwitterIcon from "@/components/icons/Twitter";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="border-t-1 rounded-t-3xl border-primary">
        <div className="max-w-5xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <a href={"#"} className={"text-2xl  font-bold text-primary"}>
              Alekrangmudo
            </a>
          </div>
          <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-primary-400">
            Sebarkan Kebahagiaan dengan Sentuhan Digital: Undangan Eksklusif
            untuk Momen Tak Terlupakan
          </p>

          <ul className="flex justify-center gap-6 mt-6 md:gap-8">
            <li>
              <Link
                href="https://facebook.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="sr-only">Facebook</span>
                <FacebookIcon className="h-6 fill-primary" />
              </Link>
            </li>

            <li>
              <Link
                href="https://instagram.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="sr-only">Instagram</span>
                <InstagramIcon className="h-6 fill-primary" />
              </Link>
            </li>

            <li>
              <Link
                href="https://twitter.com/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 fill-primary" />
              </Link>
            </li>
          </ul>
          <h1 className="mt-6 text-sm text-center text-primary-400">
            ©2023 - Febriqgal🔥, All Rights Reserved.
          </h1>
        </div>
      </footer>
    </>
  );
}
