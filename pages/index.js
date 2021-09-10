import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/alimfavicon.png" />
      </Head>

      <Header />
      <main className="max-w-6xl mx-auto ">
        <Banner />
        <About />
      </main>
    </div>
  );
}
