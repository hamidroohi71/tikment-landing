import React from "react";
import data from "./formData.json";
import styled from "styled-components";
import { OptionBase, Title, OptionBox } from "./jobType";

export default function Method({
  step,
  nextStep,
  addAnswer,
  answers,
}: {
  step: number;
  nextStep: (newStep: number) => void;
  addAnswer: (answer: any) => void;
  answers: any;
}) {
  const methodElements = data.method.map((method, index) => (
    <Option
      index={index}
      show={step === 3}
      selected={step > 3 && answers[2] === index}
      onClick={() => {
        nextStep(4);
        addAnswer(index);
      }}
      key={method.method}
    >
      <img src={method.logo} alt={method.method} />
      <p>{method.method}</p>
    </Option>
  ));

  return (
    <>
      <Title show={step === 3}>با چه روشی تمایل به ثبت‌تردد دارید؟</Title>
      <OptionBox>{methodElements}</OptionBox>
    </>
  );
}

const Option = styled(OptionBase)`
  transform: ${({ index, selected }) =>
    selected ? "translateX(-20vw)" : `translateX(${-index * 10 - 20}vw)`};
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
//     selected ? "translateX(-20vw)" : `translateX(${-index * 10 - 20}vw)`};
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
