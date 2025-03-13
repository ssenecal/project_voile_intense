"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import clipboardImg from "/public/Clipboard-icon.svg";
import dropletImg from "/public/water-drop-drop-svgrepo-com.svg";
import leafImg from "/public/leaf-double.svg";
import glassImg from "/public/glass-svgrepo-com.svg";
import packageImg from "/public/box-minimalistic-svgrepo-com.svg";
import map from "/public/map-footer.png";

const Traceability = () => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: "100%", opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full h-full flex flex-col text-center">
        <div className="flex flex-col items-center">
          <Image
            src={clipboardImg}
            alt="clipboard-icon"
            className="w-11 h-11 my-2"
          ></Image>
          <p className="text-gray-500 my-2">PRODUCT INFORMATION</p>
          <h2 className="text-xl font-bold my-2">TRACEABILITY</h2>
        </div>

        <div className="my-10 border-t border-gray-300 pt-20">
          <div className="flex justify-center space-x-4 mt-5 mb-5">
            <div className="p-2 bg-gray-100 border-gray-300 rounded-full border-1">
              <Image
                src={leafImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 bg-gray-100 border-gray-300 rounded-full border-1">
              <Image
                src={glassImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 bg-gray-100 border-gray-300 rounded-full border-1">
              <Image
                src={dropletImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 bg-gray-100 border-gray-300 rounded-full border-1">
              <Image
                src={packageImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
          </div>

          <p className="text-gray-600">
            Every key stage of your product’s creation, from its inception and
            meticulous refinement to the final extraction and elegant packaging.
          </p>

          <Link
            href="/Traceability/TraceabilityMap"
            className="text-black underline my-5"
          >
            Start now
          </Link>
        </div>
        <div className="flex">
          <Image
            src={map}
            alt="clipboard-icon"
            className="w-full object-cover h-[272px]"
            fill={false}
          ></Image>
        </div>
      </div>
    </motion.div>
  );
};

export default Traceability;
