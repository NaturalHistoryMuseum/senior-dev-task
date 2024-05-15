import type { AppProps } from "next/app";
import Head from "next/head";
import "../css/global.css";
import "../css/cube.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
