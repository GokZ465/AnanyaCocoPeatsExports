import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Layout } from "../Service/styles";
import Toggle from "./Toggle";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import {
  pageAnimation,
  photoAnimation,
  fade,
  lineAnimation,
  slider,
  sliderContainer,
} from "../../components/Animation/Animation";
import { NavLink } from "react-router-dom";
import ImageSlider from "../HomePage/ImageSlider";
import img1 from "./cocopeatblocks/2.jpg";
import img4 from "./growbag/10.jpg";
import img5 from "./growbag/3.jpg";
import img6 from "../../images/Slider/7.jpg";

// Animation

import { useScroll } from "../../components/hooks/useScroll";
const slides1 = [
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/25.jpg",
    // text: "We are a leading exporter of cocopeat",
  },
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/2.jpg",
    // text: "catering to the needs of clients",
  },
];
const slides2 = [
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/cocopeat+chips+block/6.JPG",
    // text: "catering to the needs of clients from",
  },
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/cocopeat+chips+block/7.png",
    // text: "all over the world.",
  },
];
const slides3 = [
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/10.jpg",
    // text: "catering to the needs of clients from",
  },
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/14.jpg",
    // text: "all over the world.",
  },
  {
    title: "train3",
    url: "https://portfolio465.s3.ap-south-1.amazonaws.com/cocopeatblocks/15.jpg",
    // text: "catering to the needs of clients from",
  },
];
const containerStyles = {
  width: "100%",
  height: "58vh",
  margin: "2rem auto",
  display: "inline-block",
  backgroundColor: "transparent",
  maxWidth: "100rem",
  objectFit: "contain",
  transition: "transform 0.5s",
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  borderRadius: "1rem",
  border: "1px solid #15956a",
};

const FAQ = styled(Layout)`
  display: block;

  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;

    color: #15956a;
  }
  table {
    border-collapse: collapse;
  }

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }
  h4 {
    font-size: 1.7em;
    letter-spacing: 1.5px;
    cursor: pointer;

    color: #15956a;
  }
  .faq-line {
    background-color: #2e6930;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .question {
    padding: 0.5rem 0rem;
    svg {
      cursor: pointer;
    }
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: 1.5px;

      color: #15956a;
    }
    ul {
      list-style-type: circle;
      li {
        margin-left: 2rem;
        color: #179b6b;
        font-size: 1.1rem;
      }
    }
  }
  .header-inline {
    display: flex;
    justify-content: space-between;
  }
  line {
    stroke-width: 10px;
    stroke-linecap: round;
    fill: transparent;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 3rem;
    }
    .question,
    .answer {
      width: 100%;
      font-size: 0.7rem;
    }
  }
`;

