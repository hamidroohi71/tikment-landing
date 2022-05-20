import React from "react";
import MobileImage from "./mobile.webp";
import styled from "styled-components";

export default function Mobile() {
  return (
    <MobilePhoto>
      <img src={MobileImage} alt="Handy tikment app" />
    </MobilePhoto>
  );
}

const MobilePhoto = styled.section`
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
