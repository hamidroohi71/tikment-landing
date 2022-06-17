import React, { useEffect, useState } from "react";
import ContactInfo from "./formOptions/contactInfo";
import FreeTest from "./formOptions/freeTest";
import JobType from "./formOptions/jobType";
import Method from "./formOptions/method";
import Number from "./formOptions/number";
import styled from "styled-components";
import ProgressBar from "./formOptions/progressBar";
import { useSpring, animated, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";

export default function StartForm({
  handleFormOpen,
}: {
  handleFormOpen: (status: boolean) => void;
}) {
  const [done, setDone] = useState(false);
  const [result, setResult] = useState(
    "کارشناسان ما امروز با شما تماس خواهند گرفت"
  );
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([] as any);
  const { activeSection } = useSection();
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

  const styleProps4 = useSpring({
    to: {
      transform: activeSection === 1 ? "translateX(0vw)" : "translateX(100vw)",
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps5 = useSpring({
    to: {
      top: step === 5 ? "20vh" : "57vh",
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const changeStep = (newStep: number) => {
    setStep(newStep);
  };

  const addAnswer = (answer: any) => {
    const newOne = [...answers];
    newOne.push(answer);
    setAnswers([...newOne]);
  };

  useEffect(() => {
    if (step === 5) {
      handleFormOpen(true);
    } else {
      handleFormOpen(false);
    }
  }, [step]);

  // console.log(answers);
  return (
    <StartFormElement style={{ ...styleProps4, ...styleProps5 }}>
      <TitleBox>
        <RingSign></RingSign>
        <Title style={styleProps1}>{done ? result : "برای انتخاب بهتر"}</Title>
      </TitleBox>
      <FormBox style={styleProps2}>
        <FormContent style={styleProps3}>
          <JobType
            step={step}
            nextStep={changeStep}
            addAnswer={addAnswer}
            answers={answers}
          />
          <Number
            step={step}
            answers={answers}
            nextStep={changeStep}
            addAnswer={addAnswer}
          />
          <Method
            step={step}
            answers={answers}
            nextStep={changeStep}
            addAnswer={addAnswer}
          />
          <FreeTest
            step={step}
            answers={answers}
            nextStep={changeStep}
            addAnswer={addAnswer}
          />
          <ContactInfo step={step} answers={answers} nextStep={changeStep} />
          <ProgressBar percent={(step / 5) * 100} />
        </FormContent>
      </FormBox>
    </StartFormElement>
  );
}

const StartFormElement = styled(animated.section)`
  z-index: 10;
  position: absolute;
  top: 57vh;
  bottom: 6vh;
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
  bottom: 0;
  right: 32px;
  width: 53vw;
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  border-radius: 3vw;
  backdrop-filter: blur(13px);
  transform-origin: top;
  padding: 2.5vw 2vw;
`;

const FormContent = styled(animated.div)``;
