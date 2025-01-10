import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Assignment from Daniel Amaechi</title>
        <link rel="icon" href="logo.png" />
      </Head>

      <div
        className={`antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        {/* <Header /> */}

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </>
  );
}
