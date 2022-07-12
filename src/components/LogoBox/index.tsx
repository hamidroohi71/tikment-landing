import React from "react";
import Logo from "./Logo.svg";
import MobileLogo from "./mobileLogo.svg";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";
import { useSection } from "../../context/sectionStore";
import { useNavigate } from "react-router-dom";

export default function LogoBox() {
  const { setNextSection, setActiveSection, activeSection } = useSection();
  const navigate = useNavigate();

  const width = useWidth();
  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  return (
    <LogoBoxElement
      onClick={() => {
        if (activeSection !== 1) {
          setNextSection(1);
          setActiveSection(null);
        }
        setActiveSection(1);
        navigate("/");
      }}
      style={styleProps}
    >
      <img src={width > 480 ? Logo : MobileLogo} alt="Tikment" />
    </LogoBoxElement>
  );
}

const LogoBoxElement = styled(animated.section)`
  cursor: pointer;
  z-index: 30;
  background: #f9f8f7;
  width: 19vw;
  height: 69px;
  border-radius: 35px 0 0 35px;
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  padding-left: 37.5px;
  justify-content: flex-end;
  background: #f9f8f7;
  // box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  box-shadow: inset 0px 0px 80px #75c9db80;
  border: 1px solid #b9e4ed;
  border-radius: 35px 0px 0px 35px;
  backdrop-filter: blur(2px);
  & > img {
    width: 69%;
    height: 34px;
    object-fit: contain;
    margin-top: 4%;
  }

  @media (max-width: 480px) {
    width: 85px;
    height: 51px;
    padding-left: 21px;
    top: 29px;

    & > img {
      width: 27px;
      height: 29px;
    }
  }
`;
