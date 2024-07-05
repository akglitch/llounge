import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import Explore from "./components/Explore";
import Blog from "./components/Blog";
import Discover from "./components/Discover";
import Product from "./components/Productpage";


export default function Home() {
  return (
    <main className="bg-white">
      <Product />
      <FeaturedProducts />
      <Explore />
      <Blog />
      <Discover />
     
    </main>
  );
}
