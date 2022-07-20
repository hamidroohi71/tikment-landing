import React, { useState } from "react";
import { useSpring, easings, animated } from "react-spring";
import styled from "styled-components";
import TickIconVideo from "./TickIconVideo";
import FreeTestModule from "./freeTestModule";
import StartForm from "../../PageIntro/startForm";
import { isAbsolute } from "node:path/win32";

export default function FreeTest({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
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

  console.log(open);

  return (
    <>
      <TextBox>
        <TickIconVideo styleProps={videoStyle} play={active} />
        <MainTitle style={sectionStyle}>۳۰ روز تست رایگان</MainTitle>
        <Text style={textStyle}>
          آرمان ما ارائۀ بهترین انتخاب به شماست بنابر این فرصتی ۳۰ روزه در
          اختیار دارید تا به طور کامل تیکمنت را تست کنید و قابلیت های آن را در
          عمل ببینید
        </Text>
      </TextBox>
      <FreeTestModule
        handleClick={() => {
          setOpen(true);
        }}
        style={sectionStyle}
      />
      <StarFormBox
        onClick={() => {
          setOpen(false);
        }}
        show={open}
      >
        <StartForm open={open} handleFormOpen={setOpen} />
      </StarFormBox>
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
  font-size: 3.1vw;
  color: #183573;
  margin: 0;
`;

const Text = styled(animated.p)`
  font-size: 1.2vw;
  color: #292929;
  font-weight: 300;
  padding-left: 8vw;
`;

const StarFormBox = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 70;
  background: linear-gradient(rgb(255 255 255) 0%, rgb(164 252 255 / 64%) 100%);
  box-shadow: rgb(215 248 255 / 90%) 0px 0px 80px inset,
    rgb(129 37 37 / 90%) 0px 3px 3px;
  border: 1px solid rgb(84 225 255);
  opacity: 1;
  backdrop-filter: blur(29px);
  z-index: 70;
`;
