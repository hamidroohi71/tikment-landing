import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import Contact from "./Contact/Contact";
import FAQ from "./FAQ";
import Footer from "./Footer";

export default function LastSec() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);

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

  return (
    <LastSection
      onWheel={(e) => {
        e.stopPropagation();
      }}
      active={active}
    >
      <Contact />
      <FAQ />
      <Footer />
    </LastSection>
  );
}

const LastSection = styled.section<{ active: boolean }>`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  position: absolute;
  transform: ${({ active }) =>
    active ? "translateY(0)" : "translateY(100vh)"};
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
