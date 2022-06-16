import React from "react";
import Phone from "./phone.svg";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";

export default function ContactUs() {
  const { activeSection } = useSection();

  const styleProp = useSpring({
    from: { opacity: 1 },
    to: { opacity: activeSection === 1 ? 1 : 0 },
    delay: activeSection === 1 ? 500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  return (
    <ContactElement>
      <img src={Phone} alt="contact" />
      <animated.p style={styleProp}>تماس با تیکمنت</animated.p>
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
