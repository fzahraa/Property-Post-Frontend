import { AuthCover } from "@/src/components/atoms/AuthCover/AuthCover";
import AuthSlider from "@/src/components/molecules/Auth/AuthSlider/AuthSlider";
import SignUpAuth from "@/src/components/molecules/Auth/SignUpAuth/SignUpAuth";
import Head from "next/head";

export default function Register() {
  return (
    <>
      <Head>
        <title>Signup</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthCover>
          <AuthSlider />
          <SignUpAuth />
        </AuthCover>
      </main>
    </>
  );
}
