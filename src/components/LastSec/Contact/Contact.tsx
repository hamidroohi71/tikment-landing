import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import PersonIcon from "../../PageIntro/formOptions/person.svg";
import PhoneIcon from "../../PageIntro/formOptions/phone.svg";

export default function Contact() {
  const [timeOption, setTimeOption] = useState(0);

  return (
    <ContactSection>
      <h2>برای مشاورهٔ رایگان در اولین فرصت با شما تماس می‌گیریم.</h2>

      <FormBox>
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
          <SubmitButton type="submit" value="ثبت" />
        </ContactForm>
      </FormBox>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  padding: 11vh 21vw 0;
`;

const FormBox = styled(animated.div)`
  background: linear-gradient(180deg, #75c9db 0%, #4af3f8 100%);
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 64px 0px 64px 64px;
  backdrop-filter: blur(13px);
  overflow: hidden;
`;

const TimeForm = styled(animated.div)`
  box-sizing: border-box;
  padding: 39px 31px 39px 47px;
  background: #f9f8f7;
  border: 3px solid #75c9db4d;
  opacity: 1;
  backdrop-filter: blur(50px);

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
`;

const ContactForm = styled(animated.form)`
  box-sizing: border-box;
  padding: 26px 44px 79px;
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
  background-image: url(${PersonIcon});

  &:nth-child(1) {
    background-position-x: 93%;
  }

  &:nth-child(3) {
    background-image: url(${PhoneIcon});
    background-position-x: 95%;
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
`;
