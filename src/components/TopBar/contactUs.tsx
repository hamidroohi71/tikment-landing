import React from "react";
import Phone from "./phone.svg";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function ContactUs() {
  const { activeSection } = useSection();
  const width = useWidth();
  const styleProp = useSpring({
    from: { opacity: 1 },
    to: { opacity: activeSection === 1 ? 1 : width < 480 ? 1 : 0 },
    delay: activeSection === 1 ? 500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  // console.log(width);

  return (
    <ContactElement>
      <img src={Phone} alt="contact" />
      <animated.p style={styleProp}>
        {width > 480 ? "تماس با تیکمنت" : "تماس"}
      </animated.p>
    </ContactElement>
  );
}

const ContactElement = styled.section`
  display: flex;
  align-items: center;
  padding: 10px 13px 10px 17px;
  border-left: 2px solid #7197b2;
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

  @media (max-width: 480px) {
    padding: 5px 5px 5px 21px;

    & > img {
      width: 41px;
      height: 41px;
    }

    p {
      font-size: 29px;
    }
  }
`;
