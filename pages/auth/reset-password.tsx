import { AuthCover } from "@/src/components/atoms/AuthCover/AuthCover";
import AuthSlider from "@/src/components/molecules/Auth/AuthSlider/AuthSlider";
import ResetPasswordAuth from "@/src/components/molecules/Auth/ResetPasswordAuth/ResetPasswordAuth";
import Head from "next/head";
import { useRouter } from "next/router";

export default function ResetPassword() {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta name="description" content="Property Post" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AuthCover>
          <AuthSlider className="reset-image-slider" />
          <ResetPasswordAuth />
        </AuthCover>
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { req, res } = context;
  const token = req.cookies.token;
  const response = await fetch("http://localhost:3000/user/validateOTP", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp: token }),
  });

  if (!response.ok) {
    res.setHeader("location", "/auth/otp-verification");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }
  return { props: {} };
}
