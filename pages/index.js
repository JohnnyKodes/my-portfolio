import Head from "next/head";
import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Johnny Karam</title>
        <meta
          name="description"
          content="Johnny Karam's Professional Portfolio Website"
        />
        <link rel="icon" href="/JK_Logo.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen w-full flex justify-center bg-black text-white overflow-hidden">
        <Navbar />
        <HomeSection />
      </main>
    </>
  );
}
