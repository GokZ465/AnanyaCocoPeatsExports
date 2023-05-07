import React from "react";
import styled from "styled-components";
import { Layout, Description, ImageContainer } from "./styles";
// Animation
import { AnimatePresence, motion } from "framer-motion/dist/framer-motion";
import { useScroll } from "../../components/hooks/useScroll";
import { fade, photoAnimation } from "../../components/Animation/Animation";
//Import Icons
import clock from "../../components/img/badge.svg";
import diaphragm from "../../components/img/settings.svg";
import money from "../../components/img/delivery.svg";
import teamwork from "../../components/img/money.svg"
import home2 from "../../images/home5_svg.svg";

const Services = styled(Layout)`
  flex-direction: row-reverse;
  justify-content: space-between;
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem 0;
  }
  @media only screen and (min-width: 821px) and (max-width: 1200px) {
    h2 {
      font-size: 3rem;
    }
  }
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    flex-direction: column;
    div {
      &:first-of-type {
        padding-left: 0;
      }
    }
    p {
      font-size: 98%;
      text-align: left;
    }
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
    div {
      padding-left: 0;
    }
    p {
      font-size: 48%;
      text-align: left;
    }
    h2 {
      padding-bottom: 3rem;
      font-size: 1.9rem;
    }
    img {
      width: 10%;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* Kindel and iPad tablet  */
  @media only screen and (min-width: 540px) and (max-width: 820px) {
    padding: 1rem;
    align-items: center;
    justify-content: space-around;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
  }
`;
const Card = styled.div`
  flex-basis: 15rem;

  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: white;
    color: #333;
    padding: 1rem;
    font-size: 1rem;
  }
  p {
    margin: 0 !important;
    font-size: 1rem;
  }
  /* Mobile devices iPhone, Pixel */
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    flex-direction: column;
    font-size: 20%;
    p {
      padding: -1rem;
    }
    h3 {
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
`;

const Image = styled(ImageContainer)`
  /* Mobile devices iPhone, Pixel */
  img {
    width: 100%;
  }
  @media only screen and (min-width: 320px) and (max-width: 539px) {
    img {
      width: 90vw;
      height: 100%;
      margin-bottom: 1rem;
    }
  }
`;

const ServicesSection = () => {
  const [element] = useScroll();

  return (
    <Services>
      <Description style={{ paddingRight: 0, paddingLeft: "3rem" }}>
        <h2 style={{ color: "#28b485", fontSize: "2rem" }}>
          Why <span>Choose</span> Us
        </h2>
        <Cards className="cards">
          <Card className="card">
            <div className="icon">
              <motion.img
                initial="hidden"
                animate="show"
                src={clock}
                alt="icon"
              />
              <h4 style={{color:'#28b485'}}>Quality & Reliablity </h4>
            </div>
            <p style={{ color: "#242424" }}>
            We are committed to providing our clients with reliable service, from the moment you contact us to the delivery of your order.
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h4 style={{color:'#28b485'}} >Satisfied Customer</h4>
            </div>
            <p style={{ color: "#242424" }}>
             We are committed to providing our clients with reliable service, from the moment you contact us to the delivery of your order.

             
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h4 style={{color:'#28b485'}} >Excellent Service</h4>
            </div>
            <p style={{ color: "#242424" }}>
            We take pride in the quality of our cocopeat, which is carefully sourced and processed to ensure that it meets our clients' requirements.
            </p>
          </Card>
          <Card className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h4 style={{color:'#28b485'}} >Timely Delivery</h4>
            </div>
            <p style={{ color: "#242424" }}>
            We offer competitive pricing for our cocopeat products, so you can get the best value for your money.
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <motion.img initial="hidden" animate="show" src={home2} alt="" />
      </Image>
    </Services>
  );
};

export default ServicesSection;
