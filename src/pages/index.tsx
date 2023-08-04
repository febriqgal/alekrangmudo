/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import HargaComponents from "@/components/L/Harga";
import AddIcons from "@/components/icons/Add";
import DesignIcon from "@/components/icons/Design";
import EditTextIcon from "@/components/icons/EditText";
import PersonIcon from "@/components/icons/Person";
import VideoIcon from "@/components/icons/Video";
import { siteConfig } from "@/constant/config";
import Layout from "@/layout";
import { Button } from "@nextui-org/react";
import AOS from 'aos';
import "aos/dist/aos.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Tilt from 'react-parallax-tilt';
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const item: { title: string, subtitle: string, icon: JSX.Element }[] = [
    {
      title: 'Desain Elegan & Modern',
      subtitle: "Undangan didesain dengan elegan & berkesan.",
      icon: <DesignIcon className="h-7 fill-primary" />
    },
    {
      title: ' Jumlah Tamu Tanpa Batasan',
      subtitle: " Tidak ada biaya tambahan untuk berapapun tamu yang diundang.",
      icon: <PersonIcon className="h-7 fill-primary" />
    },
    {
      title: 'Custom Nama Tamu',
      subtitle: `Sertakan nama teman / saudara / keluarga di undanganmu agar
      lebih eksklusif.`,
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: 'Akses Dimana Saja',
      subtitle: "Akses undangan dari perangkat apapun dengan cepat.",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
    {
      title: '',
      subtitle: "",
      icon: <EditTextIcon className="h-7 fill-primary" />
    },
  ]
  return (
    <Layout>
      <main>
        <Head>
          <title>{`${siteConfig.title}`}</title>
          <meta name="description" content={siteConfig.description} />
          <link rel="icon" href="/logo.png" />
        </Head>

        <div className="items-center overflow-hidden h-screen py-[64px] px-5 space-y-5  sm:px-20 sm:space-y-0 sm:space-x-10 sm:flex">
          <div className="space-y-4">
            <h1 data-aos="fade-down" className="mt-5 text-4xl font-black sm:mt-0 text-primary-500">
              Sebarkan Kebahagiaan dengan Sentuhan Digital: Undangan Eksklusif
              untuk Momen Tak Terlupakan
            </h1>
            <div className="flex flex-col space-y-2 text-center">
              <Button
                data-aos="fade-right"
                startContent={<AddIcons className="h-6 fill-primary" />}
                variant="bordered"
                color="primary"
              >
                Buat Undangan
              </Button>
              <Button
                data-aos="fade-up-right"

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
            data-aos="fade-down-left"
            className="w-full shadow-2xl rounded-2xl"
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


            {item.map((e, i) => {
              return (
                <div key={i}
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"

                >

                  <Tilt tiltAxis={"x"}>
                    <Link href="#">
                      <div className="h-[200px] border border-primary-200 shadow-2xl  rounded-tl-3xl rounded-br-3xl">
                        <div className="flex flex-col items-center justify-center h-full px-5 text-center">
                          {e.icon}
                          <h1 className="font-bold text-primary">{e.title}</h1>
                          <h1 className="font-light text-primary">{e.subtitle}</h1>
                        </div>
                      </div>
                    </Link>
                  </Tilt>
                </div>
              )
            })}

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
    </Layout >
  );
}
