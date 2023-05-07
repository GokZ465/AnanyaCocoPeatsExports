import React from "react";
import { Button } from "../../globalStyles";
import logo3 from "../Navbar/logo3.svg";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./Footer.elements";

function Footer() {
  const date = new Date();

  return (
    <FooterContainer>
      {/* <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription> */}
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">
              Welcome to Ananya Cocopeat Exports, your reliable partner for
              high-quality cocopeat exports. We are a leading exporter of
              cocopeat, catering to the needs of clients from all over the world
            </FooterLink>
            {/* <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Careers</FooterLink>
            <FooterLink to='/'>Investors</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink> */}
          </FooterLinkItems>
          <FooterLinkItems style={{ textAlign: "center", marginLeft: "3rem" }}>
            <FooterLinkTitle style={{ textAlign: "center" }}>
              Quick Links
            </FooterLinkTitle>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                alignItems: "flex-start",
                flexFlow: "column",
                justifyContent: "center",
              }}
            >
              <FooterLink to="/contact">Contact Us</FooterLink>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/products">Products</FooterLink>
            </div>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle> Contact:</FooterLinkTitle>
            <FooterLink to="/">
              Ananya cocopeat 52/1B2, Mullipallam village , Sholavandan,
              Madurai- 625207
            </FooterLink>

            <FooterLink to="/"> Phone Number : +91 9597225658</FooterLink>
            <FooterLink to="/">
              {" "}
              Mail : info@ananyacocopeatexports.com
            </FooterLink>
            <FooterLink to="/">
              {" "}
              Site : www.ananyacocopeatexports.com
            </FooterLink>
            {/* <FooterLink to="/">Agency</FooterLink>
            <FooterLink to="/">Influencer</FooterLink> */}
          </FooterLinkItems>
          {/* <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/">Instagram</FooterLink>
            <FooterLink to="/">Facebook</FooterLink>
            <FooterLink to="/">Youtube</FooterLink>
            <FooterLink to="/">Twitter</FooterLink>
          </FooterLinkItems> */}
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <div style={{ height: "6.1rem" }}>
              <img
                src={logo3}
                alt="Ananya Coco Logo"
                width="600px"
                height="560px"
                // style={{ width: "100%" , height: "100%", paddingBottom:'0.5rem' , fill:'white' }}
                style={{
                  filter:
                    "invert(94%) sepia(95%) saturate(2%) hue-rotate(243deg) brightness(105%) contrast(100%) ",
                  width: "100%",
                  height: "100%",
                  paddingBottom: "0.5rem",
                  paddingTop: "0.3rem",
                }}
              />
            </div>
          </SocialLogo>
          <WebsiteRights>
            © Copyright 2021 Ananya cocopeat exports. All Rights Reserved{" "}
          </WebsiteRights>
          {/* <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="YouTube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons> */}
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
