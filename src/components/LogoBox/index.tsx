import React from "react";
import Logo from "./Logo.svg";
import MobileLogo from "./mobileLogo.svg";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function LogoBox() {
  const width = useWidth();
  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 500,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  return (
    <LogoBoxElement style={styleProps}>
      <img src={width > 480 ? Logo : MobileLogo} alt="Tikment" />
    </LogoBoxElement>
  );
}

const LogoBoxElement = styled(animated.section)`
  z-index: 30;  
  background: #f9f8f7;
  box-shadow: inset 0px 0px 80px #75C9DB80, 0px 3px 3px #8125254D;
  blur(2px);
  width: 19vw;
  height: 69px;
  border-radius: 35px 0 0 35px;
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  align-items: center;
  padding-left: 37.5px;
  justify-content: flex-end;
  & > img {
    width: 179px;
    height: 27px;
    object-fit: contain;
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
