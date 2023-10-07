import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Header from "@/src/components/molecules/Common/Header/Header";
import CommonTerms from "@/src/components/molecules/Mortgage/CommonTerms/CommonTerms";
import MortgageRefinance from "@/src/components/molecules/Mortgage/RefinanceCalculator/MortgageRefinance";
import Head from "next/head";

export default function RefinanceCalculator() {
  return (
    <>
      <Head>
        <title>Refinance Calculator</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <MortgageRefinance />
        <CommonTerms />
        <Footer />
      </main>
    </>
  );
}
