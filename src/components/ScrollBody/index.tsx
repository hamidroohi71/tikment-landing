import React, { useState } from "react";
import styled from "styled-components";
import { useWheel } from "react-use-gesture";
import Navigation from "../navigation";
import { useSection } from "../../context/sectionStore";
const { Lethargy } = require("lethargy");

export default function ScrollBody({ children }: { children: JSX.Element }) {
  const { activeSection, setActiveSection, nextSection, setNextSection } =
    useSection();

  const nextSectionHnadler = () => {
    if (activeSection < 9) {
      setNextSection(activeSection + 1);
      setActiveSection(null);
    }
  };

  const prevSectionHandler = () => {
    if (activeSection > 1) {
      setNextSection(activeSection - 1);
      setActiveSection(null);
    }
  };

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (!last) {
      const s = lethargy.check(event);
      if (s) {
        if (!wait) {
          if (s < 0) {
            nextSectionHnadler();
          } else if (s > 0) {
            prevSectionHandler();
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
      <Navigation />
      <Content section={activeSection}>{children}</Content>
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
`;
