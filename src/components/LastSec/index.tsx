import React, { useState, useEffect, useRef, HtmlHTMLAttributes } from "react";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";
import { useWheel } from "react-use-gesture";
import useWidth from "../../hooks/useWidth";
const { Lethargy } = require("lethargy");

export default function LastSec() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [part, setPart] = useState(0);
  const [dis, setDis] = useState(0);

  useEffect(() => {
    if (activeSection === 6) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const nextPart = () => {
    setNextSection(7);
    setActiveSection(null);
  };

  const prevPart = () => {
    setNextSection(5);
    setActiveSection(null);
  };

  const width = useWidth();
  const lethargy = new Lethargy();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s < 0) {
              nextPart();
            } else if (s > 0) {
              prevPart();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  const lengthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (lengthRef.current) {
      setDis(lengthRef.current.offsetHeight);
    }
  }, [lengthRef.current]);

  return (
    <LastSection
      status={nextSection === 6 ? "show" : nextSection < 6 ? "before" : "after"}
      dis={dis - window.innerHeight}
      part={part}
      active={active}
    >
      <div ref={lengthRef} className="last">
        <Contact />
        {/* <Footer /> */}
      </div>
    </LastSection>
  );
}

const LastSection = styled.section<{
  active: boolean;
  part: number;
  dis: number;
  status: string;
}>`
  width: 100vw;
  height: 100vh;
  overflow: visible;
  position: relative;
  top: 0;
  z-index: ${({ active }) => (active ? 20 : 0)};
  transition: 0.8s ease-out;

  @media (max-width: 480px) {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: visible;
    height: unset;
    transform: none;

    .last {
      display: flex;
      flex-direction: column;
    }
  }
`;
