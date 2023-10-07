import { LayoutProvider } from "@/src/components/Context/applyoutContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </LayoutProvider>
  );
}
