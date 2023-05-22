import React from "react";
import { motion } from "framer-motion";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

import { photoAnimation } from "../../components/Animation/Animation";
const InfoSection = ({
  primary,
  lightBg,
  darkBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  buttonBool,
}) => {
  return (
    <motion.div variants={photoAnimation}>
      <InfoSec lightBg={lightBg} darkBg={darkBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                {/* <Link to="/products">
                  {buttonBool === "false" ? (
                    <></>
                  ) : (
                    <Button big fontBig primary={primary}>
                      {" "}
                      {buttonLabel}
                    </Button>
                  )}
                </Link> */}
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </motion.div>
  );
};

export default InfoSection;
