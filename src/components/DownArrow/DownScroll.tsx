import React, { useState } from "react";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import Arrow from "../../assets/icons/downArrow.svg";

export default function DownScroll() {
  const { activeSection, setActiveSection } = useSection();
  return (
    <ScrollSection>
      <Button
        down={activeSection === 1}
        onClick={() => {
          activeSection === 1 ? setActiveSection(6) : setActiveSection(1);
        }}
      >
        <span />
      </Button>
    </ScrollSection>
  );
}

const ScrollSection = styled.section`
  position: fixed;
  right: 3vw;
  bottom: 3vw;
  z-index: 100;
  cursor: pointer;
`;

const Button = styled.div<{ down: boolean }>`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  border: 2px solid #183573;
  display: flex;

  span {
    background: url(${Arrow}) center/ contain no-repeat;
    width: 2.5vw;
    height: 2vw;
    display: inline-block;
    margin: 40% auto auto;
    margin: ${({ down }) => (down ? "40% auto auto)" : "auto auto 40%")};
    transform: ${({ down }) => (down ? "scaleY(1)" : "scaleY(-1)")};
    transition: 0.25s ease-out;
  }
`;
