import React from "react";
import styled from "styled-components";
import IconImage from "./assets/freeTest.svg";
import { animated } from "react-spring";

export default function FreeTestModule({
  style,
  handleClick,
}: {
  style: any;
  handleClick: () => void;
}) {
  return (
    <FreeTestBar style={style}>
      <Icon>
        <img src={IconImage} alt="تستت رایگان" />
      </Icon>
      <FreeTestBtn onClick={handleClick}>دریافت ۳۰ روز تست رایگان</FreeTestBtn>
    </FreeTestBar>
  );
}

const FreeTestBar = styled(animated.div)`
  width: 45vw;
  height: 104px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 64vh;
  background: linear-gradient(
    0deg,
    rgb(117 201 219 / 7%) 0%,
    rgb(74 243 248 / 12%) 100%
  );
  box-shadow: inset 0px 0px 99px #80a5ac21;
  border: 1px solid #75c9dbb0;
  border-radius: 52px 0px 0px 52px;
  backdrop-filter: blur(20px);
  z-index: 50;
`;

const Icon = styled.div`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  background: linear-gradient(214deg, #ff8080 0%, #ffd011 100%);
  box-shadow: 0px 7px 15px #00000033;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FreeTestBtn = styled.p`
  background: linear-gradient(254deg, #ff8080 0%, #ffd011 100%);
  box-shadow: 0px 7px 15px #00000033;
  border-radius: 32px;
  font-size: 1.6vw;
  color: #fff;
  padding: 0 20px;
  line-height: 3vw;
  margin: auto 15px auto 20px;
  cursor: pointer;
`;
