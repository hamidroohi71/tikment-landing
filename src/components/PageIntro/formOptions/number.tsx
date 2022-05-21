import React from "react";
import data from "./formData.json";
import styled from "styled-components";

export default function Number({
  nextStep,
  addAnswer,
  answers,
}: {
  nextStep: (newStep: number) => void;
  addAnswer: (answer: any) => void;
  answers: any;
}) {
  const numberElements = data.number.map((number) => (
    <Option
      onClick={() => {
        nextStep(3);
        addAnswer([number]);
      }}
      key={number.number}
    >
      <img src={number.logo} alt={number.number} />
      <p>{number.number}</p>
    </Option>
  ));

  return (
    <>
      <Title>چند نفر در سازمان شما مشغول به کارند؟</Title>
      <OptionBox>
        <SelectedOption
          onClick={() => {
            nextStep(2);
          }}
        >
          <img src={answers[0].logo} alt={answers[0].type} />
          <p>{answers[0].type}</p>
        </SelectedOption>
        {numberElements}
      </OptionBox>
      ;
    </>
  );
}

const OptionBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: #183573;
  font-size: 1.5vw;
  font-weight: 100;
`;

const Option = styled.div`
  width: 8.7vw;
  height: 16vh;
  background: linear-gradient(180deg, #37abb878 0%, #71fbffa6 100%);
  border: 2px solid #ffffff99;
  border-radius: 2vw;
  backdrop-filter: blur(0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > img {
    width: 55%;
    height: 55%;
    object-fit: contain;
  }

  & > p {
    margin: 5px 0 0;
    font-size: 1vw;
    font-weight: 500;
    // color: #4af3f8;
  }
`;

const SelectedOption = styled(Option)`
  background: linear-gradient(208deg, #05185e 0%, #4b86ac 100%);
  box-shadow: 7px 7px 20px #00000038;
  border: 1px solid #ffffff99;
`;
