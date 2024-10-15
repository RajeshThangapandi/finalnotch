import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Header, { NavLink, NavLinks } from "../headers/light.js";
import img1 from "../../images/home2.JPG";
import img2 from "../../images/home3.JPG";
import img3 from "../../images/home4.JPG";
import img4 from "../../images/home1.jpg";
import { useNavigate } from 'react-router-dom'; 


// Styled Header without any background and higher z-index
const StyledHeader = styled(Header)`
  ${tw`fixed top-0 left-0 w-full z-30`} /* Ensuring Header stays above the carousel */
  transition: all 0.3s ease;

  ${NavLink} {
    ${({ isScrolled }) =>
      isScrolled
        ? tw`hover:border-black hover:text-black`
        : tw`text-white hover:border-gray-300 hover:text-gray-300`}
  }
`;

// Opacity overlay on the image
// const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-50 z-10`;

// Icon Container for the navigation arrows
const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 20px;
`;

// Styling for the arrows
const Icon = styled.button`
  ${tw`bg-gray-800 rounded-full p-3 shadow-lg`}
  &:hover {
    ${tw`bg-gray-700`}
  }
  color: #ffffff;
  font-size: 24px;
`;

const DropdownMenu = styled.div`
  ${tw`absolute hidden flex-col bg-white shadow-lg rounded-lg py-2`}
  min-width: 12rem;
`;

const DropdownItem = styled.a`
  ${tw`block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer`}
`;

const NavItemWithDropdown = styled.div`
  ${tw`relative`}

  &:hover ${DropdownMenu} {
    ${tw`block`}
  }
`;

const images = [
  {
    src: img1,
    author: "Author 1",
    title: "Title 1",
    topic: "Topic 1",
    description: "Description for image 1.",
  },
  {
    src: img2,
    author: "Author 2",
    title: "Title 2",
    topic: "Topic 2",
    description: "Description for image 2.",
  },
  {
    src: img3,
    author: "Author 3",
    title: "Title 3",
    topic: "Topic 3",
    description: "Description for image 3.",
  },
  {
    src: img4,
    author: "Author 3",
    title: "Title 3",
    topic: "Topic 3",
    description: "Description for image 3.",
  }
];

const FullWidthCarousel = ({ refs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll listener to change NavLink color
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleJobOpeningsClick = () => {
    navigate('/openings'); // Navigate to /openings route
  };

  const navLinks = (
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(refs.homeRef)} style={{ color: "#0ed1b2" }}>Home</NavLink>
      <NavLink onClick={() => scrollToSection(refs.projectRef)} style={{ color: isScrolled ? "black" : "black" }}>Projects</NavLink>
      <NavLink onClick={() => scrollToSection(refs.EqpRef)} style={{ color: isScrolled ? "black" : "black" }}>Equipments</NavLink>
      <NavLink onClick={() => scrollToSection(refs.TeamRef)} style={{ color: isScrolled ? "black" : "black" }}>Team</NavLink>

      {/* Careers with Dropdown */}
      <NavItemWithDropdown>
        <NavLink style={{ color: isScrolled ? "black" : "black" }} className="career-link"  onClick={() => scrollToSection(refs.CareerRef)}>Careers</NavLink>
        <DropdownMenu>
          <DropdownItem onClick={handleJobOpeningsClick}>Job Openings</DropdownItem>
        </DropdownMenu>
      </NavItemWithDropdown>

      <NavLink onClick={() => scrollToSection(refs.ContactRef)} style={{ color: isScrolled ? "black" : "black" }}>Contact Us</NavLink>
    </NavLinks>
  );

  return (
    <>
      <StyledHeader links={navLinks} isScrolled={isScrolled} />
      {/* Adjust the height of the carousel section */}
      <div id="carousel-section" style={{ height: "50vh", overflow: "hidden", marginTop: "80px" }}>
        <div className="carousel" style={{ height: "100%", width: "100%", position: "relative" }}>
          <div className="list" style={{ height: "100%" }}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? 'active' : ''}`}
                style={{
                  zIndex: index === currentIndex ? 1 : 0,
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",  // Ensures the image covers the area
                    objectPosition: "center", // Centers the image
                    transition: "opacity 0.5s ease-in-out", // Smooth transition for images
                  }}
                />
                {/* <OpacityOverlay /> */}
              </div>
            ))}
          </div>
  
          <IconContainer>
            <Icon onClick={handlePrev}>
              <MdArrowBack />
            </Icon>
            <Icon onClick={handleNext}>
              <MdArrowForward />
            </Icon>
          </IconContainer>
        </div>
      </div>
    </>
  );
  
  
};

export default FullWidthCarousel;
