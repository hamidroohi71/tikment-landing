import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomerCarousel from "./customerCarousel";
import { useSpring, animated, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";
import useWidth from "../../hooks/useWidth";

let timeOut: NodeJS.Timeout;

export default function Customer() {
  const width = useWidth();
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [showComment, setShowComment] = useState(false);
  const [active, setActive] = useState(false);
  const styleProps2 = useSpring({
    from: { opacity: 1 },
    to: { opacity: showComment ? (width > 480 ? 0 : 1) : 1 },
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
      setShowComment(false);
      clearTimeout(timeOut);
    }
  }, [activeSection]);

  const AnimatedTotalNum = animated(TotalNumber);

  const num = useSpring({
    num: active ? 34561 : width < 480 ? 34561 : 0,
    config: {
      duration: active ? 2000 : 0,
      easing: easings.easeOutQuart,
    },
  });

  return (
    <CustomerElement active={active}>
      <MobileCircle />
      <Statistics style={styleProps2}>
        <UntilToday style={untilTodayStyle}>
          تا امروز
          <Date>1401/03/03</Date>
        </UntilToday>
        <MiddleText style={untilTodayStyle}>
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
      <CustomerCarousel
        showComment={showComment}
        enterComment={() => {
          setShowComment(true);
        }}
      />
    </CustomerElement>
  );
}

const CustomerElement = styled.section<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8vh 10vw;
  position: absolute;
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 480px) {
    position: relative;
    height: unset;
    z-index: 20;
    padding: 20px 10vw 0;
  }
`;

const Statistics = styled(animated.div)`
  display: flex;
  flex-direction: column;
`;

const UntilToday = styled(animated.p)`
  font-size: 3vw;
  color: #183573;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: block;
    font-size: 42px;
    margin: 0;
  }
`;

const Date = styled.span`
  display: inline-block;
  font-family: Digital-7;
  font-size: 5vw;
  padding: 0 18px;
  line-height: 128px;
  background: #f9f8f7 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 36px;
  opacity: 1;
  backdrop-filter: blur(2px);
  margin-right: 25px;

  @media (max-width: 480px) {
    display: block;
    font-size: 65px;
    line-height: 87px;
    margin-right: 0;
  }
`;

const MiddleText = styled(animated.p)`
  font-size: 4vw;
  color: #e67205;
  margin: 0;

  span {
    display: none;
  }

  @media (max-width: 480px) {
    font-size: 65px;
    letter-spacing: -2px;

    span {
      color: #183573;
      font-size: 50px;
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
    font-size: 127px;
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
    font-size: 35px;
    padding: 5px 10px;
    margin: 0;
    letter-spacing: -2px;
  }
`;

const MobileCircle = styled.div`
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
`;
