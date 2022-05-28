import React from "react";
import MobileImage from "./mobile.webp";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated } from "react-spring";

export default function Mobile() {
  const { activeSection } = useSection();
  const styleProp = useSpring({
    to: {
      transform: activeSection === 1 ? "translateX(0%)" : "translateX(-100%)",
    },
    config: { duration: 500 },
  });
  return (
    <MobilePhoto style={styleProp}>
      <img src={MobileImage} alt="Handy tikment app" />
    </MobilePhoto>
  );
}

const MobilePhoto = styled(animated.section)`
  z-index: 10;
  width: 38vw;
  height: 93vh;
  position: absolute;
  top: 182px;
  left: -0.3vw;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
