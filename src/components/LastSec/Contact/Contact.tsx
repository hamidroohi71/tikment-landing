import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import PersonIcon from "../../PageIntro/formOptions/person.svg";
import PhoneIcon from "../../PageIntro/formOptions/phone.svg";
import TickVideo from "../../../assets/video/Tick01.webm";
import useWidth from "../../../hooks/useWidth";
import StartForm from "./startForm";

export default function Contact() {
  const [timeOption, setTimeOption] = useState(0);
  const [tick, setTick] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const styleProps1 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps2 = useSpring({
    from: { transform: "scaleX(1)" },
    to: { transform: tick ? "scaleY(0)" : "scaleY(1)" },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps3 = useSpring({
    from: { maxHeight: "100vh" },
    to: { maxHeight: tick ? "3vh" : "100vh" },
    delay: 3000,
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const styleProps6 = useSpring({
    from: { opacity: 0 },
    to: { opacity: tick ? 0 : 1 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps7 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: tick ? "scaleX(1)" : "scaleX(0)" },
    delay: 2000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const width = useWidth();

  const handleFormOpen = (open: boolean) => {
    setFormOpen(open);
  };

  return (
    <ContactSection style={styleProps3}>
      {/* <TitleBox>
        {tick && <Tick src={TickVideo} loop={false} muted autoPlay={tick} />}

        {!tick && <RingSign></RingSign>}

        <Title style={{ ...styleProps1, ...styleProps6 }}>
          همین امروز اقدام کنید.
        </Title>
        <Result style={styleProps7}>
          اطلاعات شما ثبت شده است. کارشناسان ما به‌زودی با شما تماس خواهند گرفت
        </Result>
      </TitleBox> */}

      <FormBox open={formOpen} style={styleProps2}>
        <StartForm handleFormOpen={handleFormOpen} open={true} />
      </FormBox>
    </ContactSection>
  );
}

const ContactSection = styled(animated.section)`
  padding: 20px 21vw 0;

  @media (max-width: 480px) {
    order: 1;
    padding: 37px;
    margin-bottom: 30px;
  }
`;

const TitleBox = styled(animated.div)`
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
  margin-bottom: -2vw;
  margin-right: -2vw;
  @media (min-width: 1920px) {
    margin-bottom: -1vw;
  }
`;

const Title = styled(animated.h2)`
  background: linear-gradient(252deg, #37abb8 0%, #71fbff 100%);
  line-height: 64px;
  border-radius: 3vw;
  box-shadow: 0px 7px 15px #00000033;
  font-size: 1.4vw;
  font-weight: 500;
  letter-spacing: -1px;
  color: #fff;
  padding: 0 2.5vw;
  margin: 0;
  transform-origin: right;
  @media (max-width: 480px) {
    font-size: 15px;
    padding: 0 21px;
    line-height: 45px;
    font-weight: 500;
    border-radius: 35px;
  }
`;

const Result = styled(Title)`
  position: absolute;
  top: 0;
  right: 5.5vw;
  height: 64px;
`;

const Tick = styled.video`
  width: 90px;
  height: 90px;
  position: absolute;
  right: -7px;
`;

const RingSign = styled.span`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  border: 19px solid #38acb9;
  margin-left: 13px;
  box-shadow: 0px 7px 15px #00000033;
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    border: 13.5px solid #38acb9;
  }
`;

const FormBox = styled(animated.div)<{ open: boolean }>`
  // background: linear-gradient(
  //   180deg,
  //   rgb(117 201 219 / 10%) 0%,
  //   rgb(74 243 248 / 10%) 100%
  // );
  // box-shadow: inset 0px 0px 80px #75c9db80;
  // border: 1px solid #b9e4ed;
  // border-radius: 64px 0px 64px 64px;
  // backdrop-filter: blur(13px);
  transform-origin: top;
  height: ${({ open }) => (open ? "65vh" : "38vh")};
  margin-bottom: 5.6vh;
  position: relative;
  transition: 0.5s ease-out;
`;

const TimeForm = styled(animated.div)`
  box-sizing: border-box;
  padding: 39px 31px 39px 47px;
  background: rgb(249 248 247 / 54%);
  border: 3px solid #75c9db4d;
  opacity: 1;
  backdrop-filter: blur(80px);
  border-radius: 64px 0 0 0;

  p {
    font-size: 1.2vw;
    color: #376796;
    margin: 0 0 10px;
  }

  & > div {
    display: flex;
    align-items: cemter;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    height: inherit;
    z-index: 60;

    p {
      font-size: 12px;
    }

    & > div {
      gap: 20px;
      flex-direction: column;
    }
  }
`;

const TimeOption = styled.span<{ selected: boolean; smlWidth: boolean }>`
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(241deg, #05185e 0%, #4b86ac 100%)"
      : "linear-gradient( #37ABB81A 0%, #71FBFF1A 100%)"};
  box-shadow: ${({ selected }) =>
    selected ? "7px 7px 20px #00000038" : "none"};
  border: ${({ selected }) =>
    selected ? "1px solid #ffffff99;" : "2px solid #FFFFFF"};
  border-radius: 3vw;
  font-size: 1.2vw;
  line-height: ${({ smlWidth }) => (smlWidth ? "3.5vh" : "6vh")};
  font-weight: 300;
  color: ${({ selected }) => (selected ? "#fff" : "#00DDE3")};
  padding: 0 2.5vw;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 20px;
    padding: 12px;
    border-radius: 35px;
    text-align: center;
    width: 90%;
    margin: auto;
  }
`;

const ContactForm = styled(animated.form)`
  box-sizing: border-box;
  padding: 26px 44px 79px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px) {
    padding: 20px 10px 50px;
    z-index: 60;
  }
`;

const FormInput = styled.input`
  background-color: #fff;
  height: 5vh;
  line-height: 5vh;
  border-radius: 2.5vh;
  box-shadow: inset 0px 1px 3px #00000029;
  border: 0.5px solid #cbcbcb;
  color: #9e9e9e;
  padding: 0 80px 0 0;
  background-position-x: calc(100% - 8px);
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 1.8vw;
  margin-bottom: 20px;
  font-size: 1vw;
  position: relative;
  background-image: url(${PersonIcon});
  flex-shrink: 0;
  flex-grow: 1;

  &:nth-child(1) {
  }

  &:nth-child(3) {
    background-image: url(${PhoneIcon});
    width: 70%;
  }

  &:focus {
    border: 0.5px solid #cbcbcb;
    outline: none;
  }

  &:before {
    content: none;
    display: inline-block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 18px;
    margin: auto;
    width: 1.8vw;
    height: 1.8vw;
    background-size: contain;
    background-position: center;
    background-image: url(${PersonIcon});
    z-index: 50;

    &:nth-child(3) {
      background-image: url(${PhoneIcon});
    }
  }

  @media (min-width: 1920px) {
    width: 50%;
    &:nth-child(3) {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    max-width: inherit !important;
    font-size: 24px;
    margin: auto;
    margin-bottom: 20px;
    padding-right: 57px;
    height: 53px;
    border-radius: 35px;
    background-size: 28px;
    flex-grow:0 !important;
}
  }
`;

const SubmitButton = styled.input`
  background: linear-gradient(120deg, #ff5151 0%, #ffd011 100%);
  box-shadow: 0px 7px 15px #00000033;
  height: 5vh;
  line-height: 5vh;
  border-radius: 2.5vh;
  border: none;
  outline: none;
  font-size: 1.2vw;
  padding: 0 63px;
  margin-right: 21px;
  cursor: pointer;
  color: #fff;
  transition: background 2s ease-in-out;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    background: #ff5151;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 20px;
    margin: auto;
    height: 45px;
    border-radius: 35px;
}
  }
`;
