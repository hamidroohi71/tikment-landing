import React from "react";
import MobileImage from "./mobile.webp";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function Mobile() {
  const { activeSection } = useSection();
  const width = useWidth();
  const styleProp = useSpring({
    to: {
      transform:
        activeSection === 1
          ? "translateX(0%)"
          : width < 480
          ? "translateX(0%)"
          : "translateX(-100%)",
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
  top: 16.8vh;
  left: -3.5vw;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 480px) {
    width: 70vw;
    height: 50vh;
    top: 57vh;
  }
`;
