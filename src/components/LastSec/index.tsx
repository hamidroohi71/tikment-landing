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

  const [timeOption, setTimeOption] = useState(0);

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
  overflow: scroll;
  position: absolute;
  transform: ${({ active }) =>
    active ? "translateY(0)" : "translateY(100vh)"};
  z-index: ${({ active }) => (active ? 20 : 0)};
  transition: 0.5s ease-out;
  transition-delay: ${({ active }) => (active ? "0.5s" : "0s")};
`;
