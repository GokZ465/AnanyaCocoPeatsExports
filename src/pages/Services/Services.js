import React from "react";
import { InfoSection, Pricing } from "../../components";
import { homeObjOne, homeObjThree } from "./Data";
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import
 {pageAnimation,
photoAnimation,
fade,
lineAnimation,
slider,
sliderContainer,
} from "../../components/Animation/Animation";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "../../components/";

function Services() {
  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjOne} />
    </motion.div>
  );
}

export default Services;
