"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import PlotCard from "@/components/general/PlotCard";
import MapComponent from "@/components/general/MapComponent";
import IconAnimation from "./IconAnimation";
import SquaredImage from "./SquaredImage";

const plots = [
  { id: 1, plotNumber: "VOILE-P01", location: "26°27'14\"N 37°40'34\"E" },
  { id: 2, plotNumber: "VOILE-P02", location: "26°28'15\"N 37°41'35\"E" },
  { id: 3, plotNumber: "VOILE-P03", location: "26°29'16\"N 37°42'36\"E" },
  { id: 4, plotNumber: "VOILE-P04", location: "26°30'17\"N 37°43'37\"E" },
  { id: 5, plotNumber: "VOILE-P05", location: "26°31'18\"N 37°44'38\"E" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : plots.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < plots.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex h-full w-full">
      <div className="w-full z-10">
        <div className="overflow-hidden">
          {/* Carousel Container */}
          <div className="w-full h-wull">
            {plots.map((plot, index) => {
              const position = index - currentIndex;
              return (
                <motion.div
                  key={plot.id}
                  className="absolute w-[400px] bottom-6"
                  initial={{ x: position * 400 + 14 }}
                  animate={{ x: position * 400 + 14 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <PlotCard
                    plotNumber2={plots[index].plotNumber}
                    location2={plots[index].location}
                    currentIndex2={currentIndex}
                    total={plots.length}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    id2={plots[index].id}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      <MapComponent locationIndex={currentIndex} />
      <div className="relative h-full w-full">
        <IconAnimation index={currentIndex}></IconAnimation>
      </div>
      <div className="relative h-full w-full">
        <SquaredImage index={currentIndex}></SquaredImage>
      </div>
    </div>
  );
};

export default Carousel;
