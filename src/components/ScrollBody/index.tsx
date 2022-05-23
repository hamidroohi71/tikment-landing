import React, { useState } from "react";
import styled from "styled-components";
import { useWheel } from "react-use-gesture";
import Navigation from "../navigation";
const { Lethargy } = require("lethargy");

export default function ScrollBody({ children }: { children: JSX.Element }) {
  const [section, setSection] = useState(0);

  const nextSection = () => {
    if (section < 8) {
      setSection(section + 1);
    }
  };

  const prevSection = () => {
    if (section > 0) {
      setSection(section - 1);
    }
  };

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (!last) {
      const s = lethargy.check(event);
      if (s) {
        if (!wait) {
          if (s < 0) {
            nextSection();
          } else if (s > 0) {
            prevSection();
          }
          return true;
        }
      } else return false;
    } else {
      return false;
    }
  });

  return (
    <Body {...bind()}>
      <Navigation section={section} />
      <Content section={section}>{children}</Content>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div<{ section: number }>`
  width: 100%;
  height: 900%;
  display: flex;
  flex-direction: column;
  transform: ${({ section }) => `translateY(-${(100 / 9) * section}%)`};
  transition: 0.5s ease-in-out;
`;
