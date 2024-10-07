import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md"; // Material icons for navigation arrows
import Header, { NavLink, NavLinks } from "../headers/light.js";
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";


// Styled Header without any background
const StyledHeader = styled(Header)`
  ${tw`fixed top-0 left-0 w-full`}
  background: none;
  ${NavLink} {
    ${tw`text-gray-900 hover:border-gray-300 hover:text-gray-300`}
  }
`;

// Background Image container for each slide
// const BackgroundImage = styled.div`
//   background-image: url(${(props) => props.imageUrl});
//   background-size: cover;
//   background-position: center;
//   height: 50vh; /* Full height */
//   width: 100%; /* Full width */
//   position: relative;
// `;

// Opacity overlay on the image
const OpacityOverlay = tw.div`absolute inset-0 bg-black opacity-50 z-10`;

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

// Text Overlay for the carousel
const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 15;
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
];

const FullWidthCarousel = ({ refs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const navLinks = (
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(refs.homeRef)} style={{ color: "#0ed1b2" }}>Home</NavLink>
      <NavLink onClick={() => scrollToSection(refs.projectRef)} style={{ color: "black" }}>Projects</NavLink>
      <NavLink onClick={() => scrollToSection(refs.EqpRef)} style={{ color: "black" }}>Equipments</NavLink>
      <NavLink onClick={() => scrollToSection(refs.TeamRef)} style={{ color: "black" }}>Team</NavLink>
      <NavLink onClick={() => scrollToSection(refs.CareerRef)} style={{ color: "black" }}>Careers</NavLink>
      <NavLink onClick={() => scrollToSection(refs.ContactRef)} style={{ color: "black" }}>Contact Us</NavLink>
    </NavLinks>
  );

  return (
    <>
      <div id="carousel-section" style={{ height: "70vh", overflow: "hidden" }}>
        <div className="carousel" style={{ height: "100%", width: "100%", position: "relative" }}>
          <div className="list">
            {images.map((image, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? 'active' : ''}`}
                style={{ zIndex: index === currentIndex ? 1 : 0, height: "100%", width: "100%", position: "absolute", top: 0, left: 0 }}
              >
                <img src={image.src} alt={image.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <OpacityOverlay /> {/* Add the overlay here */}
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

      <StyledHeader links={navLinks} />
    </>
  );
};

export default FullWidthCarousel;
