import React from "react";
import { animated, useSpring, easings } from "react-spring";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import BackgroundImg from "./backgroundImage.webp";
import Mask from "./Mask.webp";
import MobileMask from "./MobileMask.webp";

export default function Background() {
  const { activeSection } = useSection();
  const width = window.innerWidth;
  const maskStyle = useSpring({
    to: {
      WebkitMaskSize: width < 480 ? "200%" : width < 1201 ? "120%" : "100%",
    },
    from: { WebkitMaskSize: "250%" },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const maskPositionStyle = useSpring({
    to: {
      transform:
        activeSection === 1
          ? "translate(0%, 0%)"
          : width < 480
          ? "translate(0%, 0%)"
          : "translate(-100%, -100%)",
    },
    config: { duration: 500 },
  });

  return (
    <BackgroundImage style={{ ...maskPositionStyle, ...maskStyle }}>
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

  @media (max-width: 480px) {
    mask-image: url(${MobileMask});
    mask-position: 100%;
    left: -10%;
    height: 870px;
    top: 389px;
  }
`;
