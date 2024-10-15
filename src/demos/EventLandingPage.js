import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing icons for dark and light mode
import SimpleSubscribeNewsletter from "components/forms/SimpleSubscribeNewsletter";
import SequentialAnimatedBarChart from "components/headers/BarChart";
import FounderVisionSection from "components/headers/Founder";
import Loader from "./Loader"; // Import your Loader component

// Lazy load non-critical components
const AnimationRevealPage = lazy(() => import("helpers/AnimationRevealPage"));
const Hero = lazy(() => import("components/hero/BackgroundAsImageWithCenteredContent"));
const ContactUsForm = lazy(() => import("components/forms/SimpleContactUs"));
const ProfileThreeColGrid = lazy(() => import("components/cards/ProfileThreeColGrid"));
const MainFeature = lazy(() => import("components/features/TwoColWithButton"));
const TabCardGrid = lazy(() => import("components/cards/TabCardGrid"));
const BackToTop = lazy(() => import("components/headers/BackTotop"));
const MainFeature2 = lazy(() => import("components/features/TwoColSingleFeatureWithStats2"));
const ThreeColCenteredStatsPrimaryBackground = lazy(() => import("components/features/ThreeColCenteredStatsPrimaryBackground"));

const MainComponent = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // State to manage theme
  const homeRef = useRef(null);
  const projectRef = useRef(null);
  const EqpRef = useRef(null);
  const TeamRef = useRef(null);
  const CareerRef = useRef(null);
  const ContactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.className = theme; // Apply the theme to the body
    localStorage.setItem('theme', theme); // Save theme preference in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      {loading ? (
        <Loader onLoadComplete={() => setLoading(false)} /> // Pass the function to Loader
      ) : (
        <Suspense fallback={<Loader onLoadComplete={() => setLoading(false)} />}>
          <AnimationRevealPage>
            {/* Theme Toggle Button */}
            <div style={{ position: 'fixed', top: '10px', right: '20px', zIndex: '50' }}>
              <button onClick={toggleTheme} aria-label="Toggle Theme" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {theme === 'light' ? (
                  <FaMoon size={30} color="black" /> // Moon icon for dark mode
                ) : (
                  <FaSun size={30} color="yellow" /> // Sun icon for light mode
                )}
              </button>
            </div>

            <div ref={homeRef}>
              <Hero refs={{ homeRef, projectRef, EqpRef, ContactRef, CareerRef, TeamRef }} theme={theme} /> 
            </div>

            {/* Other Sections */}
            <div>
              <MainFeature subheading={<span>Since 2014</span>} heading="About Us" />
            </div>

            <FounderVisionSection />
            {/* <SequentialAnimatedBarChart /> */}
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

            <BackToTop />
          </AnimationRevealPage>
        </Suspense>
      )}
    </>
  );
};

export default MainComponent;



