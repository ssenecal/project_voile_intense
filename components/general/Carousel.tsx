"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PlotCard from "@/components/general/PlotCard";
import MapComponent from "@/components/general/MapComponent";
import IconAnimation from "./IconAnimation";
import SquaredImage from "./SquaredImage";
import Link from "next/link";
import crossImg from "/public/cross.svg";
import Image from "next/image";

const plots = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : plots.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < plots.length - 1 ? prev + 1 : 0));
  };

  return (
    <motion.div
      key="m1234"
      initial={{ y: "100%", opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative h-full w-full"
    >
      <div className="w-full h-full flex flex-col justify-between z-10">
        <div className="flex flex-row justify-between">
          <div className="h-40 w-40 z-10">
            <SquaredImage index={currentIndex}></SquaredImage>
          </div>
          <div className="p-2 border-[#DBDBD1] bg-white rounded-full border-1 self-end self-start mr-10 mt-10 z-10">
            <Link href={"/"}>
              <Image src={crossImg} className="w-3 h-3" alt="efe"></Image>
            </Link>
          </div>
        </div>
        <div className="relative flex w-[428px] h-[244px] z-10 mb-12 overflow-hidden">
          {plots.map((plot, index) => {
            const position = index - currentIndex;
            return (
              <motion.div
                key={plot.id}
                className="absolute top-0 left-[18px]"
                initial={{}}
                animate={{ x: position * 380 + 14 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                <PlotCard
                  currentSlide={currentIndex}
                  onPrev={handlePrev}
                  onNext={handleNext}
                  slide={plots[index].id}
                  plot={2}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full">
        <IconAnimation index={currentIndex}></IconAnimation>
      </div>
      <div className="absolute top-0 left-0">
        <MapComponent locationIndex={currentIndex} />
      </div>
    </motion.div>
  );
};

export default Carousel;
