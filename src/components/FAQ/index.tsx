import React, { useState, useEffect } from "react";
import data from "./data.json";
import styled from "styled-components";
import FAQBlock from "./FAQBlock";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";
import { useWheel } from "react-use-gesture";
import TitleTick from "../../assets/icons/orangeTick.svg";
import GlassPattern from "./glassPattern";
const { Lethargy } = require("lethargy");

export default function FAQ() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const width = useWidth();

  useEffect(() => {
    if (activeSection === 5) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const sectionStyle = useSpring({
    from: { transform: "translateY(100vh)" },
    to: {
      transform:
        activeSection === 5
          ? "translateY(0vh)"
          : activeSection > 5
          ? "translateY(-100vh)"
          : activeSection < 5
          ? "translateY(100vh)"
          : width < 480
          ? "translateY(0vh)"
          : "translateY(0vh)",
    },
    delay: 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const nextStepHandler = () => {
    setNextSection(6);
    setActiveSection(null);
  };
  const prevStepHandler = () => {
    setNextSection(4);
    setActiveSection(null);
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
              nextStepHandler();
            } else if (s > 0) {
              prevStepHandler();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  const faqElements = data.faq.map((item, index) => (
    <FAQBlock
      key={item.question}
      item={item}
      open={current === index}
      even={index % 2 === 0}
      toggleOpen={() => {
        setCurrent(index);
      }}
    />
  ));
  return (
    <FAQSection style={sectionStyle}>
      <GlassPattern />
      <Title>پرسش‌های شما</Title>
      {faqElements}
    </FAQSection>
  );
}

const FAQSection = styled(animated.section)`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7vh 12vw;
  position: relative;
  height: 100vh;
  @media (max-width: 480px) {
    order: 0;
    padding: 10vh 28px;
  }
`;

const Title = styled.h2`
  font-size: 2.9vw;
  color: #e67205;
  font-weight: 500;
  text-align: center;
  margin: 0;
  background: url(${TitleTick}) right/40px no-repeat;
  padding-right: 50px;
  margin: 0 auto;
`;
