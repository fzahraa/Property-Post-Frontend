import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Header from "@/src/components/molecules/Common/Header/Header";
import MortgageRates from "@/src/components/molecules/Mortgage/MortgageRates/MortgageRates";
import Head from "next/head";

export default function Rates() {
  return (
    <>
      <Head>
        <title>Mortgage Rates</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <MortgageRates />
        <Footer />
      </main>
    </>
  );
}
