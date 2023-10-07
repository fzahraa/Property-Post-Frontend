import { AuthCover } from "@/src/components/atoms/AuthCover/AuthCover";
import AuthSlider from "@/src/components/molecules/Auth/AuthSlider/AuthSlider";
import LoginAuth from "@/src/components/molecules/Auth/LoginAuth/LoginAuth";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthCover>
          <AuthSlider className="login-image-slider" />
          <LoginAuth />
        </AuthCover>
      </main>
    </>
  );
}
