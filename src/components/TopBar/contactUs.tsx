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
      console.log("has");
      setContact(true);
    }
  }, []);
  // console.log(width);

  console.log("hamidreza:",activeSection)

  return (
    <ContactElement activeSection={activeSection}  contact={contact} onClick={() => navigate("/contactUs")}>
      <img src={Phone} alt="contact" />
      <animated.p style={styleProp}>
        {width > 480 ? "تماس با تیکمنت" : "تماس"}
      </animated.p>
    </ContactElement>
  );
}

const ContactElement = styled.section<{ activeSection: number ,contact:boolean}>`
  display: flex;
  align-items: center;
  padding: 10px 13px 10px 17px;
  border-left: 2px solid #7197b2;
  height: 100%;
  cursor: pointer;
  transition:width 2s ease-in-out;
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
  &:hover{
    width:${({ activeSection ,contact}) => (activeSection!== 1 && !contact ?"24vw":"")};
    background:${({ activeSection,contact }) => (activeSection!== 1 && !contact ? "linear-gradient(to right, #0089a7, #04165d)":0)};
    border-radius:${({ activeSection,contact }) => (activeSection!== 1 && !contact? "3vw":'')};
    margin-right:${({ activeSection,contact }) => (activeSection!== 1 && !contact ? "-130px":'')};

    p{
      opacity:${({ activeSection ,contact}) => (activeSection!== 1 && !contact ?"1 !important":'')};
    }
   
    
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
