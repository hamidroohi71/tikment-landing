import React from "react";
import MobileImage from "./assets/mobile2.webp";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";
import TripImage from "./assets/trip.webp";

export default function Trip({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: active ? 2000 : 500, easing: easings.easeOutQuart },
  });

  const mobileContentStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 3000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 3000 : 0,
    config: { duration: active ? 2000 : 500, easing: easings.easeOutQuart },
  });

  const videoStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  return (
    <>
      <ImageContent style={mobileContentStyle} src={TripImage} alt="trip" />
      <Image style={sectionStyle} src={MobileImage} alt="سفر" />
      <TextBox>
        <TickIconVideo styleProps={videoStyle} play={active} />
        <SubTitle style={sectionStyle}>با خیالی راحت</SubTitle>
        <MainTitle style={sectionStyle}>حتی در سفر</MainTitle>
        <Text style={textStyle}>
          حتی در<b>سفر و دورکاری</b> ، تیکمنت در کنار شماست. با اپلیکیشن
          <b>تیکمنت</b>، مدیران می‌توانند فقط با یک کلیک درخواست‌ها را بررسی
          کنند کارمندان نیز در <b>ایام دورکاری</b>، به‌راحتی ساعت شروع و پایان
          کارشان را ثبت می‌کنند
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
  z-index: 20;
`;

const TextBox = styled.div`
  position: absolute;
  top: 26vh;
  right: 59vw;
  display: flex;
  flex-direction: column;
  padding-left: 8vw;
`;

const MainTitle = styled(animated.h2)`
  font-size: 4.6vw;
  color: #183573;
  margin: 0;
`;

const SubTitle = styled(MainTitle)`
  font-size: 3.9vw;
  font-weight: 500;
  margin: 0;
`;

const Text = styled(animated.p)`
  font-size: 1.6vw;
  color: #292929;
  font-weight: 300;
`;
