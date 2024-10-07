import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-[#00354f] text-black rounded-lg relative`} 
  
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold text-white`}
  }
`;

const CompanyEmail = tw.p`text-lg text-teal-300 font-medium mt-4`;
const SendEmailButton = tw.a`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-[#00354f] rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;
const SvgDotPattern1 = tw(SvgDotPatternIcon)`absolute bottom-0 right-0 transform translate-y-1/2 translate-x-1/2 -z-10 opacity-50 text-primary-500 fill-current w-24`;

export default () => {
  const companyEmail = "companyemail@example.com"; // Replace with the official company email

  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Careers</h2>
            <CompanyEmail>Contact us at: {companyEmail}</CompanyEmail>
            {/* The Send Email button */}
            <SendEmailButton
              href={`mailto:${companyEmail}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Email
            </SendEmailButton>
          </div>
          <SvgDotPattern1 />
        </FormContainer>
      </Content>
    </Container>
  );
};
