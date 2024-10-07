import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
// import styled from "styled-components";
// import tw from "twin.macro";

import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";

import SequentialAnimatedBarChart from "components/headers/BarChart";
import logoimg from "../images/logotransparent.png"
import FounderVisionSection from "components/headers/Founder";
// Lazy load non-critical components
const AnimationRevealPage = lazy(() => import("helpers/AnimationRevealPage"));
const Hero = lazy(() => import("components/hero/BackgroundAsImageWithCenteredContent"));

const ContactUsForm = lazy(() => import("components/forms/SimpleContactUs"));
const Footer = lazy(() => import("components/footers/SimpleFiveColumn"));
const ProfileThreeColGrid = lazy(() => import("components/cards/ProfileThreeColGrid"));
const MainFeature = lazy(() => import("components/features/TwoColWithButton"));
const TabCardGrid = lazy(() => import("components/cards/TabCardGrid"));
// const Header = lazy(() => import("components/headers/light"));
const BackToTop = lazy(() => import("components/headers/BackTotop"));
const MainFeature2 = lazy(() => import("components/features/TwoColSingleFeatureWithStats2"));
const ThreeColCenteredStatsPrimaryBackground = lazy(() => import("components/features/ThreeColCenteredStatsPrimaryBackground"));

// // Styled components

// const FullPageLoader = styled.div`
//   ${tw`flex items-center justify-center fixed inset-0 bg-gray-100 z-50`}
// `;

// const TwoColumnContainer = styled.div`
//   ${tw`flex flex-col md:flex-row justify-between items-center mt-32`} 
//   max-width: 1200px;
//   margin: 80px auto;
//   gap: 40px;
// `;

// const VideoColumn = styled.div`
//   ${tw`md:w-1/2 w-full p-4`}
// `;

// const ContentColumn = styled.div`
//   ${tw`md:w-1/2 w-full text-left p-4`}
//   background: #f9fafb;
//   box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
//   border-radius: 16px;
// `;

// const StyledVideo = styled.video`
//   ${tw`rounded-lg bg-black shadow-xl`}
//   width: 100%;
//   height: auto;
// `;

// const Description = styled.p`
//   ${tw`text-lg text-gray-600 mt-4 leading-relaxed`}
// `;

// const LearnMoreButton = styled.button`
//   ${tw`mt-8 text-gray-100 px-8 py-3 rounded-lg hover:bg-[#28b3b3] transition duration-300`}
//   background-color: #32c5d2; /* Custom background color */
//   box-shadow: 0px 8px 16px rgba(37, 150, 190, 0.3);
// `;

// const StyledHeader = styled(Header)`
//   ${tw`fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur-md z-50`}
// `;



// Custom Loader component
const Loader = ({ onLoadComplete }) => {
  useEffect(() => {
    // Ensure the prop is a function
    if (typeof onLoadComplete !== 'function') {
      console.error('onLoadComplete is not a function');
      return;
    }

    const timer = setTimeout(() => {
      onLoadComplete(); // Call the function when loading is complete
    }, 2000); // Set the loading time (2 seconds in this case)

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      {/* Logo Image */}
      <img 
        src={logoimg} // Replace with your logo's path
        alt="Logo"
        style={{ 
          width: '100px', // Adjust width as needed
          marginBottom: '20px' // Space between logo and loader
        }} 
      />
      
      {/* Loading Bar */}
      <div style={{ 
        width: "100%", 
        background: "#e0e0e0", 
        borderRadius: "5px", 
        height: "8px", 
        maxWidth: "300px" 
      }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            background: "#00354f",
            animation: "loading 2s linear forwards",
          }}
        ></div>
      </div>
      <style>
        {`
          @keyframes loading {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}
      </style>
    </div>
  );
};




// Main Component
const MainComponent = () => {
  const [loading, setLoading] = useState(true);
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const EqpRef = useRef(null);
  const TeamRef = useRef(null);
  const CareerRef = useRef(null);
  const ContactRef = useRef(null);

  // const videoRef = useRef(null); // Ref for the video element

  // const scrollToSection = (elementRef) => {
  //   if (elementRef && elementRef.current) {
  //     window.scrollTo({
  //       top: elementRef.current.offsetTop,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // const handleWatchVideo = () => {
  //   if (videoRef.current) {
  //     videoRef.current.play(); // Play the video
  //     if (videoRef.current.requestFullscreen) {
  //       videoRef.current.requestFullscreen(); // Enter full-screen mode
  //     } else if (videoRef.current.webkitRequestFullscreen) { // Safari
  //       videoRef.current.webkitRequestFullscreen();
  //     } else if (videoRef.current.msRequestFullscreen) { // IE11
  //       videoRef.current.msRequestFullscreen();
  //     }
  //   }
  // };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <AnimationRevealPage>
            <div ref={homeRef}>
              <Hero refs={{ homeRef, projectRef, EqpRef, ContactRef, CareerRef, TeamRef }} /> 
            </div>

            {/* Other Sections */}
             <div>
              <MainFeature subheading={<span>Since 2014</span>} heading="About Us" />
            </div>
           
            <FounderVisionSection/>
            <SequentialAnimatedBarChart />
            {/* <TrendingCard /> */}
           
            <div ref={projectRef}>
              <TabCardGrid heading="Our Projects" />
            </div>

            <div ref={EqpRef}>
              <MainFeature2 heading="Our Equipments" />
            </div>

            <div ref={TeamRef}>
              <ProfileThreeColGrid />
            </div>

            <ThreeColCenteredStatsPrimaryBackground />

            <div ref={CareerRef}>
              <ContactUsForm />
            </div>

            <div ref={ContactRef}>
              <SimpleSubscribeNewsletter />
            </div>

            <Footer />
            <BackToTop />
          </AnimationRevealPage>
        </Suspense>
      )}
    </>
  );
};

export default MainComponent;
