import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Header from "@/src/components/molecules/Common/Header/Header";
import CommonTerms from "@/src/components/molecules/Mortgage/CommonTerms/CommonTerms";
import MortgageCalculator from "@/src/components/molecules/Mortgage/MortgageCalculator/MortgageCalculator";
import Head from "next/head";

export default function Mortgage() {
  return (
    <>
      <Head>
        <title>Mortgage Calculator</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <MortgageCalculator />
        <CommonTerms />
        <Footer />
      </main>
    </>
  );
}
