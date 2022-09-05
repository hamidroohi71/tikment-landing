import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdvantagesList from "./advantageItems";
import BackgroundImage from "./background.png";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import MaskImage from "./mask.webp";
import MaskMobile from "./mask-mobile.png";
import useWidth from "../../hooks/useWidth";
import GlassPattern from "./glassPattern";
import { useWheel } from "react-use-gesture";
const { Lethargy } = require("lethargy");

let listInterval: any;

export default function Advantage() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [index, setIndex] = useState(1);
  const width = useWidth();

  useEffect(() => {
    if (activeSection === 2) {
      // listInterval = setInterval(() => {
      //   setIndex((index) => index + 1);
      // }, 10000);
    } else {
      if (width > 480) {
        setIndex(0);
      }
      // clearInterval(listInterval);
    }
  }, [activeSection]);

  const coverStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 500 : 0,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const titleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active && index === 0 ? (width < 480 ? 0 : 1) : 0 },
    delay: active && index === 0 ? 500 : 0,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const subTitleStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active && index === 0 ? 1 : 0 },
    delay: active && index === 0 ? 1500 : 0,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const maskStyle = useSpring({
    from: { WebkitMaskSize: "400%", WebkitMaskPosition: "88%" },
    to: {
      WebkitMaskSize: index > 0 ? "100%" : "400%",
      WebkitMaskPosition: index > 0 ? "100% bottom" : "100% bottom",
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const backgroundImageStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: index > 3 ? 0 : 1 },
    delay: 1000 > 2 ? 0 : 1000,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const CircleStyle = useSpring({
    from: { opacity: 0, transform: "scale(0)", transformOrigin: "center" },
    to: {
      opacity: index > 3 ? 1 : 0,
      transform:
        index === 4 ? "scale(1)" : index > 4 ? "scale(0.8)" : "scale(0.8)",
      transformOrigin: index > 3 ? "left top" : "center",
    },
    delay: index > 4 ? 1000 : 0,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  // const maskPositionStyle = useSpring({
  //   to: {
  //     transform:
  //       active && index > 0 ? "translate(0%, 0%)" : "translate(-100%, -100%)",
  //   },
  //   config: { duration: 500 },
  // });

  useEffect(() => {
    if (activeSection === 2) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  useEffect(() => {
    if (active && index === 0) {
      setTimeout(() => {
        setIndex(1);
      }, 5000);
    }
  }, [active]);

  // useEffect(() => {
  //   if (width < 480) {
  //     listInterval = setInterval(() => {
  //       setIndex((index) => index + 1);
  //     }, 10000);
  //   } else {
  //     setIndex(0);
  //     clearInterval(listInterval);
  //   }
  // }, [width]);

  const nextSectionHnadler = () => {
    if (index < 7) {
      setIndex(index + 1);
    } else {
      setActiveSection(3);
    }
  };

  const prevSectionHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setActiveSection(1);
    }
  };

  useEffect(() => {}, [index]);

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
      // style={sectionStyle}
      status={nextSection === 2 ? "show" : nextSection < 2 ? "before" : "after"}
    >
      <Background style={maskStyle}>
        <Cover style={coverStyle} />
        <Image
          style={backgroundImageStyle}
          src={BackgroundImage}
          alt="tikment"
        />
      </Background>
      {/* <CircleBack style={CircleStyle} /> */}
      <TitlePart>
        <MainTitle style={titleStyle}>
          از کسب‌وکارهای کوچک تا سازمان‌های بزرگ <br />
          تیکمنت را انتخاب کرده‌اند
        </MainTitle>
        <SubTitle2 style={subTitleStyle}>
          کافیست این ۷ دلیل را تا انتها بخوانید:
        </SubTitle2>
      </TitlePart>
      <AdvantagesList show={index > 0} index={index} />
    </AdvantageSection>
  );
}

const AdvantageSection = styled(animated.section)<{
  active: boolean;
  status: string;
}>`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  top: 0;
  width: 100vw;
  z-index: ${({ active }) => (active ? 20 : 0)};

  transition: 0.5s ease-in;
  @media (max-width: 480px) {
    position: relative;
    z-index: 20;
    transform: none;
    margin-top: 50px;
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

  @media (max-width: 480px) {
    mask-image: url(${MaskMobile});
    width: 534px;
    height: 511px;
    top: -50px;
    right: -63%;
    transform: rotate(6deg);
}
  }
`;

const CircleBack = styled(animated.div)`
  width: 46vw;
  height: 46vw;
  border-radius: 50%;
  border: 2px solid rgba(255, 208, 17, 0.25);
  background: linear-gradient(
    to bottom,
    rgba(255, 128, 128, 0.12),
    rgba(255, 208, 17, 0.12)
  );
  position: absolute;
  top: 8vw;
  left: 5.6vw;
  z-index: 20;
`;

const Image = styled(animated.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;

  @media (max-width: 480px) {
    //  display: none;
  }
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
  font-size: 4.6vw;
  color: #fff;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

const SubTitle = styled(animated.h3)`
  font-size: 2.8vw;
  color: #fff;
  font-weight: 400;
  margin: 0;
  line-height: 2;
`;

const SubTitle2 = styled(animated.h4)`
  font-size: 3.5vw;
  color: #fff;
  font-weight: 100;
  margin: 0;
  text-align: center;
`;
