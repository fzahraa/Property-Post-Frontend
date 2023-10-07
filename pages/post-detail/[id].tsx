import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from "next";
import Head from "next/head";
import Header from "@/src/components/molecules/Common/Header/Header";
import PostDetail from "@/src/components/molecules/PostDetail/PostDetail";
import SimilarProperties from "@/src/components/molecules/PostDetail/SimilarProperties/SimilarProperties";
import FindNow from "@/src/components/molecules/AllProperties/FindNow/FindNow";
import HouseCalculator from "@/src/components/molecules/AllProperties/AllProperties/HouseCalculator/HouseCalculator";
import Footer from "@/src/components/molecules/Common/Footer/Footer";

const fetchProperties = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/property/getProperties"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const properties = await fetchProperties();

  const paths = properties?.map((property: any) => ({
    params: {
      id: `${property.id}`,
    },
  }));

  return {
    paths: paths || [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const properties = await fetchProperties();

  const { params } = context;
  const { id } = params || {};
  //@ts-ignore
  const property = properties?.find((item: any) => item.id === parseInt(id));

  if (!property) {
    return {
      notFound: true,
    };
  }

  return {
    props: { property },
  };
};

function Properties({
  property,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!property) {
    return <div>Property not found.</div>;
  }

  return (
    <>
      <Head>
        <title>{property.projectName}</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <PostDetail property={property} />
        <SimilarProperties />
        <FindNow />
        <HouseCalculator />
        <Footer />
      </main>
    </>
  );
}

export default Properties;
