import React from "react";
import MobileImage from "./mobile.webp";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

export default function Mobile() {
  const styleProps = useSpring({
    from: { left: "-100vw" },
    to: { left: "-0.3vw" },
  });
  return (
    <MobilePhoto style={styleProps}>
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

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
