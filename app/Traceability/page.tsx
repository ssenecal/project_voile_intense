"use client";
import React from "react";
import TraceabilityScreen from "@/components/general/TraceabilityScreen";
import { AnimatePresence } from "motion/react";

const Traceability = () => {
  return (
    <AnimatePresence mode="popLayout">
      <TraceabilityScreen></TraceabilityScreen>
    </AnimatePresence>
  );
};

export default Traceability;
