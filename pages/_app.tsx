import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../components/layouts/header";
import Footer from "../components/layouts/footer";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> 
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </>
  );
}
