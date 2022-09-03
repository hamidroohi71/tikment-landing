import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import PersonIcon from "./person.svg";
import PhoneIcon from "./phone.svg";
import useWidth from "../../../../hooks/useWidth";

export default function ContactInfo({
  step,
  answers,
  nextStep,
  time,
}: {
  step: number;
  answers: any;
  nextStep: (newStep: number) => void;
  time: any;
}) {
  const width = useWidth();
  const [timeOption, setTimeOption] = useState(0);
  const styleProps1 = useSpring({
    from: { opacity: 0 },
    to: { opacity: step === 6 ? 1 : 0 },
    config: { duration: 500, easing: easings.easeOutQuart },
  });
  return (
    <>
      <FormBox style={styleProps1} show={step === 6}>
        <TimePart>
          <p
            onClick={() => {
              nextStep(5);
            }}
          >
            {time.day}
          </p>
          <p
            onClick={() => {
              nextStep(5);
            }}
          >
            {time.time}
          </p>
        </TimePart>
        <ContactForm
          onSubmit={(e) => {
            e.preventDefault();
            nextStep(7);
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
    </>
  );
}

const FormBox = styled(animated.div)<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
`;

const TimePart = styled.div`
  padding: 0 44px;
  display: flex;
  align-items: center;
  position: absolute;
  height: 6.8vh;
  top: 28vh;
  bottom: 0;
  right: 0;
  left: 0;
  & > p {
    background: linear-gradient(210deg, #05185e, #4b86ac);
    line-height: 6.8vh;
    margin: 0 0 0 20px;
    padding: 0 2vw;
    font-size: 1.8vw;
    color: #fff;
    border-radius: 3.4vh;
    cursor: pointer;
  }
`;

const TimeForm = styled(animated.div)`
  position: absolute;
  top: 27vh;
  height: 20vh;
  right: -2px;
  left: -2px;
  box-sizing: border-box;
  padding: 39px 31px 39px 47px;
  background: rgb(249 248 247 / 54%);
  border: 3px solid #75c9db4d;
  opacity: 1;
  backdrop-filter: blur(80px);

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
  border-radius: 3vw;
  font-size: 1.2vw;
  line-height: ${({ smlWidth }) => (smlWidth ? "3.5vh" : "6vh")};
  font-weight: 300;
  color: ${({ selected }) => (selected ? "#fff" : "#00DDE3")};
  padding: 0 2.5vw;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

const ContactForm = styled(animated.form)`
  position: absolute;
  top: 35vh;
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