const FaqSection = () => {
  const [element] = useScroll();
  useEffect(() => {
    function handleResize() {
      setParentwidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  const [parentWidth, setParentwidth] = useState(1000);

  return (
    <motion.div
      variants={photoAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <FAQ initial="hidden" ref={element} className="faq">
        <h2 style={{ fontSize: "2.7rem" }}>Products Listing</h2>
        <AnimateSharedLayout>
          {/* <Toggle title="Cocopeat Grow Bags">
          <div className="answer">
            <p>
              <b>
                <em>CONTENT THAT CUTS THROUGH</em>
              </b>
            </p>
            <p>
              Cocopeat grow bags are made from woven polypropylene bags filled
              with cocopeat. They are used for growing plants in hydroponics
              systems, greenhouses, and other agricultural applications.
              Cocopeat grow bags are highly durable, pH-neutral, and provide
              excellent drainage for plants.
            </p>
            <p>
              <b>
                <em>REACH MORE OF YOUR TARGET AUDIENCE</em>
              </b>
            </p>
            <p>
              Content creation is just the beginning at Skeleton. We maximise
              your video content's reach throughout the buyer's journey with
              social edits, optimisation techniques and paid promotion.
            </p>
            <p>
              <b>
                <em>A STRESS-FREE PROCESS</em>
              </b>
            </p>
            <p>
              With over 15 years of experience creating remarkable vidoes for
              world-class brands, our process is simple, smooth and
              straightforward from day one. No worries.
            </p>
          </div>
        </Toggle> */}
          <Toggle title="Cocopeat Blocks">
            <div className="answer">
              {/* <p>Let's have some meaningful conversations</p> */}
              <p>
                Coco peat is cleaned, dried, and compressed into slabs weighing
                5 kg. More than 75 gallons of water can be stored in a 5 kg
                block of coco peat. Both as potting soil and as a completely
                soil-free growing substrate, coco peat is used. An ideal growing
                medium for soil conditioning, floral and vegetable cultivation,
                and both. Coco peat is perfect for hydroponic gardening,
                mushroom cultivation, building golf courses, and landscaping.
                <NavLink
                  className="styled-link"
                  to="/contact"
                  style={{ width: "fit-content", color: "#179b6b" }}
                >
                  Contact Us
                </NavLink>
                <div style={containerStyles}>
                  <ImageSlider
                    slides={slides1}
                    parentWidth={
                      typeof window !== "undefined"
                        ? window.innerWidth
                        : parentWidth
                    }
                  />
                </div>
                <div>
                  {" "}
                  <p>LOW EC 5 Kg blocks:</p>
                  <table>
                    <tr>
                      <th>Specification</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>EC</td>
                      <td>Low EC / EC &lt; 0.5mS/cm</td>
                    </tr>
                    <tr>
                      <td>pH</td>
                      <td>5.5 to 6.8</td>
                    </tr>
                    <tr>
                      <td>Fibre Content</td>
                      <td>&lt; 2%</td>
                    </tr>
                    <tr>
                      <td>Block Dimension</td>
                      <td>30x30x12 cms</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>5 Kg (11 Lbs)</td>
                    </tr>
                    <tr>
                      <td>Moisture</td>
                      <td>10% to 15%</td>
                    </tr>
                    <tr>
                      <td>Compression Ratio</td>
                      <td>5:1</td>
                    </tr>
                    <tr>
                      <td>Dehydrated Yield</td>
                      <td>75 Liters</td>
                    </tr>
                  </table>
                </div>
                <div>
                  {" "}
                  <p>HIGH EC 5 Kg blocks:</p>
                  <table>
                    <tr>
                      <th>Specification</th>
                      <th>Value</th>
                    </tr>
                    <tr>
                      <td>EC</td>
                      <td>High EC / EC &gt; 1 mS/cm</td>
                    </tr>
                    <tr>
                      <td>Fibre Content</td>
                      <td>&lt; 2%</td>
                    </tr>
                    <tr>
                      <td>Block Dimension</td>
                      <td>30x30x12 cms</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>5 Kg</td>
                    </tr>
                    <tr>
                      <td>Moisture</td>
                      <td>10% to 15%</td>
                    </tr>
                    <tr>
                      <td>Compression Ratio</td>
                      <td>5:1</td>
                    </tr>
                  </table>
                </div>
              </p>
            </div>
          </Toggle>
          <Toggle title="Cocopeat chips block">
            <div className="answer">
              <p></p>
              <p>
                <b>
                  <em></em>
                </b>{" "}
                Cocochips blocks are made from the fibrous outer husk of the
                coconut and are a popular growing medium for a wide range of
                plants. They are an excellent alternative to traditional growing
                media, as they are renewable, sustainable, and environmentally
                friendly. The low EC value of these cocochips blocks makes them
                an ideal choice for growers who want to ensure their plants
                receive the right balance of nutrients.
                <NavLink
                  className="styled-link"
                  to="/subspack"
                  style={{ width: "fit-content", color: "#179b6b" }}
                ></NavLink>
                <div style={containerStyles}>
                  <ImageSlider
                    slides={slides2}
                    parentWidth={
                      typeof window !== "undefined"
                        ? window.innerWidth
                        : parentWidth
                    }
                  />
                </div>
                <table>
                  <thead>
                    <tr>
                      <th>Property</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Material</td>
                      <td>Cocochips (coconut husk chips)</td>
                    </tr>
                    <tr>
                      <td>Block Size</td>
                      <td>5kg</td>
                    </tr>
                    <tr>
                      <td>EC</td>
                      <td>&lt;0.5 mS/cm (low salt content)</td>
                    </tr>
                    <tr>
                      <td>pH</td>
                      <td>5.8 - 6.8</td>
                    </tr>
                    <tr>
                      <td>Moisture</td>
                      <td>&lt;20%</td>
                    </tr>
                    <tr>
                      <td>Particle Size</td>
                      <td>1/2 inch to 3/4 inch (12-18 mm)</td>
                    </tr>
                    <tr>
                      <td>Air-Filled Porosity</td>
                      <td>10 - 20%</td>
                    </tr>
                    <tr>
                      <td>Water Holding Capacity</td>
                      <td>60 - 70%</td>
                    </tr>
                    <tr>
                      <td>Decomposition Rate</td>
                      <td>Slow</td>
                    </tr>
                    <tr>
                      <td>Uses</td>
                      <td>
                        Horticulture, agriculture, and other plant-growing uses.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  In summary, low EC cocochips 5KG blocks are an excellent
                  choice for growers who want to ensure their plants receive the
                  right balance of nutrients. These blocks have a low EC value,
                  making them an ideal choice for growers who want to avoid
                  excessive salt buildup in their growing medium. They are also
                  pH-neutral, provide excellent drainage and air-filled
                  porosity, and retain water well. Overall, these cocochips
                  blocks are a sustainable and effective growing medium for a
                  wide range of plants
                </p>
              </p>
            </div>
          </Toggle>
          <Toggle title="Cocopeat Grow Bags">
            <div className="answer">
              <p>
                Cocopeat growbags are a popular choice for growing plants
                hydroponically, in greenhouses, and in other agricultural
                applications. They are made from woven polypropylene bags filled
                with cocopeat, and are highly durable, pH-neutral, and provide
                excellent drainage for plants. Cocopeat growbags are available
                in various sizes to suit different plant types and growing
                environments.{" "}
                <ul>
                  <li>highly durable</li>
                  <li>pH-neutral</li>
                  <li>and provide excellent drainage for plants</li>
                </ul>
                <p style={{ paddingBottom: "0.5rem" }}>
                  <ul>
                    <ol>
                      We offer two types of closed coco peat grow bags{" "}
                      <li>Complete Coco peat Grow Bags</li>
                      <li>Coco chips mixed Grow Bags</li>
                    </ol>
                  </ul>
                </p>
              </p>
            </div>
            <div style={containerStyles}>
              <ImageSlider
                slides={slides3}
                parentWidth={
                  typeof window !== "undefined"
                    ? window.innerWidth
                    : parentWidth
                }
              />
            </div>
            <div className="answer">
              <p>
                cocopeat growbags are an excellent growing medium for a wide
                range of plants. They are highly durable, provide excellent
                drainage, and retain water well, making them an ideal choice for
                growers who want to ensure their plants are getting the right
                balance of moisture and nutrients
              </p>
            </div>
          </Toggle>
        </AnimateSharedLayout>
      </FAQ>
    </motion.div>
  );
};

export default FaqSection;
