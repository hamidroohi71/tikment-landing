import React from "react";
import { animated, useSpring, easings } from "react-spring";
import styled from "styled-components";
import BackgroundImg from "./backgroundImage.webp";
import Mask from "./Mask.webp";

export default function Background() {
  const maskStyle = useSpring({
    to: { WebkitMaskSize: "100%" },
    from: { WebkitMaskSize: "250%" },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  return (
    <BackgroundImage style={maskStyle}>
      <img src={BackgroundImg} alt="tikment-station" />
    </BackgroundImage>
  );
}

const BackgroundImage = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  mask-image: url(${Mask});
  mask-repeat: no-repeat;
  mask-position: 0%;
  mask-origin: content-box;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
