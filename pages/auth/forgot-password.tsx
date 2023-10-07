import { AuthCover } from "@/src/components/atoms/AuthCover/AuthCover";
import AuthSlider from "@/src/components/molecules/Auth/AuthSlider/AuthSlider";
import ForgotPasswordAuth from "@/src/components/molecules/Auth/ForgotPasswordAuth/ForgotPasswordAuth";
import Head from "next/head";

export default function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthCover>
          <AuthSlider className="reset-image-slider" />
          <ForgotPasswordAuth />
        </AuthCover>
      </main>
    </>
  );
}
