import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function Management({ active }: { active: boolean }) {
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
        <MainTitle style={sectionStyle}>مدیریت بهینهٔ شیفت‌ها</MainTitle>
        <Text style={textStyle}>
          مدیریت شیفت همیشه یکی از چالش‌های اصلی سازمان‌هایی است که{" "}
          <b> خارج از ساعات اداری </b> فعالیت دارند. در بخش
          <b> تعیین شیفت نرم‌افزار </b> ، می‌توانید به راحتی انواع پارامترها را
          برای هر شیفت تعیین و مدیریت کنید:{" "}
          <b>
            تاخیر و تعجیل مجاز، تعریف ساعات غیرحضوری و شیفت‌های چرخشی، شیفت‌های
            نگهبانی و شیفت‌های شب و روز
          </b>
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
