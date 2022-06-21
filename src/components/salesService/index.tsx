import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "./serviceData.json";
import { useSection } from "../../context/sectionStore";
import { useSpring, easings, animated } from "react-spring";

export default function SalesService() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);

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
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const serviceCards = data.serviceData.map((service, index) => (
    <Service key={service.name}>
      <span>{index + 1}</span>
      <ServiceCard>
        <p>خدمات</p>
        <p>{service.name}</p>
        <img src={service.logo} alt={service.name} />
      </ServiceCard>
    </Service>
  ));
  return (
    <ServicesSection active={active} style={sectionStyle}>
      <Title>در کنارتان هستیم</Title>
      <Subtitle>از نصب سخت‌افزار تا آموزش نرم‌افزار و راه‌اندازی</Subtitle>
      <ServicesContainer>{serviceCards}</ServicesContainer>
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
`;

const Subtitle = styled.h3`
  font-size: 2.3vw;
  color: #183573;
  text-align: center;
  margin: 0 0 0;
  font-weight: 500;
`;

const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Service = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ServiceCard = styled.div`
  text-align: center;
`;
