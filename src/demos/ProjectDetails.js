
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ProjectContainer = styled.div`${tw`p-6 bg-gray-100`}`;
const Banner = styled.div`${tw`w-full h-72 bg-cover bg-center mb-8 rounded-lg`}`;
const ContentSection = styled.div`${tw`grid grid-cols-1 md:grid-cols-2 gap-8`}`;
const Gallery = styled.div`${tw`grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8`}`;
const Image = styled.img`${tw`w-full h-48 object-cover rounded-lg shadow-md`}`;
const ProjectTitle = styled.h1`${tw`text-4xl font-bold text-gray-800`}`;
const ProjectContent = styled.p`${tw`text-gray-600 mt-4`}`;

const ProjectDetails = () => {
  return (
    <ProjectContainer>
      {/* Full-Width Banner */}
      <Banner style={{ backgroundImage: "url('https://img.freepik.com/free-photo/illustration-construction-site_23-2151850228.jpg?size=626&ext=jpg&ga=GA1.1.1500932460.1727266924&semt=ais_hybrid')" }} />

      {/* Content Section */}
      <ContentSection>
        <div>
          <ProjectTitle>Project Title</ProjectTitle>
          <ProjectContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio
          </ProjectContent>
        </div>
      </ContentSection>

      {/* Gallery */}
      <Gallery>
        <Image src="https://img.freepik.com/free-photo/illustration-construction-site_23-2151850228.jpg?size=626&ext=jpg&ga=GA1.1.1500932460.1727266924&semt=ais_hybrid" alt="Gallery 1" />
        <Image src="https://img.freepik.com/free-photo/illustration-construction-site_23-2151850228.jpg?size=626&ext=jpg&ga=GA1.1.1500932460.1727266924&semt=ais_hybrid" alt="Gallery 2" />
        <Image src="https://img.freepik.com/free-photo/illustration-construction-site_23-2151850228.jpg?size=626&ext=jpg&ga=GA1.1.1500932460.1727266924&semt=ais_hybrid" alt="Gallery 3" />
      </Gallery>
    </ProjectContainer>
  );
};

export default ProjectDetails;