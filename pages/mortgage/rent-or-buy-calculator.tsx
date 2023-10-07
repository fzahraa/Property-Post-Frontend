import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Header from "@/src/components/molecules/Common/Header/Header";
import BuyOrRent from "@/src/components/molecules/Mortgage/BuyOrRent/BuyOrRent";
import Head from "next/head";

export default function RentOrBuyCalculator() {
  return (
    <>
      <Head>
        <title>Buy Or Rent Calculator</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <BuyOrRent />
        <Footer />
      </main>
    </>
  );
}
