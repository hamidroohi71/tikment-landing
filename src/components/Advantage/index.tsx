import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdvantagesList from "./advantageItems";
import BackgroundImage from "./background.png";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import MaskImage from "./mask.webp";
import useWidth from "../../hooks/useWidth";
import { useWheel } from "react-use-gesture";
const { Lethargy } = require("lethargy");

let listInterval: any;

export default function Advantage() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(0);
  const width = useWidth();

  useEffect(() => {
    if (activeSection === 4) {
      // listInterval = setInterval(() => {
      //   setIndex((index) => index + 1);
      // }, 10000);
    } else {
      setIndex(0);
      // clearInterval(listInterval);
    }
  }, [activeSection]);

  // console.log("index:", index, "activeSection:", activeSection);

  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    config: { duration: active ? 0 : 0, easing: easings.easeOutQuart },
  });

  const coverStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const titleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active && index === 0 ? (width < 480 ? 0 : 1) : 0 },
    delay: active && index === 0 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const subTitleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active && index === 0 ? 1 : 0 },
    delay: active && index === 0 ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const maskStyle = useSpring({
    from: { WebkitMaskSize: "400%", WebkitMaskPosition: "88%" },
    to: {
      WebkitMaskSize: index > 0 ? "100%" : "400%",
      WebkitMaskPosition: index > 0 ? "100% bottom" : "100% bottom",
    },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const backgroundImageStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: index > 2 ? 0 : 1 },
    delay: 2000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  // const maskPositionStyle = useSpring({
  //   to: {
  //     transform:
  //       active && index > 0 ? "translate(0%, 0%)" : "translate(-100%, -100%)",
  //   },
  //   config: { duration: 500 },
  // });
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

  useEffect(() => {
    if (width < 480) {
      listInterval = setInterval(() => {
        setIndex((index) => index + 1);
      }, 10000);
    } else {
      setIndex(0);
      clearInterval(listInterval);
    }
  }, [width]);

  const nextSectionHnadler = () => {
    if (index < 7) {
      setIndex(index + 1);
    }
  };

  const prevSectionHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s < 0) {
              nextSectionHnadler();
            } else if (s > 0) {
              prevSectionHandler();
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
    <AdvantageSection
      // onWheel={(e) => e.stopPropagation()}
      {...bind()}
      active={active}
      style={sectionStyle}
    >
      <Background style={maskStyle}>
        <Cover style={coverStyle} />
        <Image
          style={backgroundImageStyle}
          src={BackgroundImage}
          alt="tikment"
        />
      </Background>
      <TitlePart>
        <MainTitle style={titleStyle}>چرا تیکمنت؟</MainTitle>
        <SubTitle style={subTitleStyle}>
          چرا تیکمنت انتخاب بسیاری از مدیران و سازمان‌ها بوده است؟‌
        </SubTitle>
        <SubTitle2 style={subTitleStyle}>
          کافیست این ۷ دلیل را تا انتها بخوانید:
        </SubTitle2>
      </TitlePart>
      <AdvantagesList show={index > 0} index={index} />
    </AdvantageSection>
  );
}

const AdvantageSection = styled(animated.section)<{ active: boolean }>`
  height: 100vh;
  padding-top: 292px;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: ${({ active }) => (active ? 20 : 0)};
  @media (max-width: 480px) {
    position: relative;
    z-index: 20;
  }
`;

const Background = styled(animated.div)`
  mask-image: url(${MaskImage});
  mask-repeat: no-repeat;
  mask-position: 100% bottom;
  mask-origin: content-box;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
`;

const Image = styled(animated.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

const Cover = styled(animated.div)`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 1;
  backdrop-filter: blur(15px);
  mix-blend-mode: normal;
  z-index: 10;
`;

const TitlePart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding: 0 12.5vw;
  position: relative;
  z-index: 20;

  @media (max-width: 480px) {
    display: none;
  }
`;

const MainTitle = styled(animated.h2)`
  font-size: 7vw;
  color: #fff;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled(animated.h3)`
  font-size: 3.5vw;
  color: #fff;
  font-weight: 400;
  margin: 0;
  line-height: 2;
`;

const SubTitle2 = styled(animated.h4)`
  font-size: 2.7vw;
  color: #fff;
  font-weight: 100;
  margin: 0;
`;
