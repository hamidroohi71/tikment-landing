import React from "react";
import styled from "styled-components";
import TikmentName from "./tikment.png";

export default function Title() {
  return (
    <TitleElement>
      <Title2>سیستم‌های حضور و غیاب</Title2>
      <Title1 src={TikmentName} alt="تیکمنت" />
      <Title3>انتخاب مدیران، شایستهٔ کارمندان</Title3>
    </TitleElement>
  );
}

const TitleElement = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title1 = styled.img`
  width: 22vw;
  height: auto;
  margin-bottom: 8vh;
`;
const Title2 = styled.h2`
  font-size: 2.7vw;
  fon-weight: 100;
  color: #9e9e9e;
  margin: 0;
  margin-bottom: 8px;
`;
const Title3 = styled.h3`
  font-size: 3.6vw;
  color: #183573;
  margin: 0;
`;
