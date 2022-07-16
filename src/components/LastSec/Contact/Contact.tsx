import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import PersonIcon from "../../PageIntro/formOptions/person.svg";
import PhoneIcon from "../../PageIntro/formOptions/phone.svg";
import TickVideo from "../../../assets/video/Tick01.webm";

export default function Contact() {
  const [timeOption, setTimeOption] = useState(0);
  const [tick, setTick] = useState(false);

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

  return (
    <ContactSection style={styleProps3}>
      <TitleBox>
        {tick && <Tick src={TickVideo} loop={false} muted autoPlay={tick} />}

        {!tick && <RingSign></RingSign>}

        <Title style={{ ...styleProps1, ...styleProps6 }}>
          برای مشاوره رایگان در اولین فرصت با شما تماس می‌گیریم.
        </Title>
        <Result style={styleProps7}>
          اطلاعات شما ثبت شده است. کارشناسان ما به‌زودی با شما تماس خواهند گرفت
        </Result>
      </TitleBox>

      <FormBox style={styleProps2}>
        <TimeForm>
          <p>
            برای مشاوره و راه‌اندازی نسخۀ رایگان تیکمنت، چه ساعتی با شما تماس
            بگیریم؟
          </p>
          <div>
            <TimeOption
              selected={timeOption === 0}
              onClick={() => {
                setTimeOption(0);
              }}
            >
              همین امروز
            </TimeOption>
            <TimeOption
              selected={timeOption === 1}
              onClick={() => {
                setTimeOption(1);
              }}
            >
              روزهای زوج، از ساعت ۱۰ تا ۱۶
            </TimeOption>
            <TimeOption
              selected={timeOption === 2}
              onClick={() => {
                setTimeOption(2);
              }}
            >
              روزهای فرد، از ساعت ۱۰ تا ۱۶
            </TimeOption>
          </div>
        </TimeForm>
        <ContactForm
          onSubmit={(e) => {
            e.preventDefault();
            setTick(true);
          }}
        >
          <FormInput
            type="text"
            placeholder="نام و نام خانوادگی"
            style={{ flexGrow: 1 }}
          />
          <FormInput
            type="text"
            placeholder="نام شرکت"
            style={{
              maxWidth: "40%",
              marginRight: "21px",
            }}
          />
          <FormInput
            type="text"
            placeholder="شماره تماس"
            style={{ flexGrow: 1 }}
          />
          <SubmitButton type="submit" value="درخواست مشاوره" />
        </ContactForm>
      </FormBox>
    </ContactSection>
  );
}

const ContactSection = styled(animated.section)`
  padding: 11vh 21vw 0;

  @media (max-width: 480px) {
    order: 1;
    padding: 37px;
  }
`;

const TitleBox = styled(animated.div)`
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
`;

const Title = styled(animated.h2)`
  background: linear-gradient(252deg, #37abb8 0%, #71fbff 100%);
  line-height: 64px;
  border-radius: 32px;
  box-shadow: 0px 7px 15px #00000033;
  font-size: 1.8vw;
  font-weight: 500;
  letter-spacing: -1px;
  color: #fff;
  padding: 0 20px;
  margin: 0;
  transform-origin: right;
  @media (max-width: 480px) {
    font-size: 30px;
    padding: 0 21px;
    line-height: 45px;
    font-weight: 500;
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

const FormBox = styled(animated.div)`
  background: linear-gradient(
    180deg,
    rgb(117 201 219 / 10%) 0%,
    rgb(74 243 248 / 10%) 100%
  );
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 64px 0px 64px 64px;
  backdrop-filter: blur(13px);
  overflow: hidden;
  transform-origin: top;
`;

const TimeForm = styled(animated.div)`
  box-sizing: border-box;
  padding: 39px 31px 39px 47px;
  background: #f9f8f7;
  border: 3px solid #75c9db4d;
  opacity: 1;
  backdrop-filter: blur(50px);
  border-radius: 64px 0 0 0;

  p {
    font-size: 1.5vw;
    color: #376796;
    margin: 0 0 10px;
  }

  & > div {
    display: flex;
    align-items: cemter;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    & > div {
      flex-direction: column;
    }
  }
`;

const TimeOption = styled.span<{ selected: boolean }>`
  background: ${({ selected }) =>
    selected
      ? "linear-gradient(241deg, #05185e 0%, #4b86ac 100%)"
      : "linear-gradient(180deg, #37ABB878 0%, #71FBFFA6 100%)"};
  box-shadow: ${({ selected }) =>
    selected ? "7px 7px 20px #00000038" : "none"};
  border: ${({ selected }) =>
    selected ? "1px solid #ffffff99;" : "2px solid #FFFFFF"};
  border-radius: 36px;
  font-size: 1.5vw;
  line-height: 6vh;
  font-weight: 300;
  color: ${({ selected }) => (selected ? "#fff" : "#00DDE3")};
  padding: 0 24px;
  cursor: pointer;

  @media (max-width: 480px) {
    line-height: 51px;
    margin: 10px 0;
    font-size: 20px;
    letter-spacing: -1px;
  }
`;

const ContactForm = styled(animated.form)`
  box-sizing: border-box;
  padding: 26px 44px 26px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormInput = styled.input`
  background-color: #fff;
  height: 5vh;
  line-height: 5vh;
  border-radius: 2.5vh;
  box-shadow: inset 0px 1px 3px #00000029;
  border: 0.5px solid #cbcbcb;
  color: #9e9e9e;
  padding: 0 80px;
  background-position-x: 90%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 1.8vw;
  margin-bottom: 20px;
  font-size: 1.2vw;
  position: relative;
  // background-image: url(${PersonIcon});

  &:nth-child(1) {
    background-position-x: 93%;
  }

  // &:nth-child(3) {
  //   background-image: url(${PhoneIcon});
  //   background-position-x: 95%;
  // }

  &:focus {
    border: 0.5px solid #cbcbcb;
    outline: none;
  }

  &::before {
    content: "";
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

  @media (max-width: 480px) {
    width: 100% !important;
    max-width: 100% !important;
    margin: 10px 0 !important;
    font-size: 18px;
    padding: 0 40px 0 20px;
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
  font-size: 1.6vw;
  padding: 0 63px;
  margin-right: 21px;
  cursor: pointer;
  color: #fff;

  &:focus {
    border: none;
    outline: none;
  }

  @media (max-width: 480px) {
    width: 100% !important;
    max-width: 100% !important;
    margin: 10px 0 !important;
    font-size: 18px;
  }
`;
