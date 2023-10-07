import Header from "@/src/components/molecules/Common/Header/Header";
import GuideBlogs from "@/src/components/molecules/Mortgage/GuideBlogs/GuideBlogs";
import GuideHome from "@/src/components/molecules/Mortgage/MortgageGuide/Guide";
import Footer from "@/src/components/molecules/Common/Footer/Footer";
import Head from "next/head";

export default function MortgageGuide() {
  return (
    <>
      <Head>
        <title>Mortgage Guide</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <GuideHome />
        <GuideBlogs />
        <Footer />
      </main>
    </>
  );
}
