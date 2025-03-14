import LeafIcon from "./LeafIcon";
import GlassIcon from "./GlassIcon";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DropIcon from "./DropIcon";
import BoxIcon from "./BoxIcon";
import PathIcon from "./PathIcon";
import Leafs from "./Leafs";

const components = [Leafs, GlassIcon, DropIcon, BoxIcon, PathIcon];

interface DynamicComponentProps {
  index: number; // Index passed as a prop
}

export default function IconAnimation({ index }: DynamicComponentProps) {
  const SelectedComponent = components[index] || components[0]; // Default fallback

  return (
    <div className="p-4 flex flex-col items-center w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Ensures Framer Motion recognizes changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full flex justify-center"
        >
          <SelectedComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
