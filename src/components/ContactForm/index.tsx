import React from "react";
import Header from "../Header";
import Footer from "../LastSec/Footer";
import styled from "styled-components";
import call from "./call.png";
import clock from "./clock.png";
import location from "./location.png";
import pic from "./Group.png";
import dot from "./dot.png";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";

export default function ContactForm() {
  return (
    <FormCantact>
      <Header></Header>
      <Forms>
        <ContactWay>
          <h2>راه‌های تماس با ما</h2>
          <div className="tel">۰۲۱-۴۱۳۹۲۰۰۰</div>
          <div className="time">شنبه تا چهارشنبه ۹:۰۰ تا ۱۷:۰۰</div>
          <div className="address">
            تهران، خیابان شهید دکتر بهشتی بعد از خیابان کاووسی‌فر پلاک ۲۰۴، طبقۀ
            اول
          </div>
        </ContactWay>

        <SentMail>
          <h2>پیام‌تان را در اسرع وقت پاسخ می‌دهیم</h2>
          <form action="">
            <textarea
              className="text"
              placeholder="&#xf27a;    .پیام خود را بنویسید"
            ></textarea>
            <input
              className="name"
              type="text"
              placeholder="&#xf007;       نام و نام خانوادگی "
            />

            <input
              className="number"
              type="tel"
              placeholder="&#xf095;      شمارۀ تماس"
            />
            <input className="submit" type="submit" value={"ثبت"} />
          </form>
        </SentMail>
      </Forms>
      <Footer></Footer>
    </FormCantact>
  );
}

const FormCantact = styled.section`
  background-image: url(${pic});
  background-size: cover;
  background-repeat: no-reapet;
`;

const Forms = styled.div`
  padding-top: 16vh;
  display: flex;
  flex-direction: row;
  gap: 7vw;
  justify-content: center;
  margin-bottom: 13vh;
  @media (max-width: 1400px) {
    padding-top: 21vh;
  }

  @media (max-width: 1400px) {
    padding-top: 21vh;
  }

  @media (max-width: 480px) {
    padding-top: 21vh;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    gap: 40px;
  }
`;

const ContactWay = styled.div`
  max-width: 36vw;
  direction: ltr;
  height: fit-content;
  position: relative;
  padding: 4.5vw 4vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  box-shadow: inset 0px 0px 80px #75c9db80;
  background: linear-gradient(180deg, #75c9db1a 0%, #4af3f81a 100%);
  border: 1px solid #b9e4ed;
  border-radius: 0px 3vw 3vw 3vw;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  animation: form-notion 2s;
  z-index: 10;

  @keyframes form-notion {
    from {
      transform: translate(-9%, 16%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }
  h2 {
    top: -2vh;
    position: absolute;
    left: 3vw;
    background: linear-gradient(252deg, #37abb8 0%, #71fbff 100%);
    line-height: 4vw;
    border-radius: 3vw;
    box-shadow: 0px 7px 15px #00000033;
    font-size: 1.8vw;
    font-weight: 500;
    color: #fff;
    padding: 0 3vw;
    margin: 0;
  }

  .tel {
    font-size: 4vw;
    font-weight: 500;
    font-family: "YekanBakh";
    color: #183573;
    position: relative;
    padding-left: 7vw;
    &:before {
      content: "";
      display: block;
      background-image: url(${call});
      background-size: contain;
      background-repeat: no-reapet;
      width: 9.5vw;
      height: 9.5vw;
      position: absolute;
      left: -2vw;
      top: -1vw;
    }
  }

  .time {
    font-size: 3vw;
    font-weight: 500;
    text-align: start;
    color: #183573;
    position: relative;
    padding-left: 7vw;
    &:before {
      content: "";
      display: block;
      background-image: url(${clock});
      background-size: contain;
      background-repeat: no-reapet;
      width: 6.5vw;
      height: 6.5vw;
      position: absolute;
      left: -1vw;
      top: 1vw;
    }
  }

  .address {
    font-size: 1.8vw;
    font-weight: 500;
    text-align: start;
    color: #183573;
    position: relative;
    padding-left: 7vw;
    &:before {
      content: "";
      display: block;
      background-image: url(${location});
      background-size: contain;
      background-repeat: no-reapet;
      width: 6.5vw;
      height: 6.5vw;
      position: absolute;
      left: -1vw;
    }
  }

  @media (max-width: 480px) {
    width: 83%;
    max-width: inherit;
    margin: auto;
    border-radius: 35px 0px 35px 35px;
    padding: 55px 14px 11px 19px;
    gap: 30px;
    h2 {
      font-size: 24px;
      font-weight: 500;
      padding: 10px 35px;
      border-radius: 35px;
      top: -17px;
      left: 100px;
      &:before {
        content: "";
        display: inline-flex;
        background-image: url(${dot});
        background-size: contain;
        background-repeat: no-reapet;
        width: 45px;
        height: 45px;
        position: absolute;
        right: -50px;
        top: -2px;
      }
    }

    .tel {
      font-size: 39px;
      padding-left: 75px;
      &:before {
        width: 80px;
        height: 82px;
        top: -8px;
      }
    }

    .time {
      font-size: 31px;
      padding-left: 77px;
      &:before {
        width: 56px;
        top: 18px;
        height: 56px;
        left: 0;
      }
    }

    .address {
      font-size: 22px;
      padding-left: 80px;
      &:before {
        width: 56px;
        height: 56px;
        left: 0;
        top: 27px;
      }
    }
  }
`;

