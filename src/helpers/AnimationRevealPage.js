import React from "react";
import tw from "twin.macro";

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport */
import useInView from "helpers/useInView";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-0 overflow-hidden`;

function AnimationReveal({ disabled, children }) {
  if (disabled) {
    return <>{children}</>;
  }

  // Ensure children is an array
  if (!Array.isArray(children)) children = [children];

  // Directly render children without animation
  return <>{children}</>;
}

export default (props) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
