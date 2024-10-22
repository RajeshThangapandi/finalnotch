import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro"; 
import styled from "styled-components";
import "./TabGrid.css"
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts.js";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import { Link } from "react-router-dom"; // Import Link
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-7.svg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)`text-[#008C8C]`;

const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-[#008C8C]! text-gray-100!`}
  }
`;

const OuterContainer = styled.div`
  ${tw`py-12 relative`}
  @media (max-width: 800px) {
    ${tw`px-4`} // Adjust padding for medium screens
  }
  @media (max-width: 300px) {
    ${tw`px-2`} // Further adjust padding for very small screens
  }
`;
const CircleBackground = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; // Make sure it is behind the content
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-gray-200 rounded-full block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`bg-center bg-cover relative rounded-full mx-auto`}
  width: 200px; /* Increased size */
  height: 200px; /* Increased size */
`;



const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;


const CardText = tw.div`p-4 text-white`;
const CardTitle = styled.h5`
  ${tw`text-lg font-semibold group-hover:text-[#008C8C]`};
  font-size: clamp(0.8rem, 1.2vw, 1rem); /* Dynamically adjust font size */
  max-width: 100%; /* Ensure it doesn't overflow */
  text-align: center; /* Center the text */
  white-space: nowrap; /* Prevent wrapping */
  overflow: hidden;
  text-overflow: ellipsis; /* Add ellipsis if text is too long */
  padding-left: 10%; /* Left padding of 10% */
  padding-right: 10%;
`;


const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const CardImage = styled.img`
  ${tw`w-full h-full object-cover rounded-full`} /* Keeping the circular shape */
`;


const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout the Menu",
  tabs = {
    Ongoing:[
      {
        project_id: 1,
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
        imageSrc:
            "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
        title: "Overlay and Repairs in Madurai – Kanyakumari Section of NH-7 in the State of Tamil Nadu.",
       
        content: "CUBE Highways, NHAI, PIU – Madurai",
        client: "NHAI PIU, Madurai",
        estimated_cost: "Rs. 59.89 Cr/-"
    },
    {
      project_id: 12,
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
          imageSrc:"https://s3.ap-south-1.amazonaws.com/media.thesouthfirst.com/wp-content/uploads/2024/07/Tamil-Nadu-government-logo.jpg",
          title: "Widening from Two Lane to Four Lane and Improvements",
          location: "Tambaram - Mudichur - Sriperumbudur Road",
          client: "Tamil Nadu Highways Department",
          division: "Construction and Maintenance Wing",
          content: "Rs. 95 Cr/- inc. GST"
      },
      {
          project_id: 10,
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
          imageSrc:"https://i0.wp.com/complainthub.org/wp-content/uploads/2024/03/Corporation-of-Madurai-Logo.png?fit=720%2C480&ssl=1",
          title: "Renewal proposal for Nagapattinam – Gudalur – Mysore Road",
          location: "NH 67 (New No: 83)",
          client: "MORTH National Highways Madurai Circle",
          content: "Rs. 98 Cr/- inc. GST"
      },
  
  ]
  }
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = ["Completed", "Signature", "Ongoing"]; // Define the order here
const [activeTab, setActiveTab] = useState(tabsKeys[0]); 

return (<div className="contain" style={{ backgroundColor: "whitesmoke" }}>
  <Container>
    

    <ContentWithPaddingXl>
   

      <HeaderRow>
        <Header>{heading}</Header>
        <TabsControl>
          {tabsKeys.map((tabName, index) => (
            <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
              {tabName}
            </TabControl>
          ))}
        </TabsControl>
      </HeaderRow>

      {tabsKeys.map((tabKey, index) => (
        <TabContent
          key={index}
          variants={{
            current: {
              opacity: 1,
              scale: 1,
              display: "flex",
            },
            hidden: {
              opacity: 0,
              scale: 0.8,
              display: "none",
            },
          }}
          transition={{ duration: 0.4 }}
          initial={activeTab === tabKey ? "current" : "hidden"}
          animate={activeTab === tabKey ? "current" : "hidden"}
        >
          {tabs[tabKey].map((card, index) => (
            <CardContainer key={index}>
              <div className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                <div className="img1">
                  <CardImage src={card.imageSrc} />
                  <Link to={`/project/${card.project_id}`}  className="more">MORE</Link>
                </div>

                <CardText>
                  <CardTitle>{card.title}</CardTitle>
                </CardText>
              </div>
            </CardContainer>
          ))}
        </TabContent>
      ))}
    </ContentWithPaddingXl>
    <DecoratorBlob1 />
    <DecoratorBlob2 />
  </Container>
</div>


);
};


