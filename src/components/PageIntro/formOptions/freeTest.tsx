import React from "react";
import styled, { StyledComponent } from "styled-components";
import { OptionBase, TitleBase, OptionBox } from "./jobType";

export default function FreeTest({
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
  return (
    <>
      <Title show={step === 4}>مایل به تست رایگان تیکمنت هستید؟</Title>
      <OptionBox>
        <YesOption
          lastStep={step === 5}
          index={0}
          step={step} //saber
          show={step === 4}
          selected={step > 3 && answers[3] === 0}
          onClick={() => {
            nextStep(step > 3 && answers[3] === 0 ? 4 : 5);
            addAnswer(step > 3 && answers[3] === 0 ? null : 0, 3);
          }}
        >
          <svg>
            {step === 5 ? (
              <use
                width="100%"
                height="100%"
                href="/fastContactForm/freeTest/tick.svg#tick"
              />
            ) : (
              <use
                width="100%"
                height="100%"
                href="/fastContactForm/freeTest/yes.svg#yes"
              />
            )}
          </svg>
          <p>
            {step === 5 ? (
              <span className="se-content">نسخۀ تست رایگان (۳۰روزه)</span>
            ) : (
              "بله"
            )}
          </p>
        </YesOption>
        <NoOption
          lastStep={step === 5}
          index={1}
          step={step} //saber
          show={step === 4}
          selected={step > 4 && answers[3] === 1}
          onClick={() => {
            nextStep(step > 3 && answers[3] === 1 ? 4 : 5);
            addAnswer(step > 3 && answers[3] === 0 ? null : 1, 3);
          }}
        >
          <svg>
            <use
              width="100%"
              height="100%"
              href="/fastContactForm/freeTest/no.svg#no"
            />
          </svg>
          <p>خیر</p>
        </NoOption>
      </OptionBox>
    </>
  );
}

const Option = styled(OptionBase)`
  // z-index:35;
  // border: 100px solid #ffffff99;
  // width: "10vw";
  // background-color: "red";
  // color: #183573;
  // font-size: 1.5vw;
  // font-weight: 300;

  transform: ${({ index, selected, lastStep }) =>
    selected
      ? lastStep
        ? "translateX(0vw)"
        : "translateX(-30vw)"
      : `translateX(${-index * 10 - 30}vw)`};

  width: ${({ selected, lastStep }) =>
    selected ? (lastStep ? "18.4vw" : "8.7vw") : "8.7vw"};

  background: ${({ selected }) =>
    selected
      ? "linear-gradient(231deg, #37ABB8 0%, #71FBFF 100%)"
      : "linear-gradient(180deg,rgb(55 171 184 / 8%) 0%,#71fbff1f 100%)"};

  box-shadow: 7px 7px 20px #00000038;
  border: 1px solid #ffffff99;

  @media (max-width: 480px) {
    width: 127px;
  }
`;

const YesOption = styled(Option)`
  & > p {
    color: ${({ selected }) => (selected ? "#2be2f4" : "#fff")};
    background: ${({ selected }) => (selected ? "#fff" : "#fdcd10")};
    line-height: 43px;
    border-radius: 22px;
    padding: 0 30px;
    font-size: 1.5vw;

    @media (max-width: 480px) {
      font-size: 20px;
      padding: 0 25px;
    }
  }

  .se-content {
    font-size: 1vw;
  }

  & > svg {
    display: block;
    width: 4vw;
    height: 4vw;
    margin: auto;
    z-index: 20;

    @media (max-width: 480px) {
      width: 50px;
      height: 50px;
    }

    & > use {
      display: flex;
      margin: auto;
      width: 4vw;
      fill: #fdcd10;
      storke: #fdcd10;
    }
  }

  &:hover {
    background: ${({ selected }) =>
      selected
        ? "linear-gradient(231deg, #37ABB8 0%, #71FBFF 100%)"
        : "linear-gradient(208deg, #05185e 0%, #4b86ac 100%)"};

    & > p {
      color: ${({ selected }) => (selected ? "#2be2f4" : "#376796")};
      background: #fff;
    }
  }
`;

const NoOption = styled(Option)`
  & > p {
    color: ${({ selected }) => (selected ? "#2be2f4" : "#fff")};
    background: ${({ selected }) => (selected ? "#fff" : "#2be2f4")};
    line-height: 43px;
    border-radius: 22px;
    padding: 0 24px;
    font-size: 1.5vw;

    @media (max-width: 480px) {
      font-size: 20px;
      padding: 0 25px;
    }
  }

  &:hover {
    background: ${({ selected }) =>
      selected
        ? "linear-gradient(231deg, #37ABB8 0%, #71FBFF 100%)"
        : "linear-gradient(208deg, #05185e 0%, #4b86ac 100%)"};
    & > p {
      color: ${({ selected }) => (selected ? "#2be2f4" : "#376796")};
      background: #fff;
    }
  }
`;

const Title = styled(TitleBase)`
  transform: translateX(-30vw);
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
//     selected ? "translateX(-30vw)" : `translateX(${-index * 10 - 30}vw)`};
//   transition: 0.5s ease-out;
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
