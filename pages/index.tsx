import Head from "next/head";
import Header from "@/src/components/molecules/Common/Header/Header";
import Intro from "@/src/components/molecules/Index/Intro/Intro";
import Map from "@/src/components/molecules/Index/Maps/Map";
import PopularProperties from "@/src/components/molecules/Index/PopularProperties/PopularProperties";
import Experience from "@/src/components/molecules/Index/Experience/Experience";
import FeaturedProperties from "@/src/components/molecules/Index/FeaturedProperties/FeaturedProperties";
import AdsSection from "@/src/components/molecules/Index/AdsSection/AdsSection";
import Testimonials from "@/src/components/molecules/Index/Testimonials/Testimonials";
import ContactUs from "@/src/components/molecules/Index/ContactUs/ContactUs";
import OurPartners from "@/src/components/molecules/Index/OurPartners/OurPartners";
import Footer from "@/src/components/molecules/Common/Footer/Footer";

export default function Home() {
  const locationFillter = true;

  return (
    <>
      <Head>
        <title>Property Post</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Intro flag={locationFillter} />
        {locationFillter && <Map />}
        <PopularProperties />
        <Experience />
        <FeaturedProperties />
        <AdsSection />
        <Testimonials />
        <ContactUs />
        <OurPartners />
        <Footer />
      </main>
    </>
  );
}
