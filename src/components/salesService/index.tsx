import React from "react";
import styled from "styled-components";
import data from "./serviceData.json";

export default function SalesService() {
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
    <ServicesSection>
      <Title>در کنارتان هستیم</Title>
      <Subtitle>از نصب سخت‌افزار تا آموزش نرم‌افزار و راه‌اندازی</Subtitle>
      <ServicesContainer>{serviceCards}</ServicesContainer>
    </ServicesSection>
  );
}

const ServicesSection = styled.section`
  height: 100vh;
  overflow: hidden;
  padding: 13vh 12vw 0;
`;

const Title = styled.h2`
  font-size: 72px;
  color: #e67205;
  text-align: center;
  margin: 0;
`;

const Subtitle = styled.h3`
  font-size: 46px;
  color: #183573;
  text-align: center;
  margin: 0 0 0;
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
