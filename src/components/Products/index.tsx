import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";

let timeOut: NodeJS.Timeout;

export default function Product() {
  const [titleOn, setTitleOn] = useState(true);
  const width = window.innerWidth;
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);

  const titlePartStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: titleOn ? 1 : 0 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const titleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const subTitleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const ProductStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: titleOn ? 0 : 1 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 3) {
      setTitleOn(true);
      setActive(true);
      timeOut = setTimeout(() => {
        setTitleOn(false);
      }, 5000);
    } else if (activeSection !== null) {
      setActive(false);
      setTitleOn(true);
      clearTimeout(timeOut);
    }
  }, [activeSection]);

  return (
    <ProductSection
      active={active}
      status={nextSection === 3 ? "show" : nextSection < 3 ? "before" : "after"}
    >
      <TitlePart style={titlePartStyle}>
        <MainTitle style={titleStyle}>تیکمنت چیست؟</MainTitle>
        <SubTitle style={subTitleStyle}>
          سیستم حضور و غیاب تیکمنت شامل ۳ محصول اصلی است.
        </SubTitle>
        <SubTitle2 style={subTitleStyle}>
          شما می‌توانید هر محصول را مجزا هم سفارش دهید.
        </SubTitle2>
      </TitlePart>
      <ProductPart style={ProductStyle}>
        <ProductSlider />
      </ProductPart>
    </ProductSection>
  );
}

const ProductSection = styled.section<{ status: string; active: boolean }>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: linear-gradient(0deg, #75c9db99 0%, #c58646 100%);
  box-shadow: inset 0px 0px 99px #80a5ac21;
  border: 1px solid #75c9dbb0;
  backdrop-filter: blur(12px);
  top: 0;
  transform: ${({ status }) =>
    status === "show"
      ? "translateY(0vh)"
      : status === "before"
      ? "translateY(100vh)"
      : "translateY(-100vh)"};
  transition: 0.5s ease-in;
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
    transform: translateY(0);
  }
`;

const TitlePart = styled(animated.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 12.5vw;
  position: absolute;
`;

const MainTitle = styled(animated.h2)`
  font-size: 7vw;
  color: #ff4d4d;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled(animated.h3)`
  font-size: 3.5vw;
  color: #183573;
  font-weight: 400;
  margin: 0;
  line-height: 2;
  opacity: 0;
`;

const SubTitle2 = styled(animated.h4)`
  font-size: 2.7vw;
  color: #04165d;
  font-weight: 100;
  margin: 0;
  opacity: 0;
`;

const ProductPart = styled(animated.div)`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`;
