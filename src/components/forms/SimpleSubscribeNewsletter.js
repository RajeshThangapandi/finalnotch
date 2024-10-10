import React from "react";
import tw, { css } from "twin.macro";
import { ReactComponent as EmailNewsletterIconBase } from "../../images/email-newsletter-icon.svg";
import { Container as ContainerBase } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";

const Container = tw(ContainerBase)`bg-secondary-800 -mx-8`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

// Custom CSS for padding between 650px and 750px screen width
const CustomPadding = css`
  @media (min-width: 650px) and (max-width: 750px) {
    padding: 20px; /* Add padding as per your requirement */
  }
`;

const Row = tw.div`flex flex-col md:flex-row items-center justify-center px-8`;
const TextColumn = tw.div`flex flex-col sm:flex-row items-center justify-center md:justify-start`;
const EmailNewsletterIcon = tw(EmailNewsletterIconBase)`w-16 h-16 text-green-500`;
const HeadingInfoContainer = tw.div`sm:ml-6 mt-6 sm:mt-0 text-center md:text-left`;
const Heading = tw(SectionHeading)`text-gray-100 leading-none`;

const FooterContent = tw.div`mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-md mx-auto text-gray-400 text-sm text-center md:text-left`;
const FooterColumn = tw.div`flex flex-col items-center md:items-start`;
const FooterHeading = tw.h4`text-gray-100 font-bold text-lg mb-2`;
const FooterItem = tw.p`mb-1`;

export default () => {
  return (
    <Container css={CustomPadding}>
      <Content>
        <Row>
          <TextColumn>
            <EmailNewsletterIcon />
            <HeadingInfoContainer>
              <Heading>Contact Us</Heading>
            </HeadingInfoContainer>
          </TextColumn>
        </Row>

        {/* Footer Content */}
        <FooterContent>
          <FooterColumn>
            <FooterHeading>Contact Information</FooterHeading>
            <FooterItem>Head Office</FooterItem>
            <FooterItem>Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu</FooterItem>
            <FooterItem>Email: general@notchindiaprojects.com</FooterItem>
            <FooterItem>Phone: +91 9005900536</FooterItem>
            <FooterItem>Phone: +91 9360950001</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Registered Office</FooterHeading>
            <FooterItem>Poriyalar Nagar, Tiruppalai, Madurai, Tamil Nadu</FooterItem>
            <FooterItem>Email: contracts@notchindiaprojects.com</FooterItem>
            <FooterItem>Phone: +91 9005900536</FooterItem>
            <FooterItem>Phone: +91 9360950001</FooterItem>
          </FooterColumn>
          <FooterColumn>
            <FooterHeading>Useful Links</FooterHeading>
            <FooterItem>About Us</FooterItem>
            <FooterItem>Projects</FooterItem>
            <FooterItem>Careers</FooterItem>
            <FooterItem>Contact Us</FooterItem>
          </FooterColumn>
        </FooterContent>
      </Content>
    </Container>
  );
};
