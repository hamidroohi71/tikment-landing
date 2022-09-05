import React, { useState } from "react";
import styled from "styled-components";
import LogoBox from "../../LogoBox";
import Tlogo from "./tik-logo.png";
import data from "./data.json";
import PhoneIcon from "../../../assets/icons/PhoneIcon.png";
import TimeIcon from "../../../assets/icons/TimeIcon.svg";
import LocationIcon from "../../../assets/icons/LocationIcon.svg";

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
          <InfoBox>
            <div>
              <img src={PhoneIcon} alt="تلفن" />
              <p>۰۲۱-۴۱۳۹۲۰۰۰</p>
            </div>
            <div>
              <img src={TimeIcon} alt="ساعت کاری" />
              <p>شنبه تا چهارشنبه</p>
              <p>۹:۰۰ تا ۱۷:۰۰</p>
            </div>
            <div>
              <img src={LocationIcon} alt="آدرس" />
              <p>
                تهران، خیابان شهید دکتر بهشتی
                <br /> بعد از خیابان کاووسی‌فر پلاک ۲۰۴، طبقۀ اول
              </p>
            </div>
          </InfoBox>
          <FormBox>
            <h2>پیام‌تان را در اولین فرصت پاسخ می‌دهیم:</h2>
            <form>
              <textarea placeholder="پیام‌تان را بنویسد." />
              <input type="text" placeholder="نام و نام خانوداگی" />
              <div>
                <input type="text" placeholder="شمارهٔ‌ تماس" />
                <input type="submit" value="ثبت" />
              </div>
            </form>
          </FormBox>
        </FooterLeft>
      </FooterTop>
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

  .LogoBox {
    top: 0;
  }

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
  border-radius: 0 3.3vw 3.3vw 0;
  background: linear-gradient(92deg, #0089a7 0%, #04165d 100%);
  box-shadow: 0px 10px 14px #033f7733;
  flex-shrink: 0;
  display: flex;

  @media (max-width: 480px) {
    font-size: 27px;
    text-align: justify;
    border-radius: 0 64px 64px 0;
    width: 92%;
    padding: 41px 61px 22px 55px;
    font-weight: 300;
  }
`;

const InfoBox = styled.div`
  padding: 3vh 3.8vw 3.5vh;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e4e4e4;

  & > div {
    display: flex;
    align-items: center;

    &:first-child {
      img {
        width: 10vh;
        height: 10vh;
        object-fit: contain;
        margin-left: 25px;
        flex-shrink: 0;
      }
      p {
        font-size: 5vw;
        font-weight: 500;
        margin: 0;
      }
    }

    &:nth-child(2) {
      margin-bottom: 20px;
      img {
        width: 10vh;
        height: 10vh;
        object-fit: contain;
        margin-left: 25px;
      }
      p {
        font-size: 1.8vw;
        font-weight: 300;
        margin: 0;
      }
    }
    &:nth-child(3) {
      img {
        width: 10vh;
        height: 10vh;
        object-fit: contain;
        margin-left: 25px;
      }
      p {
        font-size: 1.8vw;
        font-weight: 300;
        margin: 0;
      }
    }
  }
`;

const FormBox = styled.div`
  padding: 3.8vh 3.8vh 5.8vh 5vw;

  h2 {
    font-size: 1.8vw;
    font-weight: 300;
    color: #fff;
    text-align: center;
    margin: 0 0 2vh;
  }
  form {
    display: flex;
    flex-direction: column;

    textarea {
      height: 17vh;
      background: #fff;
      border-radius: 32px;
      border: none;
      outline: none;
      margin-bottom: 2vh;
      padding: 22px;
      font-family: YekanBakh;
      font-size: 1.2vw;
      * {
        vertical-align: top;
      }
    }

    input[type="text"] {
      height: 5.9vh;
      background: #fff;
      border-radius: 32px;
      border: none;
      outline: none;
      margin-bottom: 2vh;
      padding: 0 22px;
      font-family: YekanBakh;
      font-size: 1.2vw;
    }

    & > div {
      display: flex;
      align-items: center;
      input[type="text"] {
        width: 17vw;
        height: 5.9vh;
        background: #fff;
        border-radius: 32px;
        border: none;
        outline: none;
        flex-shrink: 0;
        margin: 0;
      }
      input[type="submit"] {
        background: linear-gradient(210deg, #37abb8, #71fbff);
        height: 5.9vh;
        border-radius: 32px;
        flex-grow: 1;
        border: none;
        outline: none;
        flex-shrink: 0;
        margin: 0 2vh 0 0;
        font-size: 1.5vw;
        color: #fff;
        font-weight: 500;
      }
    }
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
  justify-content: flex-end;
  padding: 5vw 8vw 2vw 3vw;

  & > div {
    width: 4vw;
    height: 4vw;
    border-radius: 50%;
    background: #f9f8f7;
    box-shadow: inset 0px 0px 80px #75c9db80;
    border: 1px solid #b9e4ed;
    display: flex;
    margin: 5px;
    cursor: pointer;

    & > img {
      width: 60%;
      height: 60%;
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
