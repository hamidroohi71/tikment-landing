import React from "react";
import DeviceImage from "./assets/device.webp";
import Badge from "./assets/freeTest.webp";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";

export default function FreeTest({ active }: { active: boolean }) {
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
      <TextBox>
        <MainTitle style={sectionStyle}>۳۰ روز تست رایگان</MainTitle>
        <Text style={textStyle}>
          آرمان ما ارائۀ بهترین انتخاب به شماست بنابر این فرصتی ۳۰ روزه در
          اختیار دارید تا به طور کامل تیکمنت را تست کنید و قابلیت های آن را در
          عمل ببینید
        </Text>
      </TextBox>
      <Image style={sectionStyle} src={DeviceImage} alt="۳۰ روز تست رایگان" />
      <Image style={sectionStyle} src={Badge} alt="نشان رایگان" />
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
