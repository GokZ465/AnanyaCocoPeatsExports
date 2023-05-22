import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjFive, homeObjThree } from "./Data";
import { AnimatePresence, motion } from "framer-motion";
import { fade } from "../../components/Animation/Animation";

function Services() {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFive} />
      <InfoSection {...homeObjOne} />
    </motion.div>
  );
}

export default Services;
