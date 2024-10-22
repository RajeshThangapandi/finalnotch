import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line
import firstvideo from "./images/rmc.mp4"
/*
 * This is the entry point component of this project. You can change the below exported default App component to any of
 * the prebuilt landing page components by uncommenting their import and export lines respectively.
 * See one of the landing page components to better understand how to import and render different components (Always
 * make sure if you are building your own page, the root component should be the AnimationRevealPage component. You can
 * disable the animation by using the disabled prop.
 *
 * The App component below is using React router to render the landing page that you see on the live demo website
 * and the component previews.
 *
 */

/* Use AnimationRevealPage as a wrapper component for your pages if you are building a custom one yourself */
// import AnimationRevealPage from "helpers/AnimationRevealPage.js";

/*
 * Hero section is the top most section on the page. It contains the header as well.
 * So you dont need to import headers
 * separately
 */

// import Hero from "components/hero/TwoColumnWithVideo.js";
// import Hero from "components/hero/TwoColumnWithInput.js";
// import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial.js";
// import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
// import Hero from "components/hero/FullWidthWithImage.js";
// import Hero from "components/hero/BackgroundAsImage.js";
// import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Features from "components/features/VerticalWithAlternateImageAndText.js";
// import Features from "components/features/DashedBorderSixFeatures";
// import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import MainFeature from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
// import FeatureWithSteps from "components/features/TwoColWithSteps.js";
// import FeatureStats from "components/features/ThreeColCenteredStatsPrimaryBackground.js";

// import Pricing from "components/pricing/ThreePlans.js";
// import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
// import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";

// import SliderCard from "components/cards/ThreeColSlider.js";
// import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
// import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
// import TabGrid from "components/cards/TabCardGrid.js";

// import Blog from "components/blogs/ThreeColSimpleWithImage.js";
// import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
// import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
// import Blog from "components/blogs/GridWithFeaturedPost.js";

// import Testimonial from "components/testimonials/TwoColumnWithImage.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
// import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import Testimonial from "components/testimonials/SimplePrimaryBackground.js";

// import FAQ from "components/faqs/SimpleWithSideImage.js";
// import FAQ from "components/faqs/SingleCol.js";
// import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";

// import ContactUsForm from "components/forms/SimpleContactUs.js";
// import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
// import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
//
// import GetStarted from "components/cta/GetStarted.js";
// import GetStarted from "components/cta/GetStartedLight.js";
// import DownloadApp from "components/cta/DownloadApp.js";

// import Footer from "components/footers/SimpleFiveColumn.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";
// import Footer from "components/footers/FiveColumnWithBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";
// import Footer from "components/footers/MiniCenteredFooter.js";

/* Ready Made Pages (from demos folder) */
// import EventLandingPage from "demos/EventLandingPage.js";
// import HotelTravelLandingPage from "demos/HotelTravelLandingPage.js";
// import AgencyLandingPage from "demos/AgencyLandingPage.js";
// import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
// import RestaurantLandingPage from "demos/RestaurantLandingPage.js";
// import ServiceLandingPage from "demos/ServiceLandingPage.js";
// import HostingCloudLandingPage from "demos/HostingCloudLandingPage.js";

/* Inner Pages */
// import LoginPage from "pages/Login.js";
// import SignupPage from "pages/Signup.js";
// import PricingPage from "pages/Pricing.js";
// import AboutUsPage from "pages/AboutUs.js";
// import ContactUsPage from "pages/ContactUs.js";
// import BlogIndexPage from "pages/BlogIndex.js";
// import TermsOfServicePage from "pages/TermsOfService.js";
// import PrivacyPolicyPage from "pages/PrivacyPolicy.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventLandingPage from "demos/EventLandingPage";

import EquipmentCards from "components/headers/TimeLine";
import Openings from "components/headers/openings";
import ProjectDetails from "demos/ProjectDetails";


