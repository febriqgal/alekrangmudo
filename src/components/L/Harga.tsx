import React from "react";
import CrossIcon from "../icons/Cross";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import ChecklistIcon from "../icons/Checklist";

export default function HargaComponents() {
  return (
    <div
      id="harga"
      className="flex items-center justify-center px-5 sm:px-20  py-[64px] "
    >
      <div className="grid w-full grid-cols-1 gap-4 pt-10 sm:grid-cols-3">
        <Link
          href="#"
          className="relative block p-4 overflow-hidden rounded-lg shadow-2xl sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-200 via-primary-600 to-primary-900"></span>
          <h1 className="text-center">Silver</h1>
          <h1 className="text-3xl font-bold text-center">Rp 99.000</h1>
          <div className="my-10">
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Masa Aktif 3 Bulan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Bahasa Indonesia / Inggris</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1> Jumlah Tamu Tidak Terbatas</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Custom Nama Tamu</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Cover Pembuka</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Detail Info Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Profil Pasangan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Protokol Kesehatan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Navigasi Lokasi</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Tambahkan ke Google Calendar</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Countdown Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Amplop Digital</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Wedding Wishes</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Konfirmasi Kehadiran</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Background Music</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Galeri Foto</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Video Prewed</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Tombol Live Streaming</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Love Stories</h1>
            </div>
          </div>
          <div>
            <Button
              className="w-full bg-gradient-to-r from-primary-400 to-primary-600"
              color="primary"
              variant="shadow"
            >
              Pesan
            </Button>
          </div>
        </Link>
        <Link
          href="#"
          className="relative block p-4 overflow-hidden rounded-lg shadow-2xl sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-200 via-primary-600 to-primary-900"></span>
          <h1 className="text-center">Gold</h1>
          <h1 className="text-3xl font-bold text-center">Rp 149.000</h1>
          <div className="my-10">
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Masa Aktif 3 Bulan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Bahasa Indonesia / Inggris</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1> Jumlah Tamu Tidak Terbatas</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Custom Nama Tamu</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Cover Pembuka</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Detail Info Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Profil Pasangan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Protokol Kesehatan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Navigasi Lokasi</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Tambahkan ke Google Calendar</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Countdown Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Amplop Digital</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Wedding Wishes</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Konfirmasi Kehadiran</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Background Music</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Galeri Foto</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Video Prewed</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Tombol Live Streaming</h1>
            </div>
            <div className="flex space-x-2">
              <CrossIcon className="h-6 fill-primary-600" />
              <h1>Love Stories</h1>
            </div>
          </div>
          <div>
            <Button
              className="w-full bg-gradient-to-r from-primary-400 to-primary-600"
              color="primary"
              variant="shadow"
            >
              Pesan
            </Button>
          </div>
        </Link>
        <Link
          href="#"
          className="relative block p-4 overflow-hidden rounded-lg shadow-2xl sm:p-6 lg:p-8"
        >
          {" "}
          <div className="absolute top-0 left-0 px-4 text-white bg-primary rounded-br-xl">
            Best Deals
          </div>
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary-200 via-primary-600 to-primary-900"></span>
          <h1 className="text-center">Diamond</h1>
          <h1 className="text-3xl font-bold text-center">Rp 199.000</h1>
          <div className="my-10">
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Masa Aktif 3 Bulan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Bahasa Indonesia / Inggris</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1> Jumlah Tamu Tidak Terbatas</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Custom Nama Tamu</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Cover Pembuka</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Detail Info Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Profil Pasangan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Protokol Kesehatan</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Navigasi Lokasi</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Tambahkan ke Google Calendar</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Countdown Acara</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Amplop Digital</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Wedding Wishes</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Konfirmasi Kehadiran</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Background Music</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Galeri Foto</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Video Prewed</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Tombol Live Streaming</h1>
            </div>
            <div className="flex space-x-2">
              <ChecklistIcon className="h-6 fill-green-600" />
              <h1>Love Stories</h1>
            </div>
          </div>
          <div>
            <Button
              className="w-full bg-gradient-to-r from-primary-400 to-primary-600"
              color="primary"
              variant="shadow"
            >
              Pesan
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
}
