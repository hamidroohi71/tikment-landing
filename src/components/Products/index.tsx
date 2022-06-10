import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";
import { useSection } from "../../context/sectionStore";

export default function Product() {
  const [titleOn, setTitleOn] = useState(true);
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
    if (activeSection === 3) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);
  return (
    <ProductSection>
      <TitlePart show={titleOn}>
        <MainTitle>تیکمنت چیست؟</MainTitle>
        <SubTitle>سیستم حضور و غیبا تیکمنت شامل ۳ محصول اصلی است.</SubTitle>
        <SubTitle2>شما می‌توانید هر محصول را مجزا هم سفارش دهید.</SubTitle2>
      </TitlePart>
      <ProductPart show={!titleOn}>
        <ProductSlider />
      </ProductPart>
    </ProductSection>
  );
}

const ProductSection = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify: content: center;
    align-items: center;
    
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
  color: #ff4d4d;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled.h3`
  font-size: 3.5vw;
  color: #183573;
  font-weight: 400;
  margin: 0;
  line-height: 2;
`;

const SubTitle2 = styled.h4`
  font-size: 2.7vw;
  color: #04165d;
  font-weight: 100;
  margin: 0;
`;

const ProductPart = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "flex" : "none")};
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
