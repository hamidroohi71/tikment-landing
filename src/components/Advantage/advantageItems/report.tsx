import React from "react";
import LaptopImage from "./assets/laptop.webp";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";

export default function Report({ active }: { active: boolean }) {
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
      <Image style={sectionStyle} src={LaptopImage} alt="گزارش‌های هوش تجاری" />
      <TextBox>
        <MainTitle style={sectionStyle}>گزارش‌های هوش تجاری</MainTitle>
        <Text style={textStyle}>
          در سال‌های اخیر از دلایل محبوبیت تیکمنت ارائۀ گزارش‌هایی توسط این نرم
          افزار با عنوان<b>گزارش‌های هوش تجاری</b> بوده است. گزارش‌هایی که با
          <b>تحلیل دقیق بازده و عملکرد کارکنان</b>، به مدیران کمک می‌کنند تا
          <b>هزینه‌های سازمان را کاهش و سودآوری آن را افزایش دهند</b>
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
