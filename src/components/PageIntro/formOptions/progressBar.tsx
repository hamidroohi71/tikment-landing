import React from "react";
import styled from "styled-components";

export default function ProgressBar({ percent }: { percent: number }) {
  return (
    <ProgressBarElement>
      <ProgressDegree percent={percent}></ProgressDegree>
    </ProgressBarElement>
  );
}

const ProgressBarElement = styled.section`
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
  opacity: 0.71;
  backdrop-filter: blur(0px);
`;

const ProgressDegree = styled.div<{ percent: number }>`
  position: absolute;
  height: 16px;
  width: ${({ percent }) => percent + "%"};
  //   mix-blend-mode: soft-light;
  opacity: 0.96;
  background: blue;
  border-radius: 8px;
  right: 2px;
  top: 2px;
`;
