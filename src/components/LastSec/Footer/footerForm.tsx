import React from "react";
import styled from "styled-components";
import call from "./call.png";
import clock from "./clock.png";
import location from "./location.png";

export default function FooterForm (){


    return(
        <>
        <Contact>
            <div className="tel">۰۲۱-۴۱۳۹۲۰۰۰</div>
            <div className="time">شنبه تا چهارشنبه ۹:۰۰ تا ۱۷:۰۰</div>
            <div className="address">
              تهران، خیابان شهید دکتر بهشتی بعد از خیابان کاووسی‌فر پلاک ۲۰۴،
              طبقۀ اول
            </div>
          </Contact>
        <Mail>
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
          </Mail>
        </>
    )
}


const Mail = styled.div`
  width: 50%;
  h2{
    font-size: 1.8vw;
    font-family: 'YekanBakh';
    font-weight: 400;
    padding-top: 3vh;
    padding-right: 3vh;
  }

  form{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-right: 3vw;
    padding-bottom:4vh;
    width: 73%;
    gap:1.7vw;
    .text {
      position: relative;
      width: 100%;
      border-radius: 1.5vw;
      background-color: #ffffff;
      padding: 1vw;
      min-height: 8vh;
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
      width: 33%;
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
`;

const Contact = styled.div`
  width: 50%;
  border-left: 1px solid white;
  .tel{
    padding-top:4vh;
    padding-right:10vw;
    color:white;
    font-size: 4vw;
    font-weight: 500;
    font-family: "YekanBakh";
    position: relative;
    &:before {
      content: "";
      display: block;
      background-image: url(${call});
      background-size: contain;
      background-repeat: no-reapet;
      width: 9.5vw;
      height: 9.5vw;
      position: absolute;
      right: 0;
      top: 2vw;
    }
  }

  .time {
    font-size: 2vw;
    font-weight: 500;
    color:white;
    position: relative;
    padding-right: 10vw;
    padding-top: 2vh;
    width: 64%;
    &:before {
      content: "";
      display: block;
      background-image: url(${clock});
      background-size: contain;
      background-repeat: no-reapet;
      width: 6.5vw;
      height: 6.5vw;
      position: absolute;
      right: 2vw;
      top: 2vw;
    }
  }

  .address {
    font-size: 1.8vw;
    font-weight: 500;
    color: white;
    position: relative;
    padding-right: 10vw;
    padding-top: 3vh;
    padding-bottom: 4vh;
    &:before {
      content: "";
      display: block;
      background-image: url(${location});
      background-size: contain;
      background-repeat: no-reapet;
      width: 6.5vw;
      height: 6.5vw;
      position: absolute;
      right: 2vw;
      top: 3vw;
    }
  }
`;