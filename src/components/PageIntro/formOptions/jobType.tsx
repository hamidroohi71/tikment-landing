import React from "react";
import styled from "styled-components";
import data from "./formData.json";

export default function JobType({
  nextStep,
  addAnswer,
}: {
  nextStep: (newStep: number) => void;
  addAnswer: (answer: any) => void;
}) {
  const typeElements = data.jobType.map((type) => (
    <Option
      onClick={() => {
        nextStep(2);
        addAnswer([type]);
      }}
      key={type.type}
    >
      <img src={type.logo} alt={type.type} />
      <p>{type.type}</p>
    </Option>
  ));

  return (
    <>
      <Title>لطفا نوع کسب و کارتان را مشخص کنید:</Title>
      <OptionBox>{typeElements}</OptionBox>
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
