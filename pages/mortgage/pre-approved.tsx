import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Header from "@/src/components/molecules/Common/Header/Header";
import PreApprovedWindow from "@/src/components/molecules/PreApproved/PreApprovedWindow";
import Head from "next/head";

export default function PreApproved() {
  return (
    <>
      <Head>
        <title>Mortgage</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PreApprovedWindow />
        <Footer />
      </main>
    </>
  );
}
