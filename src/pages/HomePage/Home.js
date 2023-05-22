import React, { useEffect, useState } from "react";
import { InfoSection, Pricing } from "../../components";
import { motion } from "framer-motion";
import { homeObjOne } from "./Data";
import ImageSlider from "./ImageSlider";
import ServiceSection from "../Service/ServiceSection.js";

import img1 from "../../images/Slider/1.jpg";

import img5 from "../../images/Slider/5.jpg";
import img7 from "../../images/Slider/7.jpg";
import img10 from "../../images/Slider/10.jpg";
import img11 from "../../images/Slider/11.jpg";
import img12 from "../../images/Slider/12.jpg";
import img13 from "../../images/Slider/13.jpg";
import img15 from "../../images/Slider/15.jpg";
import img17 from "../../images/Slider/17.jpg";
import img18 from "../../images/Slider/18.jpg";

import {
  pageAnimation,
  fade,
  slider,
} from "../../components/Animation/Animation";
import FaqSection from "../Product/FaqSection";

const slides = [
  {
    url: `${img1}`,
    title: "plane",
    text: "Welcome to Ananya Cocopeat Exports,  your reliable partner for high-quality cocopeat exports",
  },
  {
    url: `${img18}`,
    title: "train3",
    text: "We are a leading exporter of cocopeat, catering to the needs of clients from all over the world.",
  },

  {
    url: `${img13}`,
    title: "train2",
    text: "Whether you need cocopeat for gardening, horticulture, or any other purpose, we've got you covered.",
  },
  {
    url: `${img11}`,
    title: "hotel",
    text: " Our cocopeat is made from natural coconut husks, which are processed to create a fine, uniform texture that's perfect for a variety of applications    ",
  },
  {
    url: `${img5}`,
    title: "train2",
    text: "Whether you need cocopeat for gardening, horticulture, or any other purpose, we've got you covered.",
  },
  {
    url: `${img7}`,
    title: "plane2",
    text: "We are committed to providing our clients with reliable service, from the moment you contact us to the delivery of your order",
  },
  {
    url: `${img10}`,
    title: "hotel2",
    text: "We offer competitive pricing for our cocopeat products, so you can get the best value for your money.",
  },
  {
    url: `${img12}`,
    title: "hotel2",
    text: "We take pride in the quality of our cocopeat, which is carefully sourced and processed to ensure that it meets requirements.",
  },
  {
    url: `${img15}`,
    title: "train3",
    text: "We are a leading exporter of cocopeat, catering to the needs of clients from all over the world.",
  },
  {
    url: `${img17}`,
    title: "train3",
    text: "We are a leading exporter of cocopeat, catering to the needs of clients from all over the world.",
  },
];

const containerStyles = {
  width: "100%",
  height: "58vh",
  margin: "0 auto",
  display: "inline-block",
};
const Home = () => {
  useEffect(() => {
    function handleResize() {
      setParentwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

  const [parentWidth, setParentwidth] = useState(1000);

  return (
    <motion.div variants={fade} initial="hidden" animate="show" exit="exit">
      <motion.div variants={pageAnimation} style={containerStyles}>
        <ImageSlider
          slides={slides}
          parentWidth={
            typeof window !== "undefined" ? window.innerWidth : parentWidth
          }
        />
      </motion.div>
      <InfoSection variants={slider} {...homeObjOne} />
      <ServiceSection id="scrollhere" />
      {/* <InfoSection variants={slider} {...homeObjThree} /> */}
      {/* <InfoSection {...homeObjTwo} /> */}
      <Pricing />
      <FaqSection />
    </motion.div>
  );
};

export default Home;
