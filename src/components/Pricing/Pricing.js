import React from "react";
import { Button } from "../../globalStyles";
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
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#15956a", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Why To Choose Cocopeat for Agri Uses?</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
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
                <PricingCardPlan>High Aeration</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat is carefully processed to ensure that it has a
                    light and fluffy texture that promotes air circulation and
                    ideal balance of air and water for healthy plant growth.
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
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
                <PricingCardPlan>Excellent Drainage</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat boasts excellent drainage properties, making it
                    the perfect growing medium for plants that require
                    well-draining soil. You can enjoy the benefits of excellent
                    drainage.
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
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
                <PricingCardPlan>Eco Friendly</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    We are committed to sustainability and the environment, and
                    our cocopeat products are no exception. Our cocopeat is 100%
                    organic and eco-friendly.
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
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
                <PricingCardPlan>High Water Retention</PricingCardPlan>
                <PricingCardFeatures>
                  <PricingCardFeature style={{ textAlign: "center" }}>
                    Our cocopeat is renowned for its exceptional water retention
                    properties. Our cocopeat is carefully sourced and processed
                    to ensure that it retains water for longer periods.
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
