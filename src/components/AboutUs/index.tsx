import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LicenseImage1 from "./Assets/science.png";
import LicenseImage2 from "./Assets/computer.png";
import { useSection } from "../../context/sectionStore";
import { useWheel } from "react-use-gesture";
import useWidth from "../../hooks/useWidth";
const { Lethargy } = require("lethargy");

export default function AboutUs() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (activeSection === 7) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const handlePrevSection = () => {
    setNextSection(6);
    setActiveSection(null);
  };

  const width = useWidth();
  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s > 0) {
              handlePrevSection();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  return (
    <AboutUsSec>
      <Title>درباره تیکمنت</Title>
      <Text>
        سیستم حضوروغیاب تیکمنت پیش‌تر با نام «جهان‌گستر پارس» در خدمت همکاران
        عزیز بود. ما تا کنون در بیش از ۳۵۰۰۰ سازمان خصوصی و دولتی فعال بوده‌ایم
        و با بیش از ۷۰ نمایندگی در سرتاسر ایران خدمت رسانده‌ایم. شرکت هوش تجاری
        پایدار در سال ۱۳۹۹ تصمیم گرفت، تا برند «جهان‌گستر پارس» را به‌روز کند.
        اینک مفتخریم: سیستم حضوروغیاب جدید خود را با نام «تیکمنت» در اختیار
        سازمان‌ها‌ی خصوصی و دولتی و دیگر مراکز درمانی و تجاری قرار دهیم
      </Text>
      <Title>گواهی‌های تیکمنت</Title>
      <LicenseBox>
        <div>
          <img src={LicenseImage1} alt="دانش بنیان" />
        </div>
        <div>
          <img src={LicenseImage2} alt="نظام صنفی رایانه‌ای" />
        </div>
      </LicenseBox>
      <CopyRight>
        <p>همۀحقوق این وب‌سایت متعلق به گروه شرکت‌های هوش تجاری است.</p>
      </CopyRight>
    </AboutUsSec>
  );
}

const AboutUsSec = styled.section`
  padding: 20px 222px 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h2`
  font-size: 1.8vw;
  font-weight: 300;
  color: #e67205;
  line-height: 1.8;
  margin: 0 0 5px;
`;

const Text = styled.p`
  font-size: 1.8vw;
  color: #6e6d6d;
  margin: 0 0 21px;
  font-weight: 300;
`;

const LicenseBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  & > div {
    width: 30vh;
    height: 30vh;
    border-radius: 50%;
    background: #f7f7f7;
    border: 2px solid #cbcbcb;
    display: flex;
    margin: 0 24px;
    position: relative;

    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
      margin: auto;
      filter: grayscale(100%);
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      border-radius: 50%;
      background: linear-gradient(to bottom, #05185e, #4b86ac);
      opacity: 0.5;
      mix-blend-mode: color;
    }
  }
`;

const CopyRight = styled.div`
  color: #04165d;
  margin-top: auto;
  margin-bottom: 0;
  font-size: 1.6vw;
  text-align: center;
  height: 7vh;
  line-height: 7vh;
  margin: 0 auto;
  background: #f9f8f7;
  box-shadow: inset 0px 0px 80px #75c9db80;
  border: 1px solid #b9e4ed;
  border-radius: 35px 35px 0 0;
  padding: 0 44px;
  width: fit-content;

  p {
    margin: 0;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 34px;
    height: unset;
    padding: 0 30px;
    color: #04165d;
  }
`;
