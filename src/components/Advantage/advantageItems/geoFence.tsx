import React from "react";
import MobileImage from "./assets/mobile.webp";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";

export default function GEOFence({ active }: { active: boolean }) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: 2000,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const textStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 4000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const videoStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: active ? 1 : 0 },
    delay: active ? 2000 : 0,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  return (
    <>
      <Image style={sectionStyle} src={MobileImage} alt="geo-fence" />
      <TextBox>
        <TickIconVideo styleProps={videoStyle} play={active} />
        <SubTitle style={sectionStyle}>ثبت آسان تردد</SubTitle>
        <MainTitle style={sectionStyle}>با تکنولوژی Geo-Fence</MainTitle>
        <Text style={textStyle}>
          <b>با نصب تیکمنت در تلفن همراه</b>خود، به راحتی ورود و خروج‌تان را ثبت
          کنید همچنین به محض قرارگیری در محدوۀ شرکت و یا بیرون از آن تکنولوژی{" "}
          <b>GEO-FENCE</b>به کمک شما می‌آید و ثبت تردد را یادآوری می‌کند
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
  right: 57vw;
  display: flex;
  flex-direction: column;
  padding-left: 8vw;
`;

const Tick = styled(animated.video)`
  position: absolute;
  width: 6.3vw;
  height: 6.3vw;
  object-fit: contain;
  top: 3vw;
  right: -8vw;
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
