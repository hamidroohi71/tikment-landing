import React from "react";
import MobileImage from "./mobile.webp";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";
import data from "./formOptions/productData.json";
import faceRotated from "./face-rotated.png"

export default function Mobile({ selectedProuct }: any) {
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
      <img
        src={data.productData[selectedProuct].image}
        alt="Handy tikment app"
      />
    
    </MobilePhoto>
  );
}

const MobilePhoto = styled(animated.section)`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  // border:5px solid green;

  & > img {
    // border:6px solid blue;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left;
    padding:0;
    margin-top: 0;
    // margin-right:30px
    // z-index:100;
  }

  @media (max-width: 480px) {
    width: 310px;
    height: 427px;
    top: 560px;
  }
`;
