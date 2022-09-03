import React, { useEffect, useState } from "react";
import ContactInfo from "./formOptions/contactInfo";
import FreeTest from "./formOptions/freeTest";
import JobType from "./formOptions/jobType";
import Method from "./formOptions/method";
import Number from "./formOptions/number";
import styled from "styled-components";
import ProgressBar from "./formOptions/progressBar";
import { useSpring, animated, easings } from "react-spring";
import { useSection } from "../../../context/sectionStore";
import useWidth from "../../../hooks/useWidth";
import TickVideo from "../../../assets/video/Tick01.webm";
import FirstConfirm from "./formOptions/firstConfirm";
import TimeInfo from "./formOptions/timeInfo";

export default function StartForm({ handleFormOpen, open }: any) {
  const [done, setDone] = useState(false);
  const width = useWidth();
  const [result, setResult] = useState(
    "همکار گرامی؛ به زوی لینک کاتالوگ فنی برای شما ارسال می‌شود و همکاران ما با شما تماس خواهند گرفت. کمال تشکر و قدردانی را از همراهی شما داریم"
  );
  const [tick, setTick] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([] as any);
  const [time, setTime] = useState({ day: "", time: "" });
  const styleProps1 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: open ? "scaleX(1)" : "scaleX(0)" },
    delay: open ? 1000 : 0,
    config: { duration: open ? 1000 : 0, easing: easings.easeOutQuart },
  });
  const styleProps2 = useSpring({
    from: { transform: "scaleY(0)" },
    to: {
      transform: open ? (step === 7 ? "scaleY(0)" : "scaleY(1)") : "scaleY(0)",
    },
    delay: open ? (step === 7 ? 0 : 2000) : 0,
    config: { duration: open ? 1000 : 0, easing: easings.easeOutQuart },
  });

  const styleProps3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    delay: 3000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps4 = useSpring({
    to: {
      opacity: open ? 1 : width < 480 ? 1 : 0,
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps6 = useSpring({
    from: { opacity: 0 },
    to: { opacity: step === 7 ? 0 : 1 },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const styleProps7 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: step === 7 ? "scaleX(1)" : "scaleX(0)" },
    delay: 2000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const changeStep = (newStep: number) => {
    setStep(newStep);
  };

  const addAnswer = (answer: any, index: number) => {
    const newOne = [...answers];
    newOne[index] = answer;
    setAnswers([...newOne]);
  };

  useEffect(() => {
    // if (step === 5) {
    //   handleFormOpen(true);
    // } else {
    //   handleFormOpen(false);
    // }

    if (step === 5 || step === 6) {
      handleFormOpen(true);
    } else {
      handleFormOpen(false);
    }
    if (step === 7) {
      setTimeout(() => {
        setTick(true);
      }, 100);
    } else {
      setTick(false);
    }
  }, [step]);

  useEffect(() => {
    if (open) {
      setStep(0);
    }
  }, [open]);

  const addTime = (day: string, time: string) => {
    setTime({ day: day, time: time });
  };

  // console.log(answers);
  return (
    <StartFormElement
      onClick={(e: any) => {
        e.stopPropagation();
      }}
      style={styleProps4}
      open={open}
    >
      <TitleBox>
        {tick && <Tick src={TickVideo} loop={false} muted autoPlay={tick} />}

        {!tick && <RingSign></RingSign>}

        <Title style={{ ...styleProps1, ...styleProps6 }}>
          همین امروز اقدام کنید.
        </Title>
        <Result style={styleProps7}>{result}</Result>
      </TitleBox>
      <FormBox step={step} style={styleProps2}>
        <FormContent style={{ ...styleProps3, ...styleProps6 }}>
          <FirstConfirm step={step} nextStep={changeStep} />
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
          <TimeInfo
            step={step}
            answers={answers}
            nextStep={changeStep}
            addTime={addTime}
          />
          <ContactInfo
            step={step}
            answers={answers}
            nextStep={changeStep}
            time={time}
          />
          <ProgressBar
            show={step !== 0}
            percent={step > 5 ? 100 : (step / 5) * 100}
          />
        </FormContent>
      </FormBox>
    </StartFormElement>
  );
}

const StartFormElement = styled(animated.section)<{ open: boolean }>`
  z-index: ${({ open }) => (open ? 70 : 0)};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  @media (max-width: 480px) {
    position: relative;
    top: 0;
    margin-top: 596px;
    right: -20px;
  }
`;

const TitleBox = styled(animated.div)`
  display: flex;
  align-items: center;
  z-index: 10;
  position: relative;
`;

const Title = styled(animated.h2)`
  background: linear-gradient(252deg, #37abb8 0%, #71fbff 100%);
  line-height: 5.9vh;
  border-radius: 32px;
  box-shadow: 0px 7px 15px #00000033;
  font-size: 1.4vw;
  font-weight: 500;
  color: #fff;
  padding: 0 59px;
  margin: 0;
  transform-origin: right;
  @media (max-width: 480px) {
    font-size: 30px;
    padding: 0 21px;
    line-height: 45px;
    font-weight: 500;
  }
`;

const Result = styled(Title)`
  position: absolute;
  top: 0;
  right: 85px;
  height: 13vh;
  width: 56vw;
  font-size: 1.5vw;
  font-weight: 500;
  line-height: 1.8;
  padding: 2vh 3vh;
`;

const Tick = styled.video`
  width: 90px;
  height: 90px;
  position: absolute;
  right: -7px;
`;

const RingSign = styled.span`
  display: block;
  width: 5.9vh;
  height: 5.9vh;
  border-radius: 50%;
  background: #fff;
  border: 1.5vh solid #38acb9;
  margin-left: 13px;
  box-shadow: 0px 7px 15px #00000033;
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    border: 13.5px solid #38acb9;
  }
`;

const FormBox = styled(animated.div)<{ step: number }>`
  position: absolute;
  top: 2.9vh;
  bottom: 0;
  right: 2.9vh;
  width: 53vw;
  box-shadow: inset 0px 0px 80px #75c9db80;
  background: linear-gradient(180deg, #75c9db1a 0%, #4af3f81a 100%);
  border: ${({ step }) => (step === 6 ? "none" : "1px solid #b9e4ed")};
  border-radius: 3vw 0 3vw 3vw;
  backdrop-filter: blur(13px);
  transform-origin: top;
  padding: ${({ step }) => (step === 7 ? "0" : "2.5vw 2vw")};
  transition: 0.5s ease-out;

  @media (max-width: 480px) {
    position: relative;
    top: -20px;
    right: 20px;
    width: 330px;
    padding: 25px;
  }
`;

const FormContent = styled(animated.div)`
  @media (max-width: 480px) {
    height: 480px;
  }
`;
