/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Head from "next/head";
import { Button } from "@nextui-org/react";
import Layout from "@/layout";
import { siteConfig } from "@/constant/config";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import HumbergerIcon from "@/components/icons/Humberger";
import VideoIcon from "@/components/icons/Video";
import AddIcons from "@/components/icons/Add";
import ChecklistIcon from "@/components/icons/Checklist";
import CrossIcon from "@/components/icons/Cross";
import Link from "next/link";
import HargaComponents from "@/components/L/Harga";
import DesignIcon from "@/components/icons/Design";
import PersonIcon from "@/components/icons/Person";
import EditTextIcon from "@/components/icons/EditText";
import DevicesIcon from "@/components/icons/Devices";
import DateIcon from "@/components/icons/Date";
import GiftIcon from "@/components/icons/Gift";
import HopeIcon from "@/components/icons/Hope";
import NavigasiIcon from "@/components/icons/Navigasi";
import AddDateIcon from "@/components/icons/AddDate";
import MusicIcon from "@/components/icons/Music";
import GalleryIcon from "@/components/icons/Gallery";
import LoveStoryIcon from "@/components/icons/LoveStory";

export default function Home() {
  return (
    <Layout>
      <main>
        <Head>
          <title>{`${siteConfig.title}`}</title>
          <meta name="description" content={siteConfig.description} />
          <link rel="icon" href="/logo.png" />
        </Head>
        <div className="items-center h-screen py-[64px] px-5 space-y-5  sm:px-20 sm:space-y-0 sm:space-x-10 sm:flex">
          <div className="space-y-4">
            <h1 className="mt-5 text-4xl font-black sm:mt-0 text-primary-500">
              Sebarkan Kebahagiaan dengan Sentuhan Digital: Undangan Eksklusif
              untuk Momen Tak Terlupakan
            </h1>
            <div className="flex flex-col space-y-2 text-center">
              <Button
                startContent={<AddIcons className="h-6 fill-primary" />}
                variant="bordered"
                color="primary"
              >
                Buat Undangan
              </Button>
              <Button
                startContent={<VideoIcon className="h-6 fill-primary-50" />}
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
        <div
          id="fitur"
          className="flex items-center justify-center px-5  sm:px-20 py-[64px]"
        >
          <div className="grid w-full gap-4 pt-10 sm:grid-cols-3">
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col justify-center h-full px-5 text-center">
                  <DesignIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Desain Elegan & Modern
                  </h1>
                  <h1 className="font-light text-primary">
                    Undangan didesain dengan elegan & berkesan.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <PersonIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Jumlah Tamu Tanpa Batasan
                  </h1>
                  <h1 className="font-light text-primary">
                    Tidak ada biaya tambahan untuk berapapun tamu yang diundang.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <EditTextIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Custom Nama Tamu
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Sertakan nama teman / saudara / keluarga di undanganmu agar
                    lebih eksklusif.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <DevicesIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Akses Dimana Saja
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Akses undangan dari perangkat apapun dengan cepat.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <DateIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">RSVP</h1>{" "}
                  <h1 className="font-light text-primary">
                    Estimasi jumlah kehadiran dari orang-orang yang kamu
                    sayangi.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <GiftIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Amplop Digital
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Terima amplop / hadiah dari tamu secara digital via transfer
                    atau e-money.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <HopeIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Wedding Wishes
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Biarkan undangan untuk membagikan kesan & pesan ataupun doa
                    atas hari bahagiamu.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <NavigasiIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Navigasi Lokasi
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Permudah tamu undangan untuk menemukan lokasi acaramu.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <AddDateIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Tambahkan Ke Kalender
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Biarkan tamu undanganmu menyimpan tanggal acaramu di google
                    calendar mereka.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <MusicIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">
                    Background Music
                  </h1>{" "}
                  <h1 className="font-light text-primary">
                    Perkuat kesan dari acara spesialmu dengan musik pilihanmu di
                    undanganmu.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <GalleryIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">Galeri Foto</h1>{" "}
                  <h1 className="font-light text-primary">
                    Bagikan foto/video momen spesialmu dengan pasangan kepada
                    para undangan.
                  </h1>
                </div>
              </div>
            </Link>
            <Link href="#">
              <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                  <LoveStoryIcon className="h-7 fill-primary" />
                  <h1 className="font-bold text-primary">Love Stories</h1>{" "}
                  <h1 className="font-light text-primary">
                    Ceritakan kisah cintamu kepada para undangan.
                  </h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <HargaComponents />

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
