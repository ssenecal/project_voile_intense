"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

import clipboardImg from "/public/Clipboard-icon.svg";
import dropletImg from "/public/water-drop-drop-svgrepo-com.svg";
import leafImg from "/public/leaf-double.svg";
import glassImg from "/public/glass-svgrepo-com.svg";
import packageImg from "/public/box-minimalistic-svgrepo-com.svg";
import map from "/public/map-footer-gradient.png";
import crossImg from "/public/cross.svg";

const TraceabilityScreen = () => {
  return (
    <motion.div
      key="modal"
      className="w-full h-full relative"
      initial={{ y: "100%", opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full h-full flex flex-col justify-between text-center ">
        <div className="p-2 border-[#DBDBD1] rounded-full border-1 self-end mt-10">
          <Link href={"/"}>
            <Image src={crossImg} className="w-3 h-3" alt="efe"></Image>
          </Link>
        </div>
        <div className="flex flex-col items-center mt-10">
          <Image
            src={clipboardImg}
            alt="clipboard-icon"
            className="w-14 h-14 my-2"
          ></Image>
          <h3 className="text-[14px] text-[#767676] my-2">
            PRODUCT INFORMATION
          </h3>
          <h2 className="text-[24px] font-bold my-2">TRACEABILITY</h2>
        </div>

        <div className="my-10 border-t border-[#DBDBD1] pt-15 flex flex-col justify-between">
          <div className="flex justify-center space-x-4 mt-5 mb-5">
            <div className="p-2 border-[#DBDBD1] rounded-full border-1 drop-shadow-xs">
              <Image
                src={leafImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 border-[#DBDBD1] rounded-full border-1">
              <Image
                src={glassImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 border-[#DBDBD1] rounded-full border-1">
              <Image
                src={dropletImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
            <div className="p-2 border-[#DBDBD1] rounded-full border-1">
              <Image
                src={packageImg}
                alt="clipboard-icon"
                className="w-7 h-7"
              ></Image>
            </div>
          </div>

          <p className="text-gray-600 text-[18px]">
            Every key stage of your product’s creation, from its inception and
            meticulous refinement to the final extraction and elegant packaging.
          </p>

          <Link
            href="/Traceability/TraceabilityMap"
            className="text-black underline underline-offset-8 my-5 text-[18px]"
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

export default TraceabilityScreen;
