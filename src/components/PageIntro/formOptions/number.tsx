import React from "react";
import data from "./formData.json";
import styled from "styled-components";
import { OptionBase, TitleBase, OptionBox } from "./jobType";

export default function Number({
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
  const numberElements = data.number.map((number, index) => (
    <Option
      lastStep={step === 5 || step === 6}
      index={index}
      show={step === 2}
      step={step} //saber
      selected={step > 2 && answers[1] === index}
      onClick={() => {
        nextStep(step > 2 && answers[1] === index ? 2 : 3);
        addAnswer(step > 2 && answers[1] === index ? null : index, 1);
      }}
      key={number.number}
    >
      <svg>
        <use width="100%" height="100%" href={number.logo} />
      </svg>
      <p>{number.number}</p>
    </Option>
  ));

  return (
    <>
      <Title show={step === 2}>چند نفر در سازمان شما مشغول به کارند؟</Title>
      <OptionBox>{numberElements}</OptionBox>
    </>
  );
}

const Option = styled(OptionBase)`
  & > p {
    color: ${({ selected }) => (selected ? "#2d578b" : "#fff")};
    background: ${({ selected }) => (selected ? "#fff" : "#4af3f8")};
    line-height: 43px;
    border-radius: 22px;
    padding: 0 1.6vw;
    font-size: 1.5vw;

    @media (max-width: 480px) {
      font-size: 20px;
      padding: 0 25px;
    }
  }

  &:hover {
    & > p {
      background: #fff;
      color: #2d578b;
    }
  }

  transform: ${({ index, selected, lastStep }) =>
    selected
      ? lastStep
        ? "translateX(-30vw)"
        : "translateX(-10vw)"
      : `translateX(${-index * 10 - 10}vw)`};
`;

const Title = styled(TitleBase)`
  transform: translateX(-10vw);
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
//   top: 20vh;
//   transform: ${({ index, selected }) =>
//     selected ? "translateX(-10vw)" : `translateX(${-index * 10 - 10}vw)`};
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
