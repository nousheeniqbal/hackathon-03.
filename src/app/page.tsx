"use client"
// import Image from "next/image";

import Fonts from "@/components/Fonts";
import Hero from "@/components/Hero";
// import Products from "./products/page";
// import Top_sell from "./products/sell";
// import Dress from "@/components/dress";
import CustomerCarousel from "@/components/carousel";
// import ProductDetailPage from "./product/[id]/page";
// import ProductCards from "./product/page";


export default function Home() {
  return (
  <div>
    <Hero />
   <Fonts />
   {/* <Products/>
   <Top_sell/>
   <Dress/> */}
   <CustomerCarousel/>
   {/* <ProductCards/> */}
   {/* <ProductDetailPage/> */}
   </div>
  );
}
