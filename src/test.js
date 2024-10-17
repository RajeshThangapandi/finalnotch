import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import image1 from "../../images/about4.JPG";
import image2 from "../../images/about2.JPG";
import image3 from "../../images/about3.JPG";
import image4 from "../../images/about1.JPG";

import { SectionHeading, Subheading as SubheadingBase } from "../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";

// Your existing styled-components (Subheading, Heading, PrimaryButton)
const Subheading = styled(SubheadingBase)`
  color: #32c5d2;
  ${tw`text-center md:text-left`}
`;
const Heading = tw(SectionHeading)`font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const PrimaryButton = styled(PrimaryButtonBase)(({ buttonRounded }) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  buttonRounded && tw`rounded-full`
]);

// Description component
const Description = styled.p`
  ${tw`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`}
  font-family: "Arial, sans-serif"; // Set the same font family as in "About Us"
  @media (max-width: 300px) {
    ${tw`text-xs`} // Smaller font size for very small screens
  }
`;

// Outer container styled component
const OuterContainer = styled.div`
  ${tw`py-12 relative`}
  @media (max-width: 800px) {
    ${tw`px-4`} // Adjust padding for medium screens
  }
  @media (max-width: 300px) {
    ${tw`px-2`} // Further adjust padding for very small screens
  }
`;

// Main layout styled components
const Container = tw.div`relative px-6`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto items-center my-8 gap-y-12 lg:gap-x-16`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(({ textOnLeft }) => [
  tw`md:w-6/12 md:mt-0`,
  textOnLeft ? tw`md:mr-16 lg:mr-20 md:order-first` : tw`md:ml-16 lg:ml-20 md:order-last`
]);

// Updated Image component with increased height
const Image = styled.img(({ imageRounded, imageBorder, imageShadow }) => [
  tw`w-full h-96`, // Increased height to h-96
  imageRounded && tw`rounded`,
  imageBorder && tw`border`,
  imageShadow && tw`shadow`,
  `object-fit: cover;`,
  `object-position: center;`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

// Control button styled component
const ControlButton = styled.button`
  ${tw`absolute top-1/2 transform -translate-y-1/2 bg-white text-primary-500 rounded-full p-3 shadow-lg transition-all duration-300`}
  z-index: 10;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.left {
    left: 10px;
  }

  &.right {
    right: 10px;
  }

  &:hover {
    ${tw`bg-primary-500 text-white shadow-2xl`}
    transform: scale(1.1);
  }
`;

// Circle SVG component
const CircleBackground = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; // Make sure it is behind the content
`;

const MainComponent = ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  description = (
    <>
      <Description>
        At Notch India Projects, we pride ourselves on being a trusted partner in India’s road infrastructure development.
        With over 20 years of experience, our company, founded by A.D. Meenaachi Sundram, a first-generation entrepreneur, has grown into a leading force in the industry, achieving a gross turnover of 459 crores in the financial year 2023-2024.
      </Description>
      <br />
      <Description>
        We specialize in a wide range of infrastructure services, including overlaying, road widening, forming new bypasses, and constructing major bridges.
        With the most number of batch mix plants in Tamil Nadu, we’ve established ourselves as the state’s leading overlaying contractor, ensuring quality and reliability in every project we undertake.
      </Description>
    </>
  ),
  primaryButtonText = "Contact Us",
  primaryButtonUrl = "https://timerse.com",
  imageSrcs = [image1, image2, image3, image4],
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  textOnLeft = true
}) => {
  return (
    <OuterContainer>
      <CircleBackground>
        {[...Array(10)].map((_, index) => (
          <circle
            key={index}
            cx={`${Math.random() * 100}vw`} // Random horizontal position
            cy={`${Math.random() * 100}vh`} // Random vertical position
            r="50" // Fixed radius for round circles
            fill={`hsl(${Math.random() * 360}, 70%, 50%)`} // Random color
            style={{ opacity: 0.1 }} // Opacity for circles
          />
        ))}
      </CircleBackground>

      <Container>
        <TwoColumn>
          <TextColumn textOnLeft={textOnLeft}>
            <TextContent>
              <Subheading>{subheading}</Subheading>
              <Heading>{heading}</Heading>
              {description}
              <PrimaryButton buttonRounded={buttonRounded} as="a" href={primaryButtonUrl}>
                {primaryButtonText}
              </PrimaryButton>
            </TextContent>
          </TextColumn>

          <ImageColumn>
            <Swiper
              modules={[Navigation, Pagination]} // Only import Navigation and Pagination
              navigation={{
                prevEl: ".left",
                nextEl: ".right",
              }}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
            >
              {imageSrcs.map((src, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={src} // Directly set the src attribute for immediate loading
                    alt={`Carousel Image ${index + 1}`}
                    imageBorder={imageBorder}
                    imageShadow={imageShadow}
                    imageRounded={imageRounded}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <ControlButton className="left">
              <ChevronLeftIcon />
            </ControlButton>
            <ControlButton className="right">
              <ChevronRightIcon />
            </ControlButton>
          </ImageColumn>
        </TwoColumn>
      </Container>
    </OuterContainer>
  );
};

export default MainComponent;
