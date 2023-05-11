import React, { useState, useEffect } from "react";
import logo3 from "./logo3.svg";
import {
  Nav,
  NavbarContainer,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [Buttonset, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);
  const [servicesClick, setServicesClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setProductsClick(false);
    setServicesClick(false);
  };
  const handleServicesClick = () => {
    setHomeClick(false);
    setProductsClick(false);
    setServicesClick(true);
  };
  const handleProductsClick = () => {
    setHomeClick(false);
    setProductsClick(true);
    setServicesClick(false);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <div style={{ maxHeight: "50rem" }}>
              <img
                src={logo3}
                alt="Ananya Coco Logo"
                width="500px"
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
            {/* <NavLogo to='/'> 
                        <NavIcon /> Ananya Cocopeat
                    </NavLogo> */}
            <HamburgerIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                <NavLinks to="/" onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>

              <NavItem
                onClick={handleServicesClick}
                servicesClick={servicesClick}
              >
                <NavLinks to="/about" onClick={closeMobileMenu}>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem
                onClick={handleServicesClick}
                servicesClick={servicesClick}
              >
                <NavLinks to="/contact" onClick={closeMobileMenu}>
                  Contact Us
                </NavLinks>
              </NavItem>

              <NavItem
                onClick={handleProductsClick}
                productsClick={productsClick}
              >
                <NavLinks to="/Products" onClick={closeMobileMenu}>
                  Products
                </NavLinks>
              </NavItem>

              <NavItemBtn>
                {/* {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )} */}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

/*
import React, { useState, useEffect } from "react";
import logo from "./logo2-removebg-preview.png";
import logo2 from "./logo2.png";
import logo3 from "./logo3.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [homeClick, setHomeClick] = useState(false);
  const [servicesClick, setServicesClick] = useState(false);
  const [productsClick, setProductsClick] = useState(false);

  const handleHomeClick = () => {
    setHomeClick(true);
    setProductsClick(false);
    setServicesClick(false);
  };
  const handleServicesClick = () => {
    setHomeClick(false);
    setProductsClick(false);
    setServicesClick(true);
  };
  const handleProductsClick = () => {
    setHomeClick(false);
    setProductsClick(true);
    setServicesClick(false);
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    // so if the screensize is <= 960px then set button state to false
    if (window.innerwidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <div style={{ maxHeight: "50rem" }}>
              <img
                src={logo3}
                alt="Ananya Coco Logo"
                width="500px"
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
            <NavLogo to='/'> 
                        <NavIcon /> Ananya Cocopeat
                    </NavLogo> 
                  //   <HamburgerIcon onClick={handleClick}>
                  //   {click ? <FaTimes- /> : <FaBars />}
                  // </HamburgerIcon>
                  // <NavMenu onClick={handleClick} click={click}>
                  //   <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                  //     <NavLinks to="/" onClick={closeMobileMenu}>
                  //       Home
                  //     </NavLinks>
                  //   </NavItem>
      
                  //   <NavItem
                  //     onClick={handleServicesClick}
                  //     servicesClick={servicesClick}
                  //   >
                  //     <NavLinks to="/about" onClick={closeMobileMenu}>
                  //       About Us
                  //     </NavLinks>
                  //   </NavItem>
                  //   <NavItem
                  //     onClick={handleServicesClick}
                  //     servicesClick={servicesClick}
                  //   >
                  //     <NavLinks to="/contact" onClick={closeMobileMenu}>
                  //       Contact Us
                  //     </NavLinks>
                  //   </NavItem>
      
                  //   <NavItem
                  //     onClick={handleProductsClick}
                  //     productsClick={productsClick}
                  //   >
                  //     <NavLinks to="/Products" onClick={closeMobileMenu}>
                  //       Products
                  //     </NavLinks>
                  //   </NavItem>
      
                  //   <NavItemBtn>
                      {/* {button ? (
                        <NavBtnLink to="/sign-up">
                          <Button primary>SIGN UP</Button>
                        </NavBtnLink>
                      ) : (
                        <NavBtnLink to="/sign-up">
                          <Button onClick={closeMobileMenu} fontBig primary>
                            SIGN UP
                          </Button>
                        </NavBtnLink>
                      )} 
      //               </NavItemBtn>
      //             </NavMenu>
      //           </NavbarContainer>
      //         </Nav>
      //       </IconContext.Provider>
      //     </>
      //   );
      // }
      
      // export default Navbar;
      



*/
