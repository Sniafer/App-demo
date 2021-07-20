import Head from "next/head";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Reviews from "./components/Reviews";
import Product from "./components/Product";

export default function Home() {
  return (
    <div className="bg-gray-800 text-gray-200">
      <Head>
        <title>Demo App Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Hero />
      <Product />
      <Reviews />
      <AboutUs />
      <Footer />
    </div>
  );
}
