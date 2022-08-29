import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function Report({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const titleStyle = useSpring({
    from: { transform: "translateX(150%)" },
    to: { transform: active ? "translateX(0%)" : "translateX(150%)" },
    delay: 0,
    config: { duration: 500, easing: easings.easeOutQuart },
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
        <MainTitle style={titleStyle}>گزارش‌های هوش تجاری</MainTitle>
        <Text style={textStyle}>
          از مهم‌ترین دلایل محبوبیت تیکمنت در میان مدیران، ارائه‌ی گزارش‌هایی
          تحت عنوان <b>گزارش‌های هوش تجاری</b> بوده است.
          <br />
          این گزارش‌ها با بررسی عملکرد کارکنان و تحلیلی دقیق از بازدهی ساعات
          کاری، کمک ارزشمندی به کاهش هزینه‌ها و افزایش سودآوری سازمان‌ها کرده
          است
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

const ImageContent = styled(Image)`
  z-index: 25;
`;

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  right: 15vw;
  left: 45.7vw;
  display: flex;
  flex-direction: column;

  b {
    font-weight: 500;
  }
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
  max-width: 31vw;
`;
