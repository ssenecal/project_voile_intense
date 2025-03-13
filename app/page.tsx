"use client";
import Image from "next/image";
import logo from "/public/logo.png";
import logo2 from "/public/bottle.jpeg";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="w-full h-full flex flex-col"
      transition={{ duration: 2 }}
      exit={{ opacity: 1 }}
    >
      <div className="h-[542px] relative">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src={logo} alt="logo" className="h-[95px] w-[95px]"></Image>
        </div>
        <Image src={logo2} alt="logo2" className="w-full h-[542px]"></Image>
      </div>
      <div className="flex flex-col h-[384]">
        <div className="m-8">
          <h1 className="m-2.5">VOILE INTENSE</h1>
          <p className="m-2">
            Explore the journey behind the creation of our new luxurious elixir,
            crafted from a curated selection of rare seeds sourced from a
            pristine desert region.
          </p>
        </div>
        <div className="flex flex-col">
          <Link
            className="text-center border-1 uppercase mx-8 my-2 p-2 border-color-button"
            href="/"
          >
            Discover the story
          </Link>
          <Link
            className="text-center uppercase border-1 mx-8 my-2 p-2 bg-black text-white"
            href="/Traceability"
          >
            My product journey
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
