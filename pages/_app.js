import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import "rodal/lib/rodal.css";
import { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return router.pathname != "/" ? (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Layout>
        <Head>
          <title>Zenith | Trade</title>
          <link rel="icon" href="/assets/zenith-logo.png" />{" "}
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  ) : (
    <>
      <Head>
        <title>Zenith</title>
        <link rel="icon" href="/assets/zenith-logo.png" />{" "}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
