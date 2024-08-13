import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Discover from "./components/Discover";
import Product from "./components/Productpage";
import Footer from "./components/Footer";
import Services from "./components/Service";


export default function Home() {
  return (
    <main className="bg-white">
      <Product />
      <FeaturedProducts />
      <Explore />
      <Services />
      <Blog />
      <Discover />
     <Footer />
    </main>
  );
}
