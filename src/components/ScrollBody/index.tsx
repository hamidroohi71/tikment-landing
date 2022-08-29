import React, { useState } from "react";
import styled from "styled-components";
import { useWheel } from "react-use-gesture";
import Navigation from "../navigation";
import { useSection } from "../../context/sectionStore";
import useWidth from "../../hooks/useWidth";
const { Lethargy } = require("lethargy");

export default function ScrollBody({ children }: { children: JSX.Element }) {
  const width = useWidth();
  const { activeSection, setActiveSection, nextSection, setNextSection } =
    useSection();

  const nextSectionHnadler = () => {
    if (activeSection < 7) {
      setActiveSection(activeSection + 1);
    }
  };

  const prevSectionHandler = () => {
    if (activeSection > 1) {
      setActiveSection(activeSection - 1);
    }
  };

  console.log(activeSection, nextSection);

  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    if (width > 480) {
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
    }
  });

  const goToSection = (index: number) => {
    setActiveSection(index);
  };

  return (
    <Body {...bind()}>
      <Navigation goToSection={goToSection} />
      <Content className="content" section={activeSection}>
        {children}
      </Content>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 480px) {
    height: unset;
  }
`;

const Content = styled.div<{ section: number }>`
  width: 100%;
  height: 800vh;
  overflow: hidden;
  position: absolute;
  transform: translateY(-${({ section }) => ((section - 1) / 8) * 100}%);
  transition: 0.5s ease-out;
  @media (max-width: 480px) {
    position: static;
    height: unset;
  }
`;
