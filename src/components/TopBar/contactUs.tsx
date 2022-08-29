import React, { useEffect, useState } from "react";
import Phone from "./phone.svg";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";
import { useNavigate } from "react-router-dom";
import useWidth from "../../hooks/useWidth";

export default function ContactUs() {
  const { activeSection } = useSection();
  const [contact, setContact] = useState(false);

  const navigate = useNavigate();
  const width = useWidth();
  const styleProp = useSpring({
    from: { opacity: 1 },
    to: {
      opacity: activeSection === 1 ? 1 : width < 480 ? 1 : contact ? 1 : 0,
    },
    delay: activeSection === 1 ? 500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  useEffect(() => {
    if (window.location.href.includes("contactUs")) {
      setContact(true);
    }
  }, []);
  // console.log(width);

  return (
    <ContactElement
      activeSection={activeSection}
      contact={contact}
      onClick={() => navigate("/contactUs")}
    >
      <img src={Phone} alt="contact" />
      <animated.p style={styleProp}>
        {width > 480 ? "تماس با تیکمنت" : "تماس"}
      </animated.p>
    </ContactElement>
  );
}

const ContactElement = styled.section<{
  activeSection: number;
  contact: boolean;
}>`
  display: flex;
  align-items: center;
  padding: 10px 13px 10px 17px;
  border-left: 2px solid #7197b2;
  height: 100%;
  cursor: pointer;
  transition: margin-right 2s ease-in-out 0s, min-width 2s ease-in-out 0s,
    background 0s ease-in-out 2s;
  min-width: 0vw;
  margin-right: 0;
  border-radius: 3vw;

  & > img {
    width: 47px;
    height: 47px;
  }

  p {
    text-align: center;
    font-size: 1.5vw;
    font-weight: 500;
    color: #f5f5f5;
    margin: 0;
    margin-right: 21px;
    white-space: nowrap;
  }
  &:hover {
    min-width: ${({ activeSection, contact }) =>
      activeSection !== 1 && !contact ? "20vw" : "0vw"};
    background: ${({ activeSection, contact }) =>
      activeSection !== 1 && !contact ? " #04165d" : 0};
    border-radius: ${({ activeSection, contact }) =>
      activeSection !== 1 && !contact ? "3vw" : ""};
    margin-right: ${({ activeSection, contact }) =>
      activeSection !== 1 && !contact ? "-130px" : ""};

    p {
      opacity: ${({ activeSection, contact }) =>
        activeSection !== 1 && !contact ? "1 !important" : ""};
    }
    transition: margin-right 2s ease-in-out 0s, min-width 2s ease-in-out 0s,
      background 0s ease-in-out 0s;
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
