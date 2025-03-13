"use client";
import React from "react";
import dynamic from "next/dynamic";

const DynamicCarousel = dynamic(() => import("@/components/general/Carousel"), {
  ssr: false,
});

const TraceabilityMap = () => {
  return (
    <div>
      <DynamicCarousel></DynamicCarousel>
    </div>
  );
};

export default TraceabilityMap;
