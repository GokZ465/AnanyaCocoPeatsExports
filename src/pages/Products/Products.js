import React from "react";
import { InfoSection } from "../../components";
import { homeObjOne, homeObjTwo } from "./Data";
import { AnimatePresence, motion } from "framer-motion";

import {
  pageAnimation,
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from "../../components/Animation/Animation";
function Products() {
  return (
    <motion.div variants={slider} initial="hidden" animate="show" exit="exit">
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </motion.div>
  );
}

export default Products;
