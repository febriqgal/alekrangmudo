/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Head from "next/head";
import { Button } from "@nextui-org/react";
import Layout from "@/layout";
import { siteConfig } from "@/constant/config";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <Layout>
      <main>
        <Head>
          <title>{`${siteConfig.title}`}</title>
          <meta name="description" content={siteConfig.description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="items-center h-screen py-[64px] px-5 space-y-5  sm:px-20 sm:space-y-0 sm:space-x-10 sm:flex">
          <div className="space-y-4">
            <h1 className="mt-5 text-4xl font-black sm:mt-0">
              Sebarkan Kebahagiaan dengan Sentuhan Digital: Undangan Eksklusif
              untuk Momen Tak Terlupakan
            </h1>
            <div className="flex flex-col space-y-2">
              <Button variant="bordered" color="primary">
                Buat Undangan
              </Button>
              <Button
                variant="shadow"
                className="bg-gradient-to-r from-primary-400 to-primary-600"
                color="primary"
              >
                Cara Buat Undangan
              </Button>
            </div>
          </div>
          <Image
            className="w-full rounded-2xl"
            width={400}
            height={200}
            alt="#"
            src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          />
        </div>
        <div id="fitur" className="flex items-center justify-center h-screen">
          <h1>Fitur</h1>
        </div>
        <div id="harga" className="flex items-center justify-center h-screen">
          <h1>harga</h1>
        </div>
        <div id="tema" className="flex items-center justify-center h-screen">
          <h1>tema</h1>
        </div>
        <div
          id="portfolio"
          className="flex items-center justify-center h-screen"
        >
          <h1>portfolio</h1>
        </div>
      </main>
    </Layout>
  );
}
