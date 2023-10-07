import Head from "next/head";
import Header from "@/src/components/molecules/Common/Header/Header";
import PropertyIntro from "@/src/components/molecules/AllProperties/PropertyIntro/PropertyIntro";
import AllProperties from "@/src/components/molecules/AllProperties/AllProperties/AllProperties";
import FindNow from "@/src/components/molecules/AllProperties/FindNow/FindNow";
import HouseCalculator from "@/src/components/molecules/AllProperties/AllProperties/HouseCalculator/HouseCalculator";
import Footer from "@/src/components/molecules/Common/Footer/Footer";
import PostAdd from "@/src/components/molecules/PostAdd/PostAdd";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
function useAuthToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
    return token;
  }  
}

export default function AddPost() {
  const route = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = useAuthToken();

  useEffect(() => {
    //const token = useAuthToken();

    if (!token) {
      route.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [token, route]);
  return (
    <>
      <Head>
        <title>Add Post</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated && (
        <main>
          <Header />
          <PostAdd />
          <FindNow />
          <HouseCalculator />
          <Footer />
        </main>
      )}
    </>
  );
}
