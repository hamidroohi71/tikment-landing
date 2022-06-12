import React from "react";
import laughingManImage from "./assets/laughingMan.webp";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";

export default function Rules({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 3000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });
  return (
    <>
      <Image
        style={sectionStyle}
        src={laughingManImage}
        alt="تنظیم قوانین و مقررات"
      />
      <TextBox>
        <MainTitle style={sectionStyle}>
          تنظیم قوانین
          <br />
          متناسب با سازمان شما
        </MainTitle>
        <Text style={textStyle}>
          هر سازمان قوانین مختلف و منحصر به فرد خود را دارد تیکمنت به گونه‌ای
          کدنویسی شده تا به هنگام راه‌اندازی، مطابق با نیازها و قوانین سازمان
          شما تنظیم شود
        </Text>
      </TextBox>
    </>
  );
}

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
  font-size: 3.9vw;
  color: #183573;
  margin: 0;
`;

const Text = styled(animated.p)`
  font-size: 1.6vw;
  color: #292929;
  font-weight: 300;
  padding-left: 8vw;
`;
