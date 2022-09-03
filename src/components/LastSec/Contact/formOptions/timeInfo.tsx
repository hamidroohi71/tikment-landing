import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import PersonIcon from "./person.svg";
import PhoneIcon from "./phone.svg";
import useWidth from "../../../../hooks/useWidth";

export default function TimeInfo({
  step,
  answers,
  nextStep,
  addTime,
}: {
  step: number;
  answers: any;
  nextStep: (newStep: number) => void;
  addTime: (day: string, time: string) => void;
}) {
  const width = useWidth();
  const [dayOption, setDayOption] = useState("همین امروز");
  const [timeOption, setTimeOption] = useState("");
  const styleProps1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: step === 5 ? 1 : 0 },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const date = new Date();
  const day = date.getDay();
  const hour = date.getHours();
  console.log(date);
  let weekDays = [] as any;
  let hourList = [] as any;

  switch (day) {
    case 0:
      weekDays = ["همین امروز", "دوشنبه", "سه شنبه", "چهارشنبه", "شنبه"];
      break;
    case 1:
      weekDays = ["همین امروز", "سه شنبه", "چهارشنبه", "شنبه", "یکشنبه"];
      break;
    case 2:
      weekDays = ["همین امروز", "چهارشنبه", "شنبه", "یکشنبه", "دوشنبه"];
      break;
    case 3:
      weekDays = ["همین امروز", "شنبه", "یکشنبه", "دوشنبه", "سه شنبه"];
      break;
    case 4:
      weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه"];
      setDayOption("شنبه");
      break;
    case 5:
      weekDays = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه"];
      setDayOption("شنبه");
      break;
    case 6:
      weekDays = ["همین امروز", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه"];
      break;
  }

  if (hour < 10) {
    hourList = ["۱۰-۱۲", "۱۲-۱۴", "۱۴-۱۶"];
  } else if (hour < 12) {
    hourList = ["۱۲-۱۴", "۱۴-۱۶"];
  } else if (hour < 16) {
    hourList = ["۱۴-۱۶"];
  } else {
    hourList = ["۱۰-۱۲", "۱۲-۱۴", "۱۴-۱۶"];
    if (weekDays.includes("همین امروز")) {
      weekDays.slice(1);
    }
  }

  const daysOptions = weekDays.map((day: any) => (
    <TimeOption
      smlWidth={width < 1290}
      selected={dayOption === day}
      onClick={() => {
        setDayOption(day);
      }}
    >
      {day}
    </TimeOption>
  ));

  const timesOption = hourList.map((item: any, index: number) => (
    <TimeOption
      smlWidth={width < 1290}
      selected={timeOption === item}
      onClick={() => {
        setTimeOption(item);
      }}
    >
      {item}
    </TimeOption>
  ));

  useEffect(() => {
    if (timeOption) {
      addTime(dayOption, timeOption);
      nextStep(6);
    }
  }, [timeOption]);

  useEffect(() => {
    if (step === 5) {
      setTimeOption("");
    }
  }, [step]);

  return (
    <>
      <FormBox style={styleProps1} show={step === 5}>
        <TimeForm show={step === 5}>
          <p>
            در هفته‌ی جاری، چه روز و ساعتی برای تماس مشاورین ما با شما مناسب‌تر
            است؟
          </p>
          <div>
            <p>روز</p>
            {daysOptions}
          </div>

          <div>
            <p>ساعت</p>
            {timesOption}
          </div>
        </TimeForm>
      </FormBox>
    </>
  );
}

const FormBox = styled(animated.div)<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const TimeForm = styled(animated.div)<{ show: boolean }>`
  z-index: ${({ show }) => (show ? 10 : 0)};
  position: absolute;
  top: 27vh;
  right: -2px;
  left: -2px;
  box-sizing: border-box;
  padding: 1.3vh 31px 39px 47px;
  opacity: 1;

  & > p {
    font-size: 1.5vw;
    color: #183573;
    margin: 0 0 10px;
    font-weight: 300;
    border-top: 2px solid #fff;
    padding-top: 1.3vh;
  }

  & > div {
    display: flex;
    align-items: center;
    border-top: 2px solid #fff;
    padding: 1.3vh 0;
    p {
      font-size: 1.2vw;
      color: #183573;
      font-weight: 500;
      margin-left: 20px;
      width: 2vw;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 10px;
    height: 120px;
    z-index: 60;

    p {
      font-size: 12px;
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
  border-radius: 3.2vh;
  font-size: 1.2vw;
  line-height: ${({ smlWidth }) => (smlWidth ? "3.5vh" : "6.8vh")};
  font-weight: 300;
  color: ${({ selected }) => (selected ? "#fff" : "#00DDE3")};
  padding: 0 1.5vw;
  cursor: pointer;
  margin: 0 2.5px;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ContactForm = styled(animated.form)`
  position: absolute;
  top: 47.5vh;
  bottom: 0;
  right: 0;
  left: 0;
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

  // @media (min-width: 1920px) {
  //   width: 50%;
  //   &:nth-child(3) {
  //     width: 80%;
  //   }
  // }

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 20px;
    max-width: inherit !important;
    margin-right: 0 !important;
    font-size: 12px;
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
    direciton: ltr;
    width: 50%;
    font-size: 12px;
    margin-right: 50%;
  }
`;

// const OptionBox = styled.section`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Title = styled.h3<{ show: boolean }>`
//   color: #183573;
//   font-size: 1.5vw;
//   font-weight: 300;
//   opacity: ${({ show }) => (show ? 1 : 0)};
//   position: absolute;
// `;

// const Option = styled.div<{ show: boolean; selected: boolean; index: number }>`
//   width: 8.7vw;
//   height: 16vh;
//   background: linear-gradient(180deg, #37abb878 0%, #71fbffa6 100%);
//   border: 2px solid #ffffff99;
//   border-radius: 2vw;
//   backdrop-filter: blur(0px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   opacity: ${({ show, selected }) => (show ? 1 : selected ? 1 : 0)};
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   margin: auto;
//   transform: ${({ index, selected }) =>
//     selected ? "translateX(0vw)" : `translateX(${-index * 10}vw)`};

//   z-index: ${({ show, selected }) => (show ? 25 : selected ? 25 : 0)};
//   & > img {
//     width: 55%;
//     height: 55%;
//     object-fit: contain;
//   }

//   & > p {
//     margin: 5px 0 0;
//     font-size: 1vw;
//     font-weight: 500;
//     // color: #4af3f8;
//   }
// `;

// const SelectedOption = styled(Option)`
//   background: linear-gradient(208deg, #05185e 0%, #4b86ac 100%);
//   box-shadow: 7px 7px 20px #00000038;
//   border: 1px solid #ffffff99;
// `;
