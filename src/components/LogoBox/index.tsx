import React from "react";
import Logo from "./Logo.svg";
import styled from "styled-components";

export default function LogoBox() {
  return (
    <LogoBoxElement>
      <img src={Logo} alt="Tikment" />
    </LogoBoxElement>
  );
}

const LogoBoxElement = styled.section`
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
`;
