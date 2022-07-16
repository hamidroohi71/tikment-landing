import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./serviceData.json";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function SalesService() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);
  const [cardFront, setCardFront] = useState([true, true, true]);

  const width = useWidth();

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 5) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : width < 480 ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: active ? 1000 : 0, easing: easings.easeOutQuart },
  });

  const toggleSide = (index: number) => {
    const newList = cardFront;
    newList[index] = !newList[index];
    setCardFront([...newList]);
  };

  // service cards start:
  const serviceCards = data.serviceData.map((service, index) => (
    <Service key={service.name} index={index}>
      <ServiceCard
        onClick={() => {
          toggleSide(index);
        }}
        front={cardFront[index]}
      >
        <FrontSide>
          <p>خدمات</p>
          <p>{service.name}</p>
          <div>
            <svg>
              <use width="100%" height="100%" href={service.logo} />
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

  // service card back start:
  // const serviceCardsBack = data.serviceData.map((service, index) => (
  //   <Service key={service.name} index={index}>
  //     <ServiceCardBack
  //       onClick={() => {
  //         index === 0
  //           ? c1TurnOver(!c1IfBack)
  //           : index === 1
  //           ? c2TurnOver(!c2IfBack)
  //           : c3TurnOver(!c3IfBack);
  //       }}
  //     ></ServiceCardBack>
  //   </Service>
  // ));
  //service card finished

  return (
    <ServicesSection active={active} style={sectionStyle}>
      <Title>در کنارتان هستیم</Title>
      <Subtitle>
        از نصب سخت‌افزار
        <br /> تا آموزش نرم‌افزار و راه‌اندازی
      </Subtitle>
      <NumberPart>
        <NumDividerShort />
        <CardNum>۱</CardNum>
        <NumDividerlong />
        <CardNum>۲</CardNum>
        <NumDividerlong />
        <CardNum>۳</CardNum>
        <NumDividerShort />
      </NumberPart>
      <ServicesContainer>{serviceCards}</ServicesContainer>
    </ServicesSection>
  );
}

const ServicesSection = styled(animated.section)<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 13vh 0 0;
  position: absolute;
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
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
`;

const CardNum = styled.span`
  top: 15.3vw;
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: linear-gradient(180deg, #37abb8 0%, #71fbff 100%);
  color: #fff;
  font-size: 1.6vw;
  text-align: center;
  line-height: 3vw;
  flex-shrink: 0;
`;

const NumDividerShort = styled.div`
  width: 20.5vw;
  height: 2px;
  background: linear-gradient(to right, transparent 50%, #fff 50%),
    linear-gradient(to right, #cbcbcb, #fff);
  background-size: 16px 2px, 100% 2px;

  &:last-child {
    transform: scaleX(-1);
  }
`;

const NumDividerlong = styled.div`
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
    justify-content: center;
  }
`;

const ServiceCard = styled.div<{ front: boolean }>`
  position: relative;
  width: 19vw;
  margin: 0 76px;

  & > div:first-child {
    opacity: ${({ front }) => (front ? 1 : 0)};
  }

  & > div:last-child {
    opacity: ${({ front }) => (front ? 0 : 1)};
  }
`;

const FrontSide = styled.div`
  position: absolute;
  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  padding: 1vw 3vw 4.8vw;
  margin-top: 50px;
  height: 45vh;

  & > p {
    color: #183573;
    font-size: 2.1vw;
    text-align-center;
    margin: 0;
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
    background:  linear-gradient(180deg,#00e5ff14 0%,#b7fdff14 100%);
    box-shadow: inset 0px 0px 99px #80A5AC21;
    border: 1px solid #B8E2EB;
    backdrop-filter: blur(28px);
    display: flex;

    & > svg {
      width: 7vw;
      height: 7vw;
      margin: auto;

      & > use {
        width: 7vw;
        height: 7vw;
        fill: #75c9db;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 25px 57px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 64px;

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
const BackSide = styled.div`position: absolute;
  width: 20vw;
  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #183573;
  box-sizing: border-box;
  margin-top: 50px;
  height: 45vh;

  & > p {
    color: #183573;
    text-align-center;
    font-size: 2.1vw;
    margin: 0;

    &:first-of-type{
      font-size: 1.2vw;
      margin: 5px 0;
    }
  }

  & > div {
    border: 1px solid #B8E2EB;
    padding: 0.7vw 0.7vw 0.7vw;
    font-size: 1.2vw;
    font-weight: lighter; 
    border-style: solid none none;
    
    &:first-of-type { 
      border: 10;
      border-style: none  ;

    }

    & > svg {
      display: block;
      width: 4vw;
      height: 4vw;
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
