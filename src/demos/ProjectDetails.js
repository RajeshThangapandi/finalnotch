import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick"; // Import react-slick
import "./ProjectDetails.css"; // Custom styles

const ProjectDetailsContainer = styled.div`
  width: 100%;
  padding: 10px;
  position: relative;
  z-index: 2;
  background-color: #f4f8fc;
`;

const ProjectTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  z-index: 2;
`;

const MediaSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  z-index: 2;
`;

const ImageContainer = styled.div`
  flex: 1 1 45%;
  max-width: 45%;
  z-index: 2;
  cursor: pointer; /* Show pointer cursor */
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease; /* Add transition for smooth effect */
    
    &:hover {
      transform: scale(1.05); /* Zoom in effect on hover */
    }
  }
`;

const VideoContainer = styled.div`
  flex: 1 1 45%;
  max-width: 45%;
  z-index: 2;
  
  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const ProjectDetailsContent = styled.div`
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const DetailItem = styled.p`
  font-size: 1rem;
  margin-bottom: 8px;
  z-index: 2;
  
  strong {
    font-weight: 600;
  }
`;

const BackButton = styled(Link)`
  display: block;
  margin: 15px auto;
  text-align: center;
  padding: 8px 16px;
  background-color: #4caf50;
  color: white;
  border-radius: 5px;
  text-decoration: none;
  width: 180px;
  z-index: 2;
`;

const SVGBackground = styled.svg`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  animation: moveBg 15s infinite linear;
  opacity: 0.3;
`;

const CarouselContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100; /* Ensure it's on top of other elements */
`;

const CarouselImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

const ProjectDetails = ({ tabs }) => {
  const { projectId } = useParams();
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  let project;

  // Find the project by its ID
  Object.keys(tabs).forEach((tabKey) => {
    const foundProject = tabs[tabKey].find((p) => p.project_id === parseInt(projectId));
    if (foundProject) {
      project = foundProject;
    }
  });

  if (!project) {
    return <div>Project not found</div>;
  }

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentImageIndex,
  };

  return (
    <>
      {/* Background SVG circles outside the container */}
      <SVGBackground
        viewBox="0 0 1200 2000"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <circle
            key={index}
            cx={Math.random() * 1200}
            cy={Math.random() * 2000}
            r={Math.random() * 50 + 20}
            fill={`hsl(${Math.random() * 360}, 70%, 70%)`}
          />
        ))}
      </SVGBackground>

      <ProjectDetailsContainer>
        <ProjectTitle>{project.title}</ProjectTitle>

        {/* Media Section for Image and Video */}
        <MediaSection>
          {project.imageSrc && (
            <ImageContainer onClick={() => handleImageClick(0)}> {/* Update index if multiple images */}
              <img src={project.imageSrc} alt={project.title} />
            </ImageContainer>
          )}
          {project.videoSrc && (
            <VideoContainer>
              <video controls>
                <source src={project.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </VideoContainer>
          )}
        </MediaSection>

        {/* Project details content */}
        <ProjectDetailsContent>
          {project.location && (
            <DetailItem>
              <strong>Location:</strong> {project.location}
            </DetailItem>
          )}
          {project.client && (
            <DetailItem>
              <strong>Client:</strong> {project.client}
            </DetailItem>
          )}
          {project.estimated_cost && (
            <DetailItem>
              <strong>Estimated Cost:</strong> {project.estimated_cost}
            </DetailItem>
          )}
          {project.content && (
            <DetailItem>
              <strong>Project Details:</strong> {project.content}
            </DetailItem>
          )}
        </ProjectDetailsContent>

        <BackButton to="/">Back to Projects</BackButton>
      </ProjectDetailsContainer>

      {/* Image Carousel */}
      {isCarouselOpen && (
        <CarouselContainer onClick={closeCarousel}>
          <Slider {...settings}>
            {project.additionalImages && project.additionalImages.map((imgSrc, index) => (
              <CarouselImage key={index} src={imgSrc} alt={`Image ${index + 1}`} />
            ))}
          </Slider>
        </CarouselContainer>
      )}
    </>
  );
};

export default ProjectDetails;
