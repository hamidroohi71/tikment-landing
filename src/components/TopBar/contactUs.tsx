import React from "react";
import Phone from "./phone.svg";
import styled from "styled-components";

export default function ContactUs() {
  return (
    <ContactElement>
      <img src={Phone} alt="contact" />
      <p>تماس با تیکمنت</p>
    </ContactElement>
  );
}

const ContactElement = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 13px 10px 17px;
  border-left: 2px solid #e4e4e4;
  height: 100%;

  & > img {
    width: 47px;
    height: 47px;
  }

  p {
    text-align: center;
    font-size: 1.8vw;
    font-weight: 500;
    color: #f5f5f5;
    margin: 0;
    margin-right: 21px;
  }
`;
