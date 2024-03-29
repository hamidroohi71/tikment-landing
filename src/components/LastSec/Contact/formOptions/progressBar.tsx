import React from "react";
import styled from "styled-components";

export default function ProgressBar({
  percent,
  show,
}: {
  percent: number;
  show: boolean;
}) {
  return (
    <ProgressBarElement show={show}>
      <ProgressDegree percent={percent}></ProgressDegree>
    </ProgressBarElement>
  );
}

const ProgressBarElement = styled.section<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 0.71 : 0)};
  position: absolute;
  bottom: 1.5vw;
  right: 0;
  left: 0;
  margin: auto;
  width: 88%;
  height: 20px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #ffffff99;
  backdrop-filter: blur(0px);
  background: linear-gradient(-90deg, #ffffff78 0%, #71fbffa6 100%);
  // border:2px solid red;
  // margin-bottom: -30px; 
  @media (max-width: 480px) {
    bottom: 24px;
    width: 75%;
  }
`;

const ProgressDegree = styled.div<{ percent: number }>`
  position: absolute;
  height: 12px;
  width: ${({ percent }) => percent + "%"};
  // mix-blend-mode: soft-light;
  opacity: 0.96;
  background: repeating-linear-gradient(
    135deg,
    #05185e,
    #05185e 5px,
    #4b86ac 6px,
    #4b86ac 10px
  );
  border-radius: ${({ percent }) => (percent === 100 ? "8px" : "0 8px 8px 0")};
  right: 2px;
  top: 2px;
  transition: 0.5s ease-out;
`;
