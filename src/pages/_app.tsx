import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import NextProgress from "next-progress";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <NextProgress
        color="#48091a"
        height={3}
        delay={300}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
