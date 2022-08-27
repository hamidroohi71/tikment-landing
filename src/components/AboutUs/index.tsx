import React from "react";
import styled from "styled-components";
import LicenseImage1 from "./Assets/science.png";
import LicenseImage2 from "./Assets/computer.png";

export default function AboutUs() {
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
