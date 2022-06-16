import React from "react";
import styled from "styled-components";

export default function FreeTest({
  nextStep,
  addAnswer,
  answers,
}: {
  nextStep: (newStep: number) => void;
  addAnswer: (answer: any) => void;
  answers: any;
}) {
  return (
    <>
      <Title>مایل به تست رایگان تیکمنت هستید؟</Title>
      <OptionBox>
        <SelectedOption
          onClick={() => {
            nextStep(2);
          }}
        >
          <img src={answers[0].logo} alt={answers[0].type} />
          <p>{answers[0].type}</p>
        </SelectedOption>
        <SelectedOption
          onClick={() => {
            nextStep(2);
          }}
        >
          <img src={answers[1].logo} alt={answers[1].number} />
          <p>{answers[1].number}</p>
        </SelectedOption>
        <SelectedOption
          onClick={() => {
            nextStep(2);
          }}
        >
          <img src={answers[2].logo} alt={answers[2].method} />
          <p>{answers[2].method}</p>
        </SelectedOption>
        <Option
          onClick={() => {
            nextStep(5);
            addAnswer([
              { freeTest: "yes", logo: "/fastContactForm/freeTest/yes.svg" },
            ]);
          }}
        >
          <img src="/fastContactForm/freeTest/yes.svg" alt="Yes Tikment" />
          <p>بله</p>
        </Option>
        <Option
          onClick={() => {
            nextStep(5);
            addAnswer([
              { freeTest: "no", logo: "/fastContactForm/freeTest/yes.svg" },
            ]);
          }}
        >
          <img src="/fastContactForm/freeTest/yes.svg" alt="No Tikment" />
          <p>خیر</p>
        </Option>
      </OptionBox>
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
  font-weight: 300;
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