export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component
  // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;

 const tabs = {
    Ongoing:[
      {
        project_id: 1,
        
      videoSrc: firstvideo,
      images: [
        "https://example.com/project1-image1.jpg",
        "https://example.com/project1-image2.jpg",
        "https://example.com/project1-image3.jpg",
        "https://example.com/project1-image4.jpg"
      ],
      videoSrc:firstvideo,
        imageSrc:
            "https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
        title: "Formation of Bypass to Sivagangai Town branching from km 129/2 of Thanjavur - Manamadurai Road SHU (Sivagangai Urban Stretch) and merging with Thanjavur - Manamadurai Road NH226 (NHAI Road) at km 141/8 (Length 10.80km) Phase 1 - Km 0/0 - 7/6",
        location: "Namakkal - Karur Toll Road, Tamil Nadu",
        client: "Tamil Nadu Highways Department ",
        content: " Kamarajar Bridge to Varanasi - Kanyakumari road (NH-44) Near Samayanallur (MDU-213)",
        estimated_cost: "Rs. 54.60 Cr/- inc. GST"
      },
      {
        project_id: 12,
        videoSrc:firstvideo,
        imageSrc:
        "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
        title: "VUP and PUP at Thanichiyam at Km 414+650",
        location: "Trichy Karur Toll Road, Tamil Nadu",
        client: "Reliance Infrastructure Limited",
        supervision: "BOT Concessionaire NHAI",
        content: "Rs. 67.84 Cr/- inc. GST"
    }
      
    ],
    Completed: [
      {
        project_id: 5,
        videoSrc:firstvideo,
        imageSrc:
            "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
        title: "Overlay and Repairs in Madurai – Kanyakumari Section of NH-7 in the State of Tamil Nadu.",
       
        content: "CUBE Highways, NHAI, PIU – Madurai",
        client: "NHAI PIU, Madurai",
        estimated_cost: "Rs. 59.89 Cr/-"
    },
    {
      project_id: 12,
      videoSrc:firstvideo,
      imageSrc:
      "https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
      title: "Replacement of Causeway To High-Level Bridge Across River Vaigai Causeway (Kuruveekaran Salai and Opula Padithurai) With Approach Road Connecting Anna Nagar Main Road To Kamarajar Salai Under I & A Fund- 2019.",
      location: "Trichy Karur Toll Road, Tamil Nadu",
      client: "Reliance Infrastructure Limited",
      supervision: "BOT Concessionaire NHAI",
      content: "Rs. 67.84 Cr/- inc. GST"
  }
  ],
    Signature:  [
      {
          project_id: 9,
          videoSrc:firstvideo,
          imageSrc:"https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
          title: "Widening from Two Lane to Four Lane and Improvements",
          location: "Tambaram - Mudichur - Sriperumbudur Road",
          client: "Tamil Nadu Highways Department",
          division: "Construction and Maintenance Wing",
          content: "Rs. 95 Cr/- inc. GST"
      },
      {
          project_id: 10,
          videoSrc:firstvideo,
          imageSrc:
          "https://images.jdmagicbox.com/comp/kolkata/83/033p400883/catalogue/reliance-infrastructure-ltd-circus-avenue-kolkata-estate-agents-aimner8zst-250.jpg",
          title: "Construction of Widening of Two Lane to Four Lane bypasses",
          location: "Salem – Ulundurpet Section",
          client: "Reliance Infrastructure Limited",
          supervision: "BOT Concessionaire Supervision of PD NHAI, PIU – Salem",
         content: "Rs. 254.78 Cr/- inc. GST"
      },
      {
          project_id: 11,
          videoSrc:firstvideo,
          imageSrc:"https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
          title: "Renewal proposal for Nagapattinam – Gudalur – Mysore Road",
          location: "NH 67 (New No: 83)",
          client: "MORTH National Highways Madurai Circle",
          content: "Rs. 98 Cr/- inc. GST"
      },
  
  ]
  }
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
    
          <Route path="/" element={<EventLandingPage />} />
          <Route path="/equipments" element={ <EquipmentCards/>} />
          <Route path="/openings" element={ <Openings/>} />
          <Route path="/project/:projectId" element={<ProjectDetails tabs={tabs} />} />{/* Dynamic Route */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
    </>
  );
}

// export default EventLandingPage;
// export default HotelTravelLandingPage;
// export default AgencyLandingPage;
// export default SaaSProductLandingPage;
// export default RestaurantLandingPage;
// export default ServiceLandingPage;
// export default HostingCloudLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;
// export default TermsOfServicePage;
// export default PrivacyPolicyPage;

// export default MainLandingPage;