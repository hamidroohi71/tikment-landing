import React from "react";
import styled from "styled-components";

export default function FirstConfirm({ step, nextStep }: any) {
  return (
    <ConfirmBox show={step === 0}>
      <h2>
        شما می‌توانید همین امروز برای دریافت کاتالوگ محصولات با ما تماس بگیرید.
        پیشنهاد ما این است که قبل از تماس، فرم مشاوره را پر نمایید تا راهنمایی
        دقیق‌تری در اختیار شما قرار گیرد
      </h2>
      <div>
        <ContactInfo>
          <h3>شماره تماس:</h3>
          <p>۰۲۱ - ۴۱۳۹۲۰۰۰</p>
        </ContactInfo>
        <button
          onClick={() => {
            nextStep(1);
          }}
        >
          پر کردن فرم مشاوره
        </button>
      </div>
    </ConfirmBox>
  );
}

const ConfirmBox = styled.section<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? 100 : -1)};
  position: absolute;
  top: 4.5vh;
  right: 4.5vh;
  bottom: 4.5vh;
  left: 4.5vh;

  & > h2 {
    font-size: 1.6vw;
    color: #183573;
    font-weight: 500;
    line-height: 150%;
    margin-top: 0;
    margin-bottom: 2.7vh;
    padding: 1rem;
    text-align: justify;
    letter-spacing: -0.5px;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    flex-shrink: 0;
    margin-right: 29px;
    background: linear-gradient(-30deg, #ff5151, #ffd011);
    height: 6.7vh;
    padding: 0 33px;
    color: #fff;
    font-size: 1.7vw;
    font-weight: 500;
    border-radius: 3.3vh;
    border: none;
    outline: none;
    font-family: YekanBakh;
    cursor: pointer;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #ffffff;
  padding: 0 32px;
  flex-grow: 1;
  border-radius: 3.3vh;

  h3,
  p {
    font-size: 1.8vw;
    color: #4af3f8;
    margin: 0;
    line-height: 6.7vh;
  }
`;
