import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./serviceData.json";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function SalesService() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);
  const [c1IfBack, c1TurnOver] = useState(false); //saber
  const [c2IfBack, c2TurnOver] = useState(false); //saber
  const [c3IfBack, c3TurnOver] = useState(false); //saber
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
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c1IfShowBack = useSpring({
    from: { opacity: 0 },
    to: { opacity: c1IfBack ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c2IfShowBack = useSpring({
    from: { opacity: 0 },
    to: { opacity: c2IfBack ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c3IfShowBack = useSpring({
    from: { opacity: 0 },
    to: { opacity: c3IfBack ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c1IfShowFront = useSpring({
    from: { opacity: 1 },
    to: { opacity: c1IfBack ? 0 : 1 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c2IfShowFront = useSpring({
    from: { opacity: 1 },
    to: { opacity: c2IfBack ? 0 : 1 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const c3IfShowFront = useSpring({
    from: { opacity: 1 },
    to: { opacity: c3IfBack ? 0 : 1 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  // service cards start:
  const serviceCards = data.serviceData.map((service, index) => (
    <Service 
      key={service.name} 
      index={index}
        >
      <CardNum>{index === 0 ? "۱" : index === 1 ? "۲" : "۳"}</CardNum>

      <ServiceCard onClick={() => {
        index === 0 ? c1TurnOver(!c1IfBack) :
        index === 1 ? c2TurnOver(!c2IfBack) :
           c3TurnOver(!c3IfBack)
        ;
      }}    
    >
        <p>خدمات</p>
        <p>{service.name}</p>
        <div>
          <svg>
            <use width="100%" height="100%" href={service.logo} />
          </svg>
        </div>
      </ServiceCard>

    </Service>
    ));

  // service card back start:
  const serviceCardsBack = data.serviceData.map((service, index) => (
    <Service 
      key={service.name} 
      index={index}
        >
      <CardNum>{index === 0 ? "۱" : index === 1 ? "۲" : "۳"}</CardNum>
      <ServiceCardBack onClick={() => {
        index === 0 ? c1TurnOver(!c1IfBack) :
        index === 1 ? c2TurnOver(!c2IfBack) :
           c3TurnOver(!c3IfBack)
        ;
      }}    
      > 
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
      </ServiceCardBack>
    </Service>
    ));
    //service card finished
    console.log(serviceCardsBack);

  return (
    <ServicesSection active={active} style={sectionStyle}>
      <Title>در کنارتان هستیم</Title>
      <Subtitle>
        از نصب سخت‌افزار
        <br /> تا آموزش نرم‌افزار و راه‌اندازی
      </Subtitle>
      <ServicesContainer style={c1IfShowBack} >{serviceCardsBack[0]}</ServicesContainer>
      <ServicesContainer style={c1IfShowFront}>{serviceCards[0]}</ServicesContainer>

      <ServicesContainer2 style={c2IfShowBack} >{serviceCardsBack[1]}</ServicesContainer2>
      <ServicesContainer2 style={c2IfShowFront}>{serviceCards[1]}</ServicesContainer2>   
      
      <ServicesContainer3 style={c3IfShowBack} >{serviceCardsBack[2]}</ServicesContainer3>
      <ServicesContainer3 style={c3IfShowFront}>{serviceCards[2]}</ServicesContainer3>

    </ServicesSection>
  );
}

const ServicesSection = styled(animated.section)<{ active: boolean }>`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  padding: 13vh 12vw 0;
  position: absolute;
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
  }
`;

const Title = styled.h2`
  font-size: 3.7vw;
  color: #e67205;
  text-align: center;
  margin: 0;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -1px;
  }
`;

const Subtitle = styled.h3`
  font-size: 2.3vw;
  color: #183573;
  text-align: center;
  margin: 0 0 17px;
  font-weight: 500;
  br {
    display: none;
  }
  @media (max-width: 480px) {
    font-size: 29px;
    font-weight: 500;
    letter-spacing: -1px;
    br {
      display: inline-block;
    }
  }
`;

const ServicesContainer = styled(animated.div)`
  position: absolute;
  top: 0vh;
  right: 15%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const ServicesContainer2 = styled(animated.div)`
  position: absolute;
  top: 0vh;
  right: 40%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const ServicesContainer3 = styled(animated.div)`
  position: absolute;
  top: 0vh;
  right: 65%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

//const AnimatedService = styled(animated.Service)``;

const Service = styled.div<{ index: number }>`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 480px) {
    width: 200px;
    &:first-child,
    &:last-child {
      display: none;
    }
  }
`;

const CardNum = styled.span`
  position: absolute;
  top: 15.3vw;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(180deg, #37abb8 0%, #71fbff 100%);
  color: #fff;
  font-size: 40px;
  text-align: center;
  line-height: 54px;
`;


// dadash ma inja kar daim, besmeLLAAAAAAAAAAAAAAAAAAAAAHHH
const ServiceCard = styled.div`
  position: absolute;
  top: 35.5vh;

  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  padding: 1vw 3vw 4.8vw;
  margin-top: 50px;

  & > p {
    color: #183573;
    font-size: 2.7vw;
    text-align-center;
    margin: 0;
    &:first-of-type{
      font-size: 1.6vw;
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
      font-size: 42px;
      letter-spacing: -1px;
      &:first-of-type{
        font-size: 26px;
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

  
const ServiceCardBack = styled.div`
  position: absolute;
  top: 35.5vh;
  width: 20vw;
  text-align: center;
  border-radius: 3vw;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #183573;
  box-sizing: border-box;
  margin-top: 50px;
  
  & > p {
    color: #183573;
    text-align-center;
    font-size: 2.7vw;
    margin: 0;

    &:first-of-type{
      font-size: 1.6vw;
      margin: 5px 0;
    }
  }

  & > div {
    border: 1px solid #B8E2EB;
    padding: 0.7vw 0.7vw 0.7vw;
    font-size: 1.6vw;
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
  
  @media (max-width: 480px) {
    padding: 25px 57px 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 64px;

    & > p {
      font-size: 42px;
      letter-spacing: -1px;
      &:first-of-type{
        font-size: 26px;
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