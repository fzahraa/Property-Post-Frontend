import Head from "next/head";
import DashboardHeader from "@/src/components/molecules/Dashboard/DashboardHeader/DashboardHeader";
import DashboardBody from "@/src/components/molecules/Dashboard/DashboardBody/DashboardBody";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// function useAuthToken() {
//   const token = localStorage.getItem("token");
//   return token;
// }
function useAuthToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("token");
    return token;
  }  
}

export default function Dashboard() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = useAuthToken();
  useEffect(() => {
    //const token = useAuthToken();

    if (!token) {
      router.push("/auth/login");
    } else {
      setIsAuthenticated(true);
    }
  }, [token, router]);
 
  return (
    <>
      <Head>
        <title>Dahboard</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isAuthenticated && (
        <main>
          <DashboardHeader />
          <DashboardBody />
        </main>
      )}
    </>
  );
}
