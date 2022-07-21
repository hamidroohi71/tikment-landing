import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function Transparency({ active }: { active: boolean }) {
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
        <SubTitle style={sectionStyle}>حقوق و مزایا،</SubTitle>
        <MainTitle style={sectionStyle}>شفاف‌تر از همیشه</MainTitle>
        <Text style={textStyle}>
          پژوهش‌ها نشان می‌دهد: هرچه حقوق و مزایا شفاف تر باشد، بازده کارمندان
          بیشتر است. تیکمنت <b>گزارش‌های دقیقی</b> را در اختیار مدیران و
          کارمندان قرار می‌دهد. از
          <b> محاسبۀ حقوق و مزایا، مرخصی‌ها و اضافه‌کاری‌ها </b>
          گرفته تا <b>تأخیر و تعجیل، غیبت‌ها و پاداش‌ها، حق بیمه </b> و ده‌ها
          مورد دیگر{" "}
        </Text>
      </TextBox>
    </>
  );
}

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
    padding-top:50px;
  }
`;

const MainTitle = styled(animated.h2)`
  font-size: 3.6vw;
  color: #183573;
  margin: 0;
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
    text-align:end;
    font-weight: 600;
  }
`;

const Text = styled(animated.p)`
  font-size: 1.2vw;
  color: #292929;
  font-weight: 300;
  @media (max-width: 480px) {
    font-size: 19px;
  }
`;
