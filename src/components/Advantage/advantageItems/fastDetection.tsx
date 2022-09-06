import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function FastDetection({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
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
        <MainTitle style={sectionStyle}>
          تشخیص چهره و اثر انگشت در کمتر از ۱ ثانیه
        </MainTitle>
        <Text style={textStyle}>
          تیکمنت با بهره‌گیری از تکنولوژی و اسکن سه‌بعدی IRFT، چهره‌ پرسنل را
          حتی از پشت ماسک نیز تشخیص ‌می‌دهد. به علاوه، استفاده از نسل جدید
          سنسورهای نوری باعث شده تا حسگر اثر انگشت هیچگونه خط و خشی برنداشته و
          حتی در استفاده‌های طولانی مدت هم دقیق و سریع عمل کند
        </Text>
      </TextBox>
      <Number style={sectionStyle}>۱</Number>
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
`;

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  right: 57vw;
  display: flex;
  flex-direction: column;
  padding-left: 8vw;

  @media (max-width: 480px) {
    height: auto;
    right: 46px;
    left: 46px;
    text-align: center;
    padding-left: 0;
    top: 30vh;
    padding-top: 50px;
  }
`;

const MainTitle = styled(animated.h2)`
  font-size: 3.6vw;
  color: #183573;
  margin: 0;
  letter-spacing: -1.5px;
  @media (max-width: 480px) {
    font-size: 42px;
  }
`;

const SubTitle = styled(MainTitle)`
  font-size: 3.1vw;
  font-weight: 500;
  margin: 0;
  @media (max-width: 480px) {
    font-size: 36px;
    text-align: end;
    font-weight: 600;
  }
`;

const Text = styled(animated.p)`
  font-size: 1.6vw;
  color: #292929;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 19px;
  }
`;
