import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import Background from "./background";
import GlassPattern from "./glassPattern";
import Mobile from "./mobile";
import StartForm from "./startForm";
import Title from "./title";

export default function PageIntro() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 1) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  const handleFormOpen = (status: boolean) => {
    setFormOpen(status);
  };

  return (
    <PageIntroduction active={active}>
      <GlassPattern />
      <Background />
      <Mobile />
      <Title formOpen={formOpen} />
      <StartForm handleFormOpen={handleFormOpen} />
    </PageIntroduction>
  );
}

const PageIntroduction = styled.section<{ active: boolean }>`
  padding: 20vh 11vw 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 1200px) {
    padding: 19vh 8vw 0;
  }

  @media (max-width: 480px) {
    padding: 121px 40px;
    position: static;
    z-index: 20;
    height: unset;
  }
`;
