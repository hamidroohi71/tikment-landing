import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdvantagesList from "./advantageItems";
import BackgroundImage from "./background.png";
import { useSection } from "../../context/sectionStore";

export default function Advantage() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 4) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);
  return (
    <AdvantageSection>
      <TitlePart show={true}>
        <MainTitle>چرا تیکمنت؟</MainTitle>
        <SubTitle>
          چرا تیکمنت انتخاب بسیاری از مدیران و سازمان‌ها بوده است؟‌
        </SubTitle>
        <SubTitle2>:کافیست این ۷ دلیل را تا انتها بخوانید</SubTitle2>
      </TitlePart>
      <Advantages show={false}>
        <AdvantagesList />
      </Advantages>
    </AdvantageSection>
  );
}

const AdvantageSection = styled.section`
  height: 100vh;
  background: url(${BackgroundImage}) center/cover;
  padding-top: 292px;
`;

const TitlePart = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 12.5vw;
`;

const MainTitle = styled.h2`
  font-size: 7vw;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: 3.5vw;
  color: #fff;
  font-weight: 400;
  margin: 0;
  line-height: 2;
`;

const SubTitle2 = styled.h4`
  font-size: 2.7vw;
  color: #fff;
  font-weight: 100;
  margin: 0;
`;

const Advantages = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
