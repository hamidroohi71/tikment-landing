import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function GEOFence({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const mobileContentStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const videoStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  return (
    <>
      <TextBox>
        <TickIconVideo styleProps={videoStyle} play={active} />
        <SubTitle style={sectionStyle}>تکنولوژی GEO-Fence</SubTitle>
        <MainTitle style={sectionStyle}>با فراموشی خداحافظی کنید</MainTitle>
        <Text style={textStyle}>
          تیکمنت بخش نرم‌افزاری جذابی هم دارد. به عنوان مثال با نصب اپلیکیشن
          تیکمنت بر روی تلفن همراه، قابلیتِ Geo-Fence به کمک شما آمده و به محض
          قرارگیری در محدوده شرکت، ثبت تردد را به شما یادآوری می‌کند. به این
          ترتیب، دیگر ثبت ورود و خروجتان را فراموش نخواهید کرد
        </Text>
      </TextBox>
      <Number style={textStyle}>۲</Number>
    </>
  );
}

const Number = styled(animated.p)`
  font-size: 15vw;
  font-weight: 500;
  color: #e4e4e4;
  position: absolute;
  left: 5vw;
  bottom: 5vw;
  line-height: 0.8;
  margin: 0;
  mix-blend-mode: multiply;
`;

const Image = styled(animated.img)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const ImageContent = styled(Image)`
  z-index: 25;
`;

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  right: 57vw;
  display: flex;
  flex-direction: column;
  padding-left: 8vw;
`;

const Tick = styled(animated.video)`
  position: absolute;
  width: 6.3vw;
  height: 6.3vw;
  object-fit: contain;
  top: 3vw;
  right: -8vw;
`;

const MainTitle = styled(animated.h2)`
  font-size: 3.1vw;
  font-weight: 500;
  color: #183573;
  margin: 0;
`;

const SubTitle = styled(MainTitle)`
  font-size: 3.1vw;
  font-weight: 500;
  margin: 0;
`;

const Text = styled(animated.p)`
  font-size: 1.6vw;
  color: #292929;
  font-weight: 300;
`;
