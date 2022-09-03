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
import useWidth from "../../hooks/useWidth";
import TickVideo from "../../assets/video/Tick01.webm";
import ProductSelection from "./formOptions/productSelection";

export default function ProductForm({
  handleFormOpen,
  setSelectedProduct,
}: {
  handleFormOpen: (status: boolean) => void;
  setSelectedProduct: any;
}) {
  const [done, setDone] = useState(false);
  const width = useWidth();

  const [result, setResult] = useState(
    "کارشناسان ما امروز با شما تماس خواهند گرفت"
  );
  const [tick, setTick] = useState(false);

  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState([] as any);
  const { activeSection } = useSection();
  const styleProps1 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: "scaleX(1)" },
    delay: 500,
    config: { duration: 500, easing: easings.easeOutQuart },
  });
  const styleProps2 = useSpring({
    from: { transform: "scaleY(0)" },
    to: { transform: step === 6 ? "scaleY(0)" : "scaleY(1)" },
    delay: 1000,
    config: { duration: 500, easing: easings.easeOutQuart },
  });
  const styleProps3 = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1500,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const styleProps4 = useSpring({
    to: {
      transform:
        activeSection === 1
          ? "translateX(0vw)"
          : width < 480
          ? "translateX(0vw)"
          : "translateX(100vw)",
    },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const styleProps5 = useSpring({
    to: {
      top: step === 5 ? "20vh" : width < 480 ? "0" : "57vh",
    },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const styleProps6 = useSpring({
    from: { opacity: 0 },
    to: { opacity: step === 6 ? 0 : 1 },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const styleProps7 = useSpring({
    from: { transform: "scaleX(0)" },
    to: { transform: step === 6 ? "scaleX(1)" : "scaleX(0)" },
    delay: 1000,
    config: { duration: 500, easing: easings.easeOutQuart },
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
    if (step === 6) {
      setTimeout(() => {
        setTick(true);
      }, 100);
    } else {
      setTick(false);
    }
  }, [step]);

  // console.log(answers);
  return (
    <StartFormElement style={{ ...styleProps4, ...styleProps5 }}>
      <TitleBox>
        {tick && <Tick src={TickVideo} loop={false} muted autoPlay={tick} />}

        {!tick && <RingSign></RingSign>}

        <Title style={{ ...styleProps1, ...styleProps6 }}>
          {"برای انتخاب بهتر"}
        </Title>
        <Result style={styleProps7}>{result}</Result>
      </TitleBox>
      <FormBox end={step === 6} style={styleProps2}>
        <FormContent style={styleProps3}>
          <ProductSelection setSelectedProduct={setSelectedProduct} />
        </FormContent>
      </FormBox>
    </StartFormElement>
  );
}

const StartFormElement = styled(animated.section)`
  z-index: 10;
  position: absolute;
  top: 57vh;
  bottom: 12vh;
  @media (max-width: 480px) {
    position: relative;
    top: 0;
    margin-top: 680px;
    right: -20px;
  }
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
  line-height: 5.9vh;
  border-radius: 2.9vh;
  box-shadow: 0px 7px 15px #00000033;
  font-size: 1.8vw;
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
    
  }
`;

const Result = styled(Title)`
  position: absolute;
  top: 0;
  right: 5.5vw;
  height: 5.9;
  width: 39vw;

  @media (max-width: 480px) {
    top: -9px;
    right: 76px;
    height: fit-content;
    width: 79%;
    font-size: 20px;
    border-radius: 35px;
  }
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
  }
`;

const FormBox = styled(animated.div)<{ end: boolean }>`
  position: absolute;
  top: 2.9vh;
  bottom: ${({ end }) => (end ? "calc(100% - 32px)" : "0")};
  right: 2.9vh;
  width: 37vw;
  box-shadow: inset 0px 0px 80px #75c9db80;
  background: linear-gradient(180deg, #75c9db1a 0%, #4af3f81a 100%);
  border: ${({ end }) => (end ? "none" : "1px solid #b9e4ed")};
  border-radius: 3vw 0 3vw 3vw;
  backdrop-filter: blur(13px);
  transform-origin: top;
  padding: ${({ end }) => (end ? "0" : "2.5vw 2vw")};
  transition: 0.5s ease-out;
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    position: relative;
    top: -20px;
    right: 20px;
    width: 330px;
    padding: 25px 25px 90px;
    border-radius: 64px 0px 64px 64px;
  }
`;

const FormContent = styled(animated.div)`
  width: 100%;
  @media (max-width: 480px) {
    height: 480px;
  }
`;
