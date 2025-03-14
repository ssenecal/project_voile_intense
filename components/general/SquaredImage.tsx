import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SquaredBottle from "./SquaredBottle";
import SquaredForest from "./SquaredForest";
import SquaredMedicine from "./SquaredMedicine";
import SquaredScientist from "./SquaredScientist";
import Empty from "./Empty";

const components = [
  SquaredForest,
  SquaredMedicine,
  SquaredScientist,
  SquaredBottle,
  Empty,
];

interface DynamicComponentProps {
  index: number; // Index passed as a prop
}

export default function SquaredImage({ index }: DynamicComponentProps) {
  const SelectedComponent = components[index] || components[0]; // Default fallback

  return (
    <div className="p-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Ensures Framer Motion recognizes changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="relative h-[129px] w-[129px]"
        >
          <SelectedComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
