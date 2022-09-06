import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function Rules({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1500 : 0,
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
          تنظیم قوانین
          <br />
          متناسب با سازمان شما
        </MainTitle>
        <Text style={textStyle}>
          از آنجا که سازمان‌های مختلف قوانین منحصر به فرد خود را دارند، تیکمنت
          به گونه‌ای کدنویسی شده تا در هنگام راه‌اندازی، مطابق با نیازهای سازمان
          شما تنظیم شود
        </Text>
      </TextBox>
      <Number style={sectionStyle}>۵</Number>
    </>
  );
}

const Number = styled(animated.p)`
  font-size: 15vw;
  font-weight: 500;
  color: #e4e4e4;
  position: absolute;
  left: 4vw;
  bottom: 2vw;
  line-height: 0.8;
  margin: 0;
  mix-blend-mode: multiply;
`;

const Image = styled(animated.img)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`;

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  right: 15vw;
  left: 45.7vw;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled(animated.h2)`
  font-size: 3.1vw;
  color: #183573;
  margin: 0;
`;

const Text = styled(animated.p)`
  font-size: 1.6vw;
  color: #292929;
  font-weight: 300;
  padding-left: 8vw;
`;
