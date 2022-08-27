import React from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function Trip({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1000 : 0,
    config: { duration: active ? 1000 : 250, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 1500 : 0,
    config: { duration: active ? 1000 : 250, easing: easings.easeOutQuart },
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
        <SubTitle style={sectionStyle}>با خیالی راحت</SubTitle>
        <MainTitle style={sectionStyle}>حتی در سفر</MainTitle>
        <Text style={textStyle}>
          حتی در سفر و دورکاری، تیکمنت در کنار شماست. در ایام دورکاری، مدیران
          می‌توانند با اپلیکیشن تیکمنت تمامی درخواست‌‌‌ها را تنها با یک کلیک
          بررسی کنند و کارمندان نیز می‌توانند مواردی مثل ساعت شروع و پایان کار و
          یا درخواست مرخصی را به راحتی ثبت کنند
        </Text>
      </TextBox>
    </>
  );
}

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  left: 43vw;
  right: 13vw;
  display: flex;
  flex-direction: column;
`;

const MainTitle = styled(animated.h2)`
  font-size: 3.6vw;
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
