import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { Images } from "lucide-react";
import Image from "next/image";
import Offers from "./offer";



export default function Footer(){
    return (
        <main className="bg-[#F0F0F0] w-full h-full md:h-[450px] relative mt-32  max-w-screen-2xl mx-auto">
          {/*  */}
          <span className="absolute top-[-80px]">
          <Offers/>
          </span>
        {/* container */}
        <div  className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b ">
          {/* top div */}
          <div className="flex flex-col justify-center items-center w-[200px]"> 
            <ul>
                <h2 className="text-2xl sm:text-3xl font-extrabold">SHOP.CO</h2>
                <p className="text-sm mt-1"> We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                   {/* icon */}
                   <div className="flex items-center space-x-3 mt-1">
                    <FaInstagram className="text-xl"/>
                     <FaFacebook className="text-xl"/>
                       <FaGithub className="text-xl"/>
                      <FaTwitter className="text-xl"/>
                   </div>
            </ul>
          </div>
          {/* mid div */}
          <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4">
              {/* box 1 */}
                 <ul className="space-y-3 ">
                   <h2 className="text-sm sm:text-2xl">COMPANY</h2>
                   <li  className="text-sm">About Us</li>
                   <li  className="text-sm">Features</li>
                   <li  className="text-sm">Works</li>
                   <li  className="text-sm">Career</li>
                   </ul>
                {/* box 2 */}
                <ul className="space-y-3">
                   <h2 className="text-sm sm:text-2xl">HELP</h2>
                   <li  className="text-sm">Customer Supports</li>
                   <li  className="text-sm">Delivery Details</li>
                   <li  className="text-sm">Terms and Conditions</li>
                   <li  className="text-sm">Privacy Policy</li>
                   </ul>
                {/* box 3*/}
                <ul className="space-y-3">
                   <h2 className="text-sm sm:text-2xl">FAQS</h2>
                   <li  className="text-sm">Account</li>
                   <li  className="text-sm">Manage Deliveries</li>
                   <li  className="text-sm">Oders</li>
                   <li  className="text-sm">Payments</li>
                   </ul>
                {/* box 4 */}
                <ul className="space-y-3">
                   <h2 className=" text-sm sm:text-2xl">RESOURCES</h2>
                   <li className="text-sm">Free Books</li>
                   <li className="text-sm">Development Tutorial</li>
                   <li className="text-sm">How to -Blog</li>
                   <li className="text-sm">Youtube playlist</li>
                   </ul>
                {/* complete boxes*/}

          </div>
           
        </div>
         {/* bottom div */}
         <div className="flex flex-col sm:flex-row justify-between items-center mt-3">
                <p className="text-sm">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-center ">
                    <Image src={"/footer-1.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer-2.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer-3.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer-4.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                    <Image src={"/footer-5.png"} className="w-[50px]" width={100} height={100} alt="pic"/>
                </div>
            </div>
        </main>
    )
}