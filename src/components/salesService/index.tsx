import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./serviceData.json";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function SalesService() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);
  const [ifBack, turnOver] = useState(false); //saber
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

  const ifShowBack = useSpring({
    from: { opacity: 0 },
    to: { opacity: ifBack ? 1 :0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const ifShowFront = useSpring({
    from: { opacity: 1 },
    to: { opacity: ifBack ? 0 : 1 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const serviceCards = data.serviceData.map((service, index) => (
    <Service 
      key={service.name} 
      index={index}
        >
      <CardNum>{index === 0 ? "۱" : index === 1 ? "۲" : "۳"}</CardNum>

      <ServiceCard onClick={() => {
        turnOver(!ifBack);
        console.log(ifBack);
      }}    
> 
        <p>خدمات</p>
        <p>{service.name}</p>
        <p>{service.det1}</p>
        <p>{service.det2}</p>
        <p>{service.det3}</p>
      </ServiceCard>


      <ServiceCard onClick={() => {
        turnOver(!ifBack);
        console.log(ifBack);
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
  return (
    <ServicesSection active={active} style={sectionStyle}>
      <Title>در کنارتان هستیم</Title>
      <Subtitle>
        از نصب سخت‌افزار
        <br /> تا آموزش نرم‌افزار و راه‌اندازی
      </Subtitle>
      <ServicesContainer style={ifShowFront}>{serviceCards}</ServicesContainer>
      <ServicesContainer style={ifShowBack}>{serviceCards}</ServicesContainer>
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
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

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
const ServiceCard = styled.div` <{ ifBack: boolean }> 
  // background: ------------{({ selected }) =>
  // selected
  //   ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)"
  //   : "linear-gradient(180deg,rgb(55 171 184 / 8%) 0%,#71fbff1f 100%)"};

//  opacity: ?!?!{({ifBack }) => (ifBack ? 1 : 0)};


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
    // background: ?!?!?!?!{({ selected }) =>
    //   selected
    //   ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)"
    //   : "linear-gradient(180deg,rgb(55 171 184 / 8%) 0%,#71fbff1f 100%)"};

    

    & > svg {
      width: 7vw;
      height: 7vw;
      margin: auto;
//      fill: ====={({ selected }) => (selected ? "#fff" :  "#2BE2F4")};
//      stroke: "black"; //{({ selected }) => (selected ? "#fff" : "#2BE2F4")};
//      z-index: 20;

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


// const ServiceCardBack = styled.div<{ ifBack: boolean }>`  //(ServiceCard)
//   opacity: ${({ifBack }) => (ifBack ? 1 : 0)};
//   z-index: 25;
//   `;
  
  
  
const ServiceCardBack = styled.div`  //same as serviceCard <{ ifBack: boolean }>
//  opacity:?!?!?!?!{({ifBack }) => (ifBack ? 1 : 0)};


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