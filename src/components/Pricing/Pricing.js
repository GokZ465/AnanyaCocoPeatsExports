import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import image1 from "./section3_home/5.jpg";
import image2 from "./section3_home/2.jpg";
import image3 from "./section3_home/3.jpg";
import image4 from "./section3_home/4.jpg";
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
} from "./Pricing.elements";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#28b485", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img
                    src={image1}
                    alt="Gold Rush"
                    style={{
                      borderRadius: "30%",
                      width: "270px",

                      height: "250px",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                </PricingCardIcon>
                {/* <PricingCardPlan>Starter Pack</PricingCardPlan> */}
                <PricingCardPlan>High Areation</PricingCardPlan>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat is carefully processed to ensure that it has a
                    light and fluffy texture that promotes air circulation and ideal balance of air and water for healthy plant growth.
                  </PricingCardFeature>
                  {/* <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiRock /> */}
                  <img
                    src={image2}
                    alt="Gold Rush"
                    style={{
                      borderRadius: "30%",
                      width: "270px",

                      height: "250px",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                </PricingCardIcon>
                {/* <PricingCardPlan>Starter Pack</PricingCardPlan> */}
                <PricingCardPlan>Excellent Drainage</PricingCardPlan>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat boasts excellent drainage properties, making it
                    the perfect growing medium for plants that require
                    well-draining soil you can enjoy the benefits of excellent drainage.
                  </PricingCardFeature>
                  {/* <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCrystalBars /> */}
                  <img
                    src={image3}
                    alt="Gold Rush"
                    style={{
                      borderRadius: "30%",
                      width: "270px",

                      height: "250px",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                </PricingCardIcon>
                {/* <PricingCardPlan>Eco Friendly</PricingCardPlan> */}
                <PricingCardPlan>Eco Friendly</PricingCardPlan>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    We are committed to sustainability and the environment, and
                    our cocopeat products are no exception. Our cocopeat is 100%
                    organic and eco-friendly
                  </PricingCardFeature>
                  {/* <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <GiCutDiamond /> */}
                  <img
                    src={image4}
                    alt="Gold Rush"
                    style={{
                      borderRadius: "30%",
                      width: "270px",

                      height: "250px",
                      borderRadius: "5px 5px 0 0",
                    }}
                  />
                </PricingCardIcon>
                {/* <PricingCardPlan>Diamond Kings</PricingCardPlan> */}
                <PricingCardPlan>Highwater Retention</PricingCardPlan>
                {/* <PricingCardLength>per month</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat is renowned for its exceptional water retention
                    properties. Our cocopeat is carefully sourced and processed to ensure that it retains water for longer periods
                  </PricingCardFeature>
                  {/* <PricingCardFeature>Chemical Free</PricingCardFeature> */}
                </PricingCardFeatures>
                {/* <Button primary>Choose Plan</Button> */}
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
