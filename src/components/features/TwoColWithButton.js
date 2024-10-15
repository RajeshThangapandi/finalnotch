import React, { useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import { SectionHeading, Subheading as SubheadingBase } from "../../components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../../components/misc/Buttons.js";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import image1 from "../../images/about4.JPG";
import image2 from "../../images/about2.JPG";
import image3 from "../../images/about3.JPG";
import image4 from "../../images/about1.JPG";

const OuterContainer = styled.div`
  ${tw`py-12`}
  @media (max-width: 800px) {
    ${tw`px-4`} // Adjust padding for medium screens
  }
  @media (max-width: 300px) {
    ${tw`px-2`} // Further adjust padding for very small screens
  }
`;

const Container = tw.div`relative px-6`;
const TwoColumn = tw.div`flex flex-col lg:flex-row justify-between max-w-screen-xl mx-auto items-center my-8 gap-y-12 lg:gap-x-16`;

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(({ textOnLeft }) => [
  tw`md:w-6/12 md:mt-0`,
  textOnLeft ? tw`md:mr-16 lg:mr-20 md:order-first` : tw`md:ml-16 lg:ml-20 md:order-last`
]);

const Image = styled.img(({ imageRounded, imageBorder, imageShadow }) => [
  tw`w-full h-64`,
  imageRounded && tw`rounded`,
  imageBorder && tw`border`,
  imageShadow && tw`shadow`,
  `object-fit: cover;`,
  `object-position: center;`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = styled(SubheadingBase)`
  color: #32c5d2;
  ${tw`text-center md:text-left`}
`;
const Heading = tw(SectionHeading)`font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = styled.p`
  ${tw`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`}
  font-family: "Arial, sans-serif"; // Set the same font family as in "About Us"
  @media (max-width: 300px) {
    ${tw`text-xs`} // Smaller font size for very small screens
  }
`;

const PrimaryButton = styled(PrimaryButtonBase)(({ buttonRounded }) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0`,
  buttonRounded && tw`rounded-full`
]);

const CarouselContainer = styled(Slider)`
  ${tw`w-full`};

  .slick-slide {
    padding: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-dots {
    bottom: -35px;
  }

  img {
    ${tw`w-full h-auto`}
  }
`;

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

export default ({
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
  imageSrcs = [
    image1,
    image2,
    image3,
    image4
  ],
  buttonRounded = true,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  textOnLeft = true
}) => {
  const carouselRef = useRef(null);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const nextSlide = () => {
    carouselRef.current.slickNext();
  };

  const prevSlide = () => {
    carouselRef.current.slickPrev();
  };

  return (
    <OuterContainer>
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
            <CarouselContainer ref={carouselRef} {...carouselSettings}>
              {imageSrcs.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`Carousel Image ${index + 1}`}
                  imageBorder={imageBorder}
                  imageShadow={imageShadow}
                  imageRounded={imageRounded}
                />
              ))}
            </CarouselContainer>
            
            <ControlButton className="left" onClick={prevSlide}>
              <ArrowBackIcon />
            </ControlButton>
            <ControlButton className="right" onClick={nextSlide}>
              <ArrowForwardIcon />
            </ControlButton>
          </ImageColumn>
        </TwoColumn>
      </Container>
    </OuterContainer>
  );
};
