import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import Background from "./background";
import Mobile from "./mobile";
import StartForm from "./startForm";
import Title from "./title";

export default function PageIntro() {
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
    if (activeSection === 1) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);

  console.log(activeSection, nextSection, active);

  return (
    <PageIntroduction>
      <Background />
      <Mobile />
      <Title />
      <StartForm />
    </PageIntroduction>
  );
}

const PageIntroduction = styled.section`
  padding: 20vh 11vw 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
