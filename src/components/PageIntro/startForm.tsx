import React, { useState } from "react";
import ContactInfo from "./formOptions/contactInfo";
import FreeTest from "./formOptions/freeTest";
import JobType from "./formOptions/jobType";
import Method from "./formOptions/method";
import Number from "./formOptions/number";
import styled from "styled-components";
import ProgressBar from "./formOptions/progressBar";
import { useSpring, animated, easings } from "react-spring";

export default function StartForm() {
  const styleProps1 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const styleProps2 = useSpring({
    from: { transform: "scaleY(0)" },
    to: { transform: "scaleY(1)" },
    delay: 2000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const styleProps3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 3000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const [done, setDone] = useState(false);
  const [result, setResult] = useState(
    "کارشناسان ما امروز با شما تماس خواهند گرفت"
  );
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([] as any);

  const changeStep = (newStep: number) => {
    setStep(newStep);
  };

  const addAnswer = (answer: any) => {
    const newOne = [...answers, ...answer];
    setAnswers([...newOne]);
  };

  console.log(answers);
  return (
    <StartFormElement>
      <TitleBox>
        <RingSign></RingSign>
        <Title style={styleProps1}>{done ? result : "برای انتخاب بهتر"}</Title>
      </TitleBox>
      <FormBox style={styleProps2}>
        <FormContent style={styleProps3}>
          {step === 1 ? (
            <JobType nextStep={changeStep} addAnswer={addAnswer} />
          ) : step === 2 ? (
            <Number
              answers={answers}
              nextStep={changeStep}
              addAnswer={addAnswer}
            />
          ) : step === 3 ? (
            <Method
              answers={answers}
              nextStep={changeStep}
              addAnswer={addAnswer}
            />
          ) : step === 4 ? (
            <FreeTest
              answers={answers}
              nextStep={changeStep}
              addAnswer={addAnswer}
            />
          ) : step === 5 ? (
            <ContactInfo answers={answers} nextStep={changeStep} />
          ) : null}
          <ProgressBar percent={(step / 5) * 100} />
        </FormContent>
      </FormBox>
    </StartFormElement>
  );
}

const StartFormElement = styled.section`
  z-index: 10;
  position: relative;
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
`;

const Title = styled(animated.h2)`
  background: transparent linear-gradient(252deg, #37abb8 0%, #71fbff 100%) 0%
    0% no-repeat padding-box;
  line-height: 64px;
  border-radius: 32px;
  box-shadow: 0px 7px 15px #00000033;
  font-size: 1.8vw;
  color: #fff;
  padding: 0 59px;
  margin: 0;
  transform-origin: right;
`;

const RingSign = styled.span`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: #fff;
  border: 19px solid #38acb9;
  margin-left: 13px;
  box-shadow: 0px 7px 15px #00000033;
`;

const FormBox = styled(animated.div)`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 53vw;
  height: 36vh;
  background: linear-gradient(
    180deg,
    rgb(117 201 219 / 10%) 0%,
    rgb(74 243 248 / 10%) 100%
  );
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 3vw;
  backdrop-filter: blur(13px);
  transform-origin: top;
  padding: 48px 40px;
`;

const FormContent = styled(animated.div)``;
