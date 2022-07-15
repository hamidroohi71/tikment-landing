import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductSlider from "./ProductSlider";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";
import TopHandleBack from "./topHandleback.webp";
import HandleSign from "./handleIcon.png";
import { useWheel } from "react-use-gesture";
import GlassPattern from "./glassPattern";
const { Lethargy } = require("lethargy");

let timeOut: NodeJS.Timeout;
let myInterval: any;

export default function Product() {
  const [titleOn, setTitleOn] = useState(true);
  const width = useWidth();
  const { activeSection, setNextSection, nextSection, setActiveSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    console.log(productIndex, "productIndex");
    if (productIndex > 0) {
      setTitleOn(false);
    } else {
      setTitleOn(true);
    }
  }, [productIndex]);

  const nextIndexHandler = () => {
    console.log("next");
    if (productIndex < 3) {
      setProductIndex(productIndex + 1);
    } else {
      setNextSection(4);
      setActiveSection(null);
    }
  };

  const prevIndexHandler = () => {
    console.log("prev");
    if (productIndex > 0) {
      setProductIndex(productIndex - 1);
    } else {
      setNextSection(2);
      setActiveSection(null);
    }
  };

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
    to: { opacity: titleOn ? (width < 480 ? 1 : 0) : 1 },
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
        setProductIndex(1);
      }, 5000);
    } else if (activeSection !== null) {
      setActive(false);
      clearTimeout(timeOut);
    }
  }, [activeSection]);

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s < 0) {
              nextIndexHandler();
            } else if (s > 0) {
              prevIndexHandler();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  return (
    <ProductSection
      {...bind()}
      active={active}
      status={nextSection === 3 ? "show" : nextSection < 3 ? "before" : "after"}
    >
      <GlassPattern productIndex={productIndex} />
      <TopHandle
        onClick={() => {
          setNextSection(3);
          setActiveSection(null);
        }}
      >
        <HandleIcon />
      </TopHandle>
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
        <ProductSlider
          active={!titleOn}
          productIndex={productIndex}
          indexHandler={setProductIndex}
        />
      </ProductPart>
      <BottomHandle
        onClick={() => {
          setNextSection(3);
          setActiveSection(null);
        }}
      >
        <HandleIcon />
      </BottomHandle>
    </ProductSection>
  );
}

const ProductSection = styled.section<{ status: string; active: boolean }>`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #75c9db1a 0%, #4af3f81a 100%);
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
  z-index:1;

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
    transform: translateY(0);
    height: 120vh;
  }
`;

const TopHandle = styled.div`
  position: absolute;
  top: -5vw;
  bottom: 100%;
  left: 6vw;
  right: 57vw;
  background: url(${TopHandleBack}) bottom/contain no-repeat;
  cursor: pointer;
`;

const HandleIcon = styled.div`
  width: 3.5vw;
  height: 3.5vw;
  border-radius: 50%;
  background: url(${HandleSign}) center/contain no-repeat;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
`;

const BottomHandle = styled(TopHandle)`
  transform: scaleY(-1);
  bottom: -5vw;
  top: 100%;

  & > div {
    transform: scaleY(-1);
  }
`;

const TitlePart = styled(animated.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 12.5vw;
  position: absolute;
  z-index: 10;

  @media (max-width: 480px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    top: 0;
  }
`;
