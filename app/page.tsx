import Image from "next/image";

import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Discover from "./components/Discover";
import Product from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Service";
import { Nav } from "./components/Nav";
import Products from "./components/Recommended";
import HotDeals from "./components/hotDeals";
import NewArrivals from "./components/newArrivals";


export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Product />
     <Products />
     <HotDeals />
     <NewArrivals />
      <Explore />
      <Services />
      <Blog />
      <Discover />
     <Footer />
    </main>
  );
}
