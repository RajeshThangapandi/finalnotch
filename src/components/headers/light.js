import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import logo from "../../images/logotransparent.png";

// Create StyledHeader with scrolling effect
// Create StyledHeader with a fixed white background
const StyledHeader = styled.header(() => [
  tw`flex justify-between items-center w-full fixed top-0 left-0 z-50 px-4 py-4 transition-all duration-300`, // Reduced padding
  { backgroundColor: 'rgba(255, 255, 255, 1)', height: '70px' }, // Optional: Set a fixed height
]);

// Update NavLink styles with smaller font size
export const NavLink = styled.a`
  ${tw`my-1 lg:mx-4 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1 border-b-2 border-transparent`}
  
  font-size: 0.9rem; // Reduced font size for a more compact look
  color: black;

  &:nth-child(1) {
    color: ${({ isScrolled }) => (isScrolled ? 'gray' : '#0ed1b2')};
  }

  &.career-link {
    color: black;
  }

  &:hover {
    color: rgb(37, 150, 190);
  }

  @media (max-width: 1024px) {
    color: black;
    &:nth-child(1) {
      color: #0ed1b2;
    }
  }

  @media (max-width: 1024px) {
    font-size: 0.8rem; // Further reduce font size for mobile
  }
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0 px-6 py-2 rounded bg-green-500 text-gray-100
  hocus:bg-green-700 hocus:text-gray-200 focus:shadow-outline border-b-0
`;

// Update LogoLink padding to reduce height
export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  padding: px; // Reduced padding
  border-radius: 8px;

  img {
    ${tw`w-16 h-16 mr-3`} // Reduce logo size if needed
  }
`;

// Make sure to check the height of the MobileNavLinksContainer if needed
export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between md:hidden`;


// Update NavLink styles

export const NavLinks = styled.div`
  ${tw`inline-block flex lg:flex-row lg:items-center`}
  gap: 0;

  @media (min-width: 640px) and (max-width: 1023px) {
    gap: 20px;
  }
`;






export const NavToggle = tw.button`
  md:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;

export const MobileNavLinks = motion(styled.div`
  ${tw`md:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-black`}
  background-color: white;

  ${NavLinks} {
    ${tw`flex flex-col items-center`}

    ${NavLink} {
      color: black !important;  // Force other links to stay black in the mobile view

      &:nth-child(1) {
        color: #0ed1b2 !important;  // Ensure the Home link remains #0ed1b2 (teal) in mobile view
      }
    }
  }
`);



const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });
};

export const DesktopNavLinks = tw.nav`
  hidden md:flex flex-1 justify-between items-center
  gap-4 
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "md" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];
  const homeRef = useRef(null);

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links;

  // Effect to add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <StyledHeader isScrolled={isScrolled}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
          {links}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </StyledHeader>
  );
};

// Update the collapseBreakPointCssMap
const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
  xl: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
  tablet: {
    mobileNavLinks: tw`hidden`,
    desktopNavLinks: tw`flex`,
    mobileNavLinksContainer: tw`hidden`,
  },
};
