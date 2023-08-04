import AddIcons from "@/components/icons/Add";
import Logo from "@/components/icons/Logo";
import { Tooltip } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/router";
import PersonIcon from "@/components/icons/Person";
import DateIcon from "@/components/icons/Date";
import DesignIcon from "@/components/icons/Design";
import VideoIcon from "@/components/icons/Video";
const LayoutAdmin = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className="flex min-h-screen text-slate-100">
            <SideNav />
            <div className="w-full">
                <div className="h-[35px] text-center items-center flex justify-center m-4 rounded border-2 border-dashed border-primary bg-primary-200" >
                    <h1 className="text-xl font-bold text-primary-900">Dashboard Admin</h1>
                </div>
                <div className="h-[400px] m-4 min-h-screen rounded border-2 border-dashed border-primary bg-primary-200">
                    <main className="flex items-center justify-center text-black">
                        {children}
                    </main>
                </div>
            </div>
        </div >
    );
};

const SideNav = () => {

    const nav = [
        {
            title: "Tambah User",
            href: "/admin",
            icon: <PersonIcon className="h-6 fill-white" />
        },
        {
            title: "Tambah PArjok",
            href: "/admin/add",
            icon: <DateIcon className="h-6 fill-white" />
        },
        {
            title: "admin",
            href: "/",
            icon: <DesignIcon className="h-6 fill-white" />
        },
        {
            title: "admin",
            href: "/",
            icon: <VideoIcon className="h-6 fill-white" />
        },
    ]
    const route = useRouter()
    return (
        // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
        <nav className="flex flex-col items-center max-h-full gap-2 p-4 w-fit bg-primary">
            {/* Temp logo from https://logoipsum.com/ */}


            <Link href={'/'}>
                <Logo className="h-10 mb-4 fill-white" />
            </Link>
            {nav.map((e, i) => {
                return (

                    <Tooltip key={i} placement="left" color="primary" content={e.title}>
                        <Link href={e.href}>
                            <motion.button
                                className="relative p-3 text-xl transition-colors rounded-md shadow-2xl bg-primary-400 hover:bg-primary-600"

                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="relative z-10 block">
                                    {e.icon}
                                </span>
                                {route.pathname == e.href ?
                                    <AnimatePresence>
                                        {(
                                            <motion.span
                                                className="absolute inset-0 z-0 rounded-md bg-primary-600"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            ></motion.span>
                                        )}
                                    </AnimatePresence> : <></>}
                            </motion.button>
                        </Link>
                    </Tooltip>
                )
            })}

        </nav >
    );
};



export default LayoutAdmin;