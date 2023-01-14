import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}
