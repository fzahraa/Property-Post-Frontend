import { AuthCover } from "@/src/components/atoms/AuthCover/AuthCover";
import AuthSlider from "@/src/components/molecules/Auth/AuthSlider/AuthSlider";
import OtpVerification from "@/src/components/molecules/Auth/OtpVerification/OtpVerification";
import Head from "next/head";

export default function OtpVerificationCode() {
  return (
    <>
      <Head>
        <title>OTP Verification</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthCover>
          <AuthSlider className="reset-image-slider" />
          <OtpVerification />
        </AuthCover>
      </main>
    </>
  );
}
