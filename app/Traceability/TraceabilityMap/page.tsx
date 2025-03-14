"use client";
import React from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const DynamicCarousel = dynamic(() => import("@/components/general/Carousel"), {
  ssr: false,
});

const TraceabilityMap = () => {
  return (
    <AnimatePresence mode="popLayout">
      <DynamicCarousel></DynamicCarousel>
    </AnimatePresence>
  );
};

export default TraceabilityMap;
