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
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 7) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const handlePrevSection = () => {
    console.log("prev");
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
    <AboutUsSec {...bind()}>
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
        <img src={LicenseImage1} alt="دانش بنیان" />
        <img src={LicenseImage2} alt="نظام صنفی رایانه‌ای" />
      </LicenseBox>
      <CopyRight>
        <p>همۀحقوق این وب‌سایت متعلق به گروه شرکت‌های هوش تجاری است.</p>
      </CopyRight>
    </AboutUsSec>
  );
}

const AboutUsSec = styled.section``;

const Title = styled.h2``;

const Text = styled.p``;

const LicenseBox = styled.div``;

const CopyRight = styled.div`
  color: #04165d;
  font-size: 1.6vw;
  text-align: center;
  height: 7vh;
  line-height: 7vh;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 34px;
    height: unset;
    padding: 0 30px;
    color: #04165d;
  }
`;
