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
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 7) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const nextPart = () => {
    console.log("next");
    if (part < 2) {
      setPart(part + 1);
    }
  };

  const prevPart = () => {
    console.log("prev");
    if (part > 0) {
      setPart(part - 1);
    } else {
      setNextSection(6);
      setActiveSection(null);
    }
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
      dis={dis - window.innerHeight}
      part={part}
      {...bind()}
      active={active}
    >
      <div ref={lengthRef}>
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </LastSection>
  );
}

const LastSection = styled.section<{
  active: boolean;
  part: number;
  dis: number;
}>`
  width: 100vw;
  height: 100vh;
  overflow: visible;
  position: absolute;
  transform: ${({ active, part, dis }) =>
    active
      ? part === 0
        ? "translateY(0)"
        : part === 1
        ? "translateY(-55%)"
        : `translateY(-${dis + 30}px)`
      : "translateY(100vh)"};
  z-index: ${({ active }) => (active ? 20 : 0)};
  transition: 0.5s ease-out;
  transition-delay: ${({ active }) => (active ? "0.5s" : "0s")};

  @media (max-width: 480px) {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: visible;
    height: unset;
    transform: none;
  }
`;
