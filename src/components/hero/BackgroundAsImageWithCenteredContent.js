import React, { useState, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import Header, { NavLink, NavLinks } from "../headers/light.js";
import img1 from "../../images/home2.JPG";
import img2 from "../../images/home3.JPG";
import img3 from "../../images/home4.JPG";
import img4 from "../../images/home1.jpg";
import { useNavigate } from "react-router-dom";

// Styled Header with a bottom margin for spacing
const StyledHeader = styled(Header)`
  ${tw`fixed top-0 left-0 w-full z-30 transition-all duration-300`}
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "none"};

  ${NavLink} {
    ${({ isScrolled }) =>
      isScrolled
        ? tw`hover:border-black hover:text-black text-black`
        : tw`text-white hover:border-gray-300 hover:text-gray-300`}
`;

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

// Carousel images data
const images = [
  { src: img1, author: "Author 1", title: "Title 1", topic: "Topic 1" },
  { src: img2, author: "Author 2", title: "Title 2", topic: "Topic 2" },
  { src: img3, author: "Author 3", title: "Title 3", topic: "Topic 3" },
  { src: img4, author: "Author 4", title: "Title 4", topic: "Topic 4" },
];

const FullWidthCarousel = ({ refs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navLinks = (
    <NavLinks key={1}>
      <NavLink onClick={() => scrollToSection(refs.homeRef)} style={{ color: "#0ed1b2" }}>Home</NavLink>
      <NavLink onClick={() => scrollToSection(refs.projectRef)} style={{ color: isScrolled ? "black" : "black" }}>Projects</NavLink>
      <NavLink onClick={() => scrollToSection(refs.EqpRef)} style={{ color: isScrolled ? "black" : "black" }}>Equipments</NavLink>
      <NavLink onClick={() => scrollToSection(refs.TeamRef)} style={{ color: isScrolled ? "black" : "black" }}>Team</NavLink>
      <NavLink style={{ color: isScrolled ? "black" : "black" }} className="career-link" onClick={() => scrollToSection(refs.CareerRef)}>Careers</NavLink>
      <NavLink onClick={() => scrollToSection(refs.ContactRef)} style={{ color: isScrolled ? "black" : "black" }}>Contact Us</NavLink>
    </NavLinks>
  );

  return (
    <>
      <StyledHeader links={navLinks} isScrolled={isScrolled} />
      {/* Adjusted carousel section */}
      <div
        id="carousel-section"
        style={{
          height: "calc(100vh - 130px)", // Ensures carousel maintains size based on paddingTop
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "whitesmoke",
          paddingTop: "130px", // Adjust this as needed
        }}
      >
        <div
          className="carousel"
          style={{
            height: "100%",
            width: "95%", // Increased width of the carousel
            position: "relative",
            perspective: "1500px", // Adds 3D perspective
          }}
        >
          <div className="list" style={{ height: "100%" }}>
            {images.map((image, index) => (
              <div
                key={index}
                className={`item ${index === currentIndex ? "active" : ""}`}
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transformStyle: "preserve-3d", // Important for 3D effect
                  transform: index === currentIndex
                    ? "rotateY(0deg)" // Active slide stays in place
                    : "rotateY(180deg)", // Inactive slides flip away
                  transition: "transform 0.8s ease-in-out",
                  backfaceVisibility: "hidden", // Ensures clean flipping
                }}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
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
