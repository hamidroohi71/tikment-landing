import React, { useState } from "react";
import ContactInfo from "./formOptions/contactInfo";
import FreeTest from "./formOptions/freeTest";
import JobType from "./formOptions/jobType";
import Method from "./formOptions/method";
import Number from "./formOptions/number";
import styled from "styled-components";

export default function StartForm() {
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(
    "کارشناسان ما امروز با شما تماس خواهند گرفت"
  );
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([]);
  return (
    <StartFormElement>
      <h2>{done ? result : "برای انتخاب بهتر"}</h2>
      <div>
        {step === 1 ? (
          <JobType />
        ) : step === 2 ? (
          <Number />
        ) : step === 3 ? (
          <Method />
        ) : step === 4 ? (
          <FreeTest />
        ) : step === 5 ? (
          <ContactInfo />
        ) : null}
      </div>
    </StartFormElement>
  );
}

const StartFormElement = styled.section`
  z-index: 10;
  position: relative;
`;