const SentMail = styled.div`
  margin-top: 21vh;
  height: fit-content;
  margin-bottom: -6vh;
  max-width: 34vw;
  direction: ltr;
  position: relative;
  padding: 4.5vw 2vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  box-shadow: inset 0px 0px 80px #75c9db80;
  background: linear-gradient(180deg, #75c9db1a 0%, #4af3f81a 100%);
  border: 1px solid #b9e4ed;
  border-radius: 3vw 0px 3vw 3vw;
  -webkit-backdrop-filter: blur(13px);
  backdrop-filter: blur(13px);
  z-index: 10;
  animation: form-motion 2s;

  @keyframes form-motion {
    from {
      transform: translate(9%, -16%);
    }
    to {
      transform: translate(0%, 0%);
    }
  }
  h2 {
    top: -2vh;
    position: absolute;
    right: 2vw;
    background: linear-gradient(252deg, #37abb8 0%, #71fbff 100%);
    line-height: 4vw;
    border-radius: 3vw;
    box-shadow: 0px 7px 15px #00000033;
    font-size: 1.6vw;
    font-weight: 500;
    color: #fff;
    padding: 0 3vw;
    margin: 0;
  }
  form {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.7vh;
    direction: rtl;
    .text {
      position: relative;
      width: 100%;
      border-radius: 1.5vw;
      background-color: #ffffff;
      padding: 1vw;
      min-height: 15vh;
      border: none;
      direction: rtl;
      outline: none;
      font-size: 1.3vw;
      font-family: YekanBakh, FontAwesome !important;
      &::placeholder {
        text-align: start;
      }
    }
    .name {
      width: 100%;
      border-radius: 2vw;
      padding: 1vw;
      font-size: 1.3vw;
      background-color: #ffffff;
      direction: rtl;
      outline: none;
      border: none;
      font-family: YekanBakh, FontAwesome !important;
      &::placeholder {
        text-align: start;
      }
    }
    .number {
      width: 60%;
      border-radius: 2vw;
      padding: 1vw;
      font-size: 1.3vw;
      background-color: #ffffff;
      direction: rtl;
      outline: none;
      border: none;
      font-family: YekanBakh, FontAwesome !important;
      &::placeholder {
        text-align: start;
      }
    }
    .submit {
      background: linear-gradient(252deg, #ff5151 0%, #ffd011 100%);
      width: 35%;
      border: none;
      border-radius: 2vw;
      color: white;
      font-size: 1.7vw;
      font-weight: 500;
      transition: background 0.8s ease-in-out;
      &:hover {
        background: #ff5151;
      }
    }
  }

  @media (max-width: 480px) {
    width: 83%;
    max-width: initial;
    margin: auto;
    border-radius: 0px 35px 35px 35px;
    padding: 44px 34px 25px 27px;
    h2 {
      font-size: 22px;
      padding: 7px 10px;
      border-radius: 35px;
      &:before {
        content: "";
        display: inline-flex;
        background-image: url(${dot});
        background-size: contain;
        background-repeat: no-reapet;
        width: 45px;
        height: 45px;
        position: absolute;
        left: -47px;
        top: -6px;
      }
    }

    form {
      gap: 27px;

      .text {
        font-size: 24px;
        border-radius: 32px;
        padding: 22px;
        min-height: 224px;
      }

      .name {
        font-size: 24px;
        border-radius: 32px;
        padding: 15px;
      }

      .number {
        width: 100%;
        font-size: 24px;
        border-radius: 32px;
        padding: 15px;
      }

      .submit {
        font-size: 32px;
        border-radius: 32px;
        padding: 15px;
        width:100%;
      }
    }
  }
`;
