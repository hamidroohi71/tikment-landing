import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./serviceData.json";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";
import { useWheel } from "react-use-gesture";
const { Lethargy } = require("lethargy");

let myTime: any;

export default function SalesService() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [cardFront, setCardFront] = useState([true, true, true]);
  const [cardHover, setCardHover] = useState([false, false, false]);
  const [step, setStep] = useState(-1);

  const width = useWidth();

  useEffect(() => {
    clearTimeout(myTime);
    const newHoverList = [false, false, false];
    const newList = [true, true, true];
    newHoverList[step] = true;
    newList[step] = false;
    setCardHover(newHoverList);
    myTime = setTimeout(() => {
      setCardFront([...newList]);
    }, 1000);
  }, [step]);

  useEffect(() => {
    if (activeSection === 4) {
      setActive(true);
      setStep(-1);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const sectionStyle = useSpring({
    from: { transform: "translateY(100vh)" },
    to: {
      transform:
        activeSection === 4
          ? "translateY(0vh)"
          : activeSection > 4
          ? "translateY(-100vh)"
          : activeSection < 4
          ? "translateY(100vh)"
          : width < 480
          ? "translateY(0vh)"
          : "translateY(0vh)",
    },
    delay: 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const CardEnter1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 500 : 0,
    config: { duration: active ? 500 : 0, easing: easings.easeOutQuart },
  });
  const CardEnter2 = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 1200 : 0,
    config: { duration: active ? 500 : 0, easing: easings.easeOutQuart },
  });
  const CardEnter3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 1900 : 0,
    config: { duration: active ? 500 : 0, easing: easings.easeOutQuart },
  });

  const toggleSide = (index: number) => {
    const newList = cardFront;
    newList[index] = !newList[index];
    setCardFront([...newList]);
  };

  const nextStepHandler = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      setNextSection(5);
      setActiveSection(null);
    }
  };
  const prevStepHandler = () => {
    if (step > -1) {
      setStep(step - 1);
    } else {
      setNextSection(3);
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

  // service cards start:
  const serviceCards = data.serviceData.map((service, index) => (
    <Service key={service.name} index={index}>
      <ServiceCard
        onClick={() => {
          toggleSide(index);
        }}
        front={cardFront[index]}
        style={index === 0 ? CardEnter1 : index === 1 ? CardEnter2 : CardEnter3}
        onMouseEnter={() => {
          const newList = [...cardHover];
          newList[index] = true;
          setCardHover([...newList]);
        }}
        onMouseLeave={() => {
          const newList = [...cardHover];
          newList[index] = false;
          setCardHover([...newList]);
        }}
      >
        <FrontSide hover={cardHover[index]}>
          <p>خدمات</p>
          <p>{service.name}</p>
          <div>
            <svg>
              <use
                width="100%"
                height="100%"
                href={cardHover[index] ? service.hoverLogo : service.logo}
              />
            </svg>
          </div>
        </FrontSide>
        <BackSide>
          <div>
            <svg>
              <use
                width="100%"
                height="100%"
                href="/fastContactForm/freeTest/saber/tik.svg#tik"
              />
            </svg>
          </div>
          <p>{service.name}</p>
          <div>{service.det1}</div>
          <div>{service.det2}</div>
          <div>{service.det3}</div>
        </BackSide>
      </ServiceCard>
    </Service>
  ));

  return (
    <ServicesSection
      active={active}
      status={nextSection === 4 ? "show" : nextSection < 4 ? "before" : "after"}
    >
      <Title>در کنارتان هستیم</Title>
      <Subtitle>
        از نصب سخت‌افزار
        <br /> تا آموزش نرم‌افزار و راه‌اندازی
      </Subtitle>
      <NumberPart>
        <NumDividerShort style={CardEnter1} />
        <CardNum hover={cardHover[0]} style={CardEnter1}>
          ۱
        </CardNum>
        <NumDividerlong style={CardEnter2} />
        <CardNum hover={cardHover[1]} style={CardEnter2}>
          ۲
        </CardNum>
        <NumDividerlong style={CardEnter3} />
        <CardNum hover={cardHover[2]} style={CardEnter3}>
          ۳
        </CardNum>
        <NumDividerShort style={CardEnter3} />
      </NumberPart>
      <ServicesContainer>{serviceCards}</ServicesContainer>
    </ServicesSection>
  );
}

const ServicesSection = styled(animated.section)<{
  active: boolean;
  status: string;
}>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 13vh 0 0;
  position: relative;
  z-index: ${({ active }) => (active ? 20 : 0)};
  transition: 0.5s ease-in;

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
    padding-top: 0;
  }
`;

const Title = styled.h2`
  font-size: 2.9vw;
  color: #e67205;
  text-align: center;
  margin: 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 32px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const Subtitle = styled.h3`
  font-size: 1.8vw;
  color: #183573;
  text-align: center;
  margin: 0 0 17px;
  font-weight: 500;
  br {
    display: none;
  }
  @media (max-width: 480px) {
    font-size: 23px;
    font-weight: 500;
    letter-spacing: -1px;
    br {
      display: inline-block;
    }
  }
`;

