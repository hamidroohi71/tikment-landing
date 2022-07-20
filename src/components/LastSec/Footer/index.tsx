import React from "react";
import styled from "styled-components";
import LogoBox from "../../LogoBox";
import Tlogo from "./tik-logo.png";
import data from "./data.json";

export default function Footer() {
  const socicalElement = data.footerSocial.map((item) => (
    <div key={item.name}>
      <img src={item.icon} alt={item.name} />
    </div>
  ));
  return (
    <FooterSection>
      <FooterTop>
        <FooterRight>
          <Logo></Logo>
          <LogoBox />
          <SocialBox>{socicalElement}</SocialBox>
        </FooterRight>
        <FooterLeft>
          <p>
            سیستم حضوروغیاب تیکمنت پیش‌تر با نام «جهان‌گستر پارس» در خدمت
            همکاران عزیز بود. ما تا کنون در بیش از ۳۵۰۰۰ سازمان خصوصی و دولتی
            فعال بوده‌ایم و با بیش از ۷۰ نمایندگی در سرتاسر ایران خدمت
            رسانده‌ایم. شرکت هوش تجاری پایدار در سال ۱۳۹۹ تصمیم گرفت، تا برند
            «جهان‌گستر پارس» را به‌روز کند. اینک مفتخریم: سیستم حضوروغیاب جدید
            خود را با نام «تیکمنت» در اختیار سازمان‌ها‌ی خصوصی و دولتی و دیگر
            مراکز درمانی و تجاری قرار دهیم
          </p>
        </FooterLeft>
      </FooterTop>

      <CopyRight>
        <p>همۀحقوق این وب‌سایت متعلق به گروه شرکت‌های هوش تجاری است.</p>
      </CopyRight>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 480px) {
    order: 2;
  }
`;

const FooterTop = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 100%;
    & > section {
      display: none;
    }
  }
`;

const Logo = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    background-image: url(${Tlogo});
    width: 222px;
    height: 51px;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    right: -4px;
    top: 11px;
  }
`;

const FooterLeft = styled.div`
  width: 78%;
  color: #fff;
  font-size: 1.6vw;
  font-weight: 300;
  padding: 4vh 4.2vw 4vh 12vw;
  border-radius: 0 3.3vw 3.3vw 0;
  background: linear-gradient(92deg, #0089a7 0%, #04165d 100%);
  box-shadow: 0px 10px 14px #033f7733;
  flex-shrink: 0;
  @media (max-width: 480px) {
    font-size: 27px;
    text-align: justify;
    border-radius: 0 64px 64px 0;
    width: 92%;
    padding: 41px 61px 22px 55px;
    font-weight: 300;
  }
`;

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

const SocialBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 11vw 2vw 2vw;

  & > div {
    width: 3.6vw;
    height: 3.6vw;
    border-radius: 50%;
    background: #f9f8f7;
    box-shadow: inset 0px 0px 80px #75c9db80;
    border: 1px solid #b9e4ed;
    display: flex;
    margin: 10px;
    cursor: pointer;

    & > img {
      width: 50%;
      height: 50%;
      object-fit: contain;
      margin: auto;
    }
  }

  @media (max-width: 480px) {
    padding: 0 90px 20px 50px;
    div:nth-child(1) {
      margin-right: 53%;
    }

    & > div {
      width: 52px;
      height: 52px;

      & > img {
        width: 50%;
        height: 50%;
      }
    }
  }
  @media (min-width: 1920px) {
    padding-top: 8vw;
  }
`;
