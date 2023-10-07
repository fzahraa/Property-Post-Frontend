import Head from "next/head";
import Header from "@/src/components/molecules/Common/Header/Header";
import PropertyIntro from "@/src/components/molecules/AllProperties/PropertyIntro/PropertyIntro";
import AllProperties from "@/src/components/molecules/AllProperties/AllProperties/AllProperties";
import FindNow from "@/src/components/molecules/AllProperties/FindNow/FindNow";
import HouseCalculator from "@/src/components/molecules/AllProperties/AllProperties/HouseCalculator/HouseCalculator";
import Footer from "@/src/components/molecules/Common/Footer/Footer";

export default function Properties() {
  return (
    <>
      <Head>
        <title>All Properties</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PropertyIntro />
        <AllProperties />
        <FindNow />
        <HouseCalculator />
        <Footer />
      </main>
    </>
  );
}