const NumberPart = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`;

const CardNum = styled(animated.div)<{ hover: boolean }>`
  top: 15.3vw;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: linear-gradient(180deg, #37abb8 0%, #71fbff 100%);
  background: ${({ hover }) =>
    hover
      ? "linear-gradient(180deg,#05185E 0%,#4B86AC 100%)"
      : "linear-gradient(180deg, #37abb8 0%, #71fbff 100%)"};
  color: #fff;
  font-size: 1.6vw;
  text-align: center;
  line-height: 3vw;
  flex-shrink: 0;
  transition: 0.5s ease-out;
`;

const NumDividerShort = styled(animated.div)`
  width: 20.5vw;
  height: 2px;
  background: linear-gradient(to right, transparent 50%, #fff 50%),
    linear-gradient(to right, #cbcbcb, #fff);
  background-size: 16px 2px, 100% 2px;

  &:last-child {
    transform: scaleX(-1);
  }
`;

const NumDividerlong = styled(animated.div)`
  width: 25vw;
  height: 2px;
  background: linear-gradient(to right, transparent 50%, #cbcbcb 50%);
  background-size: 16px 2px, 100% 2px;
`;

const ServicesContainer = styled(animated.div)`
  display: flex;
  justify-content: space-between;
  padding: 0 12vw;

  @media (max-width: 480px) {
    opacity: 1;
    overflow-x: scroll;
    height: 400px;
    justify-content: flex-start;
    gap: 300px;
    height: 550px;
  }
`;

const ServiceCard = styled(animated.div)<{ front: boolean }>`
  position: relative;
  width: 19vw;
  margin: 0 76px;
  cursor: pointer;

  & > div:first-child {
    opacity: ${({ front }) => (front ? 1 : 0)};
  }

  & > div:last-child {
    opacity: ${({ front }) => (front ? 0 : 1)};
  }

  & > div {
    transition: 0.5s ease-out;
  }
`;

const FrontSide = styled.div<{ hover: boolean }>`
  position: relative;
  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  padding: 1vw 3vw 4.8vw;
  margin-top: 50px;
  // height: 45vh;
  z-index: 1;
  transition: 0.5s ease-out;

  & > p {
    color: ${({ hover }) => (hover ? "#183573" : "#75C9DB")};
    font-size: 2.1vw;
    text-align-center;
    margin: 0;
    transition: 0.5s ease-out;
    transition: 0.5s ease-out;
    &:first-of-type{
      font-size: 1.2vw;
      margin: 5px 0;
    }
  }

  & > div {
    width: 13vw;
    height: 13vw;
    border-radius: 50%;
    margin-top: 2vw;
    background: ${({ hover }) =>
      hover
        ? "linear-gradient(180deg,#05185E 0%,#4B86AC 100%)"
        : "linear-gradient(180deg,#00e5ff14 0%,#b7fdff14 100%)"};
    box-shadow: ${({ hover }) =>
      hover
        ? "15px 15px 30px rgba(0,0,0,0.2)"
        : "inset 0px 0px 99px #80A5AC21"};
    border: ${({ hover }) => (hover ? "none" : "1px solid #B8E2EB")};
    backdrop-filter: blur(28px);
    display: flex;
    transition: 0.5s ease-out;

    & > svg {
      width: 7vw;
      height: 7vw;
      margin: auto;

      & > use {
        width: 7vw;
        height: 7vw;
        fill: #75c9db;
        transition: 0.5s ease-out;
      }
    }
  }

  

  @media (max-width: 480px) {
    padding: 25px 57px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 64px;
    height:455px;
    max-width:321px;

    & > p {
      font-size: 33px;
      letter-spacing: -1px;
      &:first-of-type{
        font-size: 20px;
      }
    }

    & > div {
      width: 205px;
      height: 205px;
  
      & > svg {
        width: 128px;
        height: 128px;
        margin: auto;
  
        & > use {
          width: 128px;
          height: 128px;
          fill: #75c9db;
  
        }
      }
    }
  }
  
`;
const BackSide = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #183573;
  box-sizing: border-box;
  margin-top: 50px;
  // height: 45vh;
  top:0;
  bottom: 0;

  & > p {
    color: #183573;
    text-align-center;
    font-size: 2.1vw;
    margin: 0 0 1.6vw;

    
  }

  & > div {
    border: 1px solid #E4E4E4;
    padding: 0.7vw 0.7vw 0.7vw;
    font-size: 1.6vw;
    font-weight: lighter; 
    border-style: solid none none;
    letter-spacing: -1px;
    
    
    &:first-of-type { 
      border-style: none ;
      padding: 0;

    }

    & > svg {
      display: block;
      width: 3.5vw;
      height: 3.5vw;
      margin: auto;
      z-index: 20;

      & > use {
        display: flex;
        margin: auto;
        width: 4vw;
        height: 4vw;
        transform: scale(1.4);
      }
    }
  }
  
  @media (max-width: 480px) {
    padding: 25px 57px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 64px;
    height:455px;
    width:321px;

    & > p {
      font-size: 33px;
      letter-spacing: -1px;
      &:first-of-type {
        font-size: 20px;
      }
    }

    & > div {
      width: 205px;
      height: 205px;
      font-size: 16px;
      font-weight: 400;

      & > svg {
        width: 128px;
        height: 128px;
        margin: auto;

        & > use {
          width: 128px;
          height: 128px;
          fill: #75c9db;
        }
      }
    }
  }
`;

//const AnimatedService = styled(animated.Service)``;

const Service = styled.div<{ index: number }>`
  width: 20vw;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: @media (max-width: 480px) {
    width: 200px;
    &:first-child,
    &:last-child {
      display: none;
    }
  
`;
