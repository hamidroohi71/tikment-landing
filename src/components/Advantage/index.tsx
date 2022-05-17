import React from "react";
import styled from "styled-components";
import BackgroundImage from "./background.png";

export default function Advantage() {
  return (
    <AdvantageSection>
      <Title>چرا تیکمنت؟</Title>
    </AdvantageSection>
  );
}

const AdvantageSection = styled.section`
  height: 100vh;
  background: url(${BackgroundImage}) center/cover;
  padding-top: 292px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 150px;
  margin: 0;
  text-align: center;
`;
