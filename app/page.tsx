import Image from "next/image";

import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Discover from "./components/Discover";
import Product from "./components/Productpage";
import Footer from "./components/Footer";
import Services from "./components/Service";
import { Nav } from "./components/Nav";
import Products from "./components/Recommended";
import HotDeals from "./components/hotDeals";


export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Product />
     <Products />
     <HotDeals />
      <Explore />
      <Services />
      <Blog />
      <Discover />
     <Footer />
    </main>
  );
}
