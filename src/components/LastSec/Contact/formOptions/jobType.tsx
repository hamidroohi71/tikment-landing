import React from "react";
import styled from "styled-components";
import data from "./formData.json";

export default function JobType({
  step,
  nextStep,
  addAnswer,
  answers,
}: {
  step: number;
  nextStep: (newStep: number) => void;
  addAnswer: (answer: any, index: number) => void;
  answers: any;
}) {
  const typeElements = data.jobType.map((type, index) => (
    <Option
      show={step === 1}
      selected={step > 1 && answers[0] === index}
      index={index}
      step={step} // saber added
      lastStep={step === 5 || step === 6}
      onClick={() => {
        nextStep(step > 1 && answers[0] === index ? 1 : 2);
        //  console.log('clicked');
        addAnswer(step > 1 && answers[0] === index ? null : index, 0);
      }}
      key={type.type}
    >
      <svg>
        <use width="100%" height="100%" href={type.logo} />
      </svg>
      <p>{type.type}</p>
    </Option>
  ));

  // console.log(answers, step);

  return (
    <>
      <Title show={step === 1}>لطفا نوع کسب و کارتان را مشخص کنید:</Title>
      <OptionBox>{typeElements}</OptionBox>
    </>
  );
}

export const OptionBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  // border:3px solid red;
  // display:none;
  margin-top:-5px;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    position: absolute;
    top: 80px;
  }
`;

export const TitleBase = styled.h3<{ show: boolean }>`
  color: #183573;
  font-size: 1.2vw;
  font-weight: 300;
  opacity: ${({ show }) => (show ? 1 : 0)};
  position: absolute;
  margin: 0;
  top: 4.5vh;
  @media (max-width: 480px) {
    font-size: 20px;
    font-weight: 300;
    margin: 10px 0 0;
    letter-spacing: -1px;
    transform: translateX(0) !important;
  }
`;

const Title = styled(TitleBase)`
  transform: translateX(0);
`;

export const OptionBase = styled.div<{
  show: boolean;
  selected: boolean;
  index: number;
  step: number; //saber
  lastStep: boolean;
}>`
  width: 8.7vw;
  height: 16vh;

  background: ${({ selected }) =>
    selected
      ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)"
      : "linear-gradient(180deg,rgb(55 171 184 / 8%) 0%,#71fbff1f 100%)"};

  background: ${(
    { step, index, selected } //default added
  ) =>
    step === 1 && index === 2 && !selected
      ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)"
      : "default"};

  border: 2px solid #ffffff99;
  border-radius: 2vw;
  backdrop-filter: blur(0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${({ show, selected }) => (show ? 1 : selected ? 1 : 0)};
  position: absolute;
  top: 9vh;
  transition: 0.25s ease-out;
  z-index: ${({ show, selected }) => (show ? 25 : selected ? 25 : 0)};

  &:hover {
    background: linear-gradient(208deg, #05185e 0%, #4b86ac 100%);

    & > svg {
      & > use {
        fill: #fff;
        stroke: #fff;
      }
    }

    & > p {
      color: #fff;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    width: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -12px;
    background: #fff;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    transition: 0.25s ease-out;
  }

  & > svg {
    display: block;
    width: 4vw;
    height: 4vw;
    margin: auto;
    z-index: 20;

    & > use {
      display: flex;
      margin: auto;
      width: 4vw;
      height: 4vw;
      fill: ${({ selected }) => (selected ? "#fff" : "#2BE2F4")};
      fill: ${({ step, index, selected }) =>
        step === 1 && index === 2 && !selected ? "#fff" : "default"}; // saber
      stroke: ${({ selected }) => (selected ? "#fff" : "#2BE2F4")};
      stroke: ${({ step, index, selected }) =>
        step === 1 && index === 2 && !selected ? "#fff" : "default"}; // saber
    }
  }

  & > p {
    margin: 0 0 10px;
    font-size: 1vw;
    font-weight: 500;
    // color: #4af3f8;
    color: ${({ selected }) => (selected ? "#fff" : "#4AF3F8")};
    color: ${({ step, index, selected }) =>
      step === 1 && index === 2 && !selected ? "#fff" : "default"}; // saber
  }

  @media (max-width: 480px) {
    width: 127px;
    border-radius: 36px;
    height: 141px;
    position: static;
    transform: translateX(0) !important;
    margin: 5px;
    opacity: ${({ show }) => (show ? 1 : 0)} !important;

    & > svg {
      width: 50px;
      height: 50px;

      & > use {
        width: 50px;
        height: 50px;
      }
    }

    & > p {
      font-size: 15px;
      white-space: nowrap;
    }
  }
`;

const Option = styled(OptionBase)`
  transform: ${({ index, selected, lastStep }) =>
    selected
      ? lastStep
        ? "translateX(-20vw)"
        : "translateX(0vw)"
      : `translateX(${-index * 10}vw)`};
`;

export const SelectedOption = styled(Option)`
  background: linear-gradient(208deg, #05185e 0%, #4b86ac 100%);
  box-shadow: 7px 7px 20px #00000038;
  border: 1px solid #ffffff99;
`;
