import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomerCarousel from "./customerCarousel";
import { useSpring, animated, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";
import useWidth from "../../hooks/useWidth";
import GlassPattern from "./glassPattern";
import { useWheel } from "react-use-gesture";
import data from "./customerData.json";

const { Lethargy } = require("lethargy");

let timeOut: NodeJS.Timeout;

export default function Customer() {
  const width = useWidth();
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [showComment, setShowComment] = useState(false);
  const [active, setActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const styleProps2 = useSpring({
    from: { opacity: 1 },
    to: { opacity: showComment ? (width > 480 ? 0 : 1) : 1 }, //{opacity: 1},//
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const untilTodayStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: activeSection === 2 ? 1 : width < 480 ? 1 : 0 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const totalSentenceStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: activeSection === 2 ? 1 : width < 480 ? 1 : 0 },
    delay: activeSection === 2 ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const BackgroundElmStyle = useSpring({
    from: { opacity: 0, transform: "scale(0)" },
    to: {
      opacity: activeSection === 2 ? 1 : width < 480 ? 1 : 0,
      transform: showComment
        ? "scale(0.75)"
        : activeSection === 2
        ? "scale(1)"
        : "scale(0)",
    },
    delay: showComment ? 0 : activeSection === 2 ? 2000 : 0,
    config: {
      duration: showComment ? 500 : 1000,
      easing: easings.easeOutQuart,
    },
  });

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 2) {
      setActive(true);
      timeOut = setTimeout(() => {
        setShowComment(true);
      }, 6000);
    } else if (activeSection !== null) {
      setActive(false);
      clearTimeout(timeOut);
    }
  }, [activeSection]);

  const AnimatedTotalNum = animated(TotalNumber);

  const num = useSpring({
    num: active ? 34561 : width < 480 ? 34561 : 0,
    delay: 500,
    config: {
      duration: active ? 2000 : 0,

      easing: easings.easeOutQuart,
    },
  });

  const nextStepHandler = () => {
    if (!showComment) {
      setShowComment(true);
    } else {
      if (currentIndex < data.customerData.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setNextSection(3);
        setActiveSection(null);
      }
    }
  };

  const prevStepHandler = () => {
    if (showComment) {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else {
        setShowComment(false);
      }
    } else {
      setNextSection(1);
      setActiveSection(null);
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

  return (
    <CustomerElement
      {...bind()}
      active={active}
      status={nextSection === 2 ? "show" : nextSection < 2 ? "before" : "after"}
    >
      <GlassPattern showComment={showComment} />
      <MobileCircle />
      <BackgroundElement style={BackgroundElmStyle} />
      <Statistics style={styleProps2}>
        <UntilToday>
          تا امروز
          <Date>1401/03/03</Date>
        </UntilToday>
        <MiddleText>
          سیستم حضور و غیاب تیکمنت <span>در</span>
        </MiddleText>
        <TotalCustomer>
          <animated.span style={untilTodayStyle}>در</animated.span>
          <AnimatedTotalNum style={untilTodayStyle}>
            {num.num.to((x) => x.toFixed(0))}
          </AnimatedTotalNum>
          <TotalNumSentence style={totalSentenceStyle}>
            سازمان خصوصی و دولتی فعال بوده است.
          </TotalNumSentence>
        </TotalCustomer>
      </Statistics>
      {/*} customerCarousel is our css problem*/}
      <CustomerCarousel
        showComment={showComment}
        enterComment={() => {
          setShowComment(true);
        }}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </CustomerElement>
  );
}

const CustomerElement = styled.section<{ active: boolean; status: string }>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5vh 10vw 8vh;
  position: absolute;
  z-index: ${({ active }) => (active ? 20 : 0)};
  transform: ${({ status }) =>
    status === "show"
      ? "translateY(0vh)"
      : status === "before"
      ? "translateY(100vh)"
      : "translateY(-100vh)"};
  transition: 0.5s ease-out;

  @media (max-width: 480px) {
    position: relative;
    height: unset;
    z-index: 20;
    padding: 20px 10vw 0;
  }
`;

const BackgroundElement = styled(animated.div)`
  width: 38vw;
  height: 38vw;
  position: absolute;
  top: 8vh;
  right: 10vw;
  background: linear-gradient(
    5deg,
    rgb(255 128 128 / 12%) 0%,
    rgb(255 208 17 / 12%) 100%
  );
  box-shadow: inset 0px 0px 99px #80a5ac21;
  border: 2px solid #ffd01140;
  opacity: 0.5;
  backdrop-filter: blur(19px);
  border-radius: 50%;
  z-index: 0;
  transform-origin: 75% 25%;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Statistics = styled(animated.div)`
  display: flex;
  flex-direction: column;
  z-index: 5;
`;

const UntilToday = styled(animated.p)`
  font-size: 2.4vw;
  color: #183573;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: block;
    font-size: 33px;
    margin: 0;
  }
`;

const Date = styled.span`
  display: inline-block;
  font-family: Digital-7;
  font-size: 4vw;
  padding: 0 18px;
  line-height: 128px;
  background: #f9f8f7 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 80px #75c9db80;
  border: 1px solid #b9e4ed;
  border-radius: 36px;
  opacity: 1;
  backdrop-filter: blur(2px);
  margin-right: 25px;

  @media (max-width: 480px) {
    display: block;
    font-size: 52px;
    line-height: 87px;
    margin-right: 0;
  }
`;

const MiddleText = styled(animated.p)`
  font-size: 3.2vw;
  color: #e67205;
  margin: 0;

  span {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 52px;
    letter-spacing: -2px;

    span {
      color: #183573;
      font-size: 40px;
      display: inline-block;
    }
  }
`;

const TotalCustomer = styled(UntilToday)`
  @media (max-width: 480px) {
    margin: 0;
    span {
      display: none;
    }
  }
`;

const TotalNumber = styled(Date)`
  margin: 0 25px;
  width: 19vw;
  color: #3b0002;
  @media (max-width: 480px) {
    display: block !important;
    width: 100%;
    font-size: 100px;
    padding: 5px 10px;
    margin: 0;
    text-align: center;
    line-height: 150px;
  }
`;

const TotalNumSentence = styled(animated.span)`
  @media (max-width: 480px) {
    display: block !important;
    width: 100%;
    font-size: 28px;
    padding: 5px 10px;
    margin: 0;
    letter-spacing: -2px;
  }
`;

const MobileCircle = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 80vw;
  height: 80vw;
  border-radius: 50%;
  background: linear-gradient(5deg, #ff808036 0%, #ffd01136 100%);
  box-shadow: inset 0px 0px 99px #80a5ac21;
  border: 2px solid #ffd01140;
  opacity: 0.5;
  backdrop-filter: blur(19px);
  z-index: -1;

  @media (max-screen) {
    display: block;
  }
`;
