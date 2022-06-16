import React from "react";
import styled from "styled-components";
import TikmentName from "./tikment.png";
import { animated, useSpring, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";

export default function Title() {
  const { activeSection } = useSection();
  const styleProps1 = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const styleProps2 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps3 = useSpring({
    to: {
      transform: activeSection === 1 ? "translateX(0%)" : "translateX(100%)",
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  return (
    <TitleElement style={styleProps3}>
      <Title2 style={styleProps1}>سیستم‌های حضور و غیاب</Title2>
      <Title1 style={styleProps2} src={TikmentName} alt="تیکمنت" />
      <Title3 style={styleProps1}>انتخاب مدیران، شایستهٔ کارمندان</Title3>
    </TitleElement>
  );
}

const TitleElement = styled(animated.section)`
  display: flex;
  flex-direction: column;
  padding-right: 2vw;
`;

const Title1 = styled(animated.img)`
  width: 22vw;
  height: auto;
  margin-bottom: 3.4vw;
  transform-origin: right;
  @media (max-width: 1200px) {
    width: 16vw;
    margin-bottom: 3vw;
  }
`;
const Title2 = styled(animated.h2)`
  font-size: 2.7vw;
  font-weight: 300;
  color: #9e9e9e;
  margin: 0;
  margin-bottom: 8px;
  @media (max-width: 1200px) {
    font-size: 2vw;
  }
`;
const Title3 = styled(animated.h3)`
  font-size: 3.6vw;
  color: #183573;
  margin: 0 0 10px;
  @media (max-width: 1200px) {
    font-size: 3vw;
  }
`;
