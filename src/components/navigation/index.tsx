import React from "react";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";

const Dot = styled.div<{ selected: boolean }>`
  background-color: #9e9e9e;
  width: 13px;
  height: 13px;
  // transform: ${({ selected }) => (selected ? "scale(1.2)" : "scale(1)")};
  transform-origin: center;
  margin: 4px 0;
  border-radius: 50%;
  transition: 0.3s ease-out;
  cursor: pointer;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};
  &:hover {
    opacity: 1;
  }
`;

function NavigationDot({
  selected,
  index,
  goToSection,
}: {
  selected: boolean;
  index: number;
  goToSection: (index: number) => void;
}) {
  return (
    <Dot
      onClick={() => {
        goToSection(index + 1);
      }}
      selected={selected}
    ></Dot>
  );
}

export default function Navigation({
  goToSection,
}: {
  goToSection: (index: number) => void;
}) {
  const { activeSection } = useSection();
  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const elements = [];

  for (let i = 0; i < 6; i++) {
    elements.push(
      <NavigationDot
        goToSection={goToSection}
        index={i}
        key={i}
        selected={i === activeSection - 1}
      />
    );
  }
  return (
    <NavigationBar style={styleProps}>
      {elements}
      <Progress active={activeSection < 7 ? activeSection : 6} />
    </NavigationBar>
  );
}

const Progress = styled.div<{ active: number }>`
  position: absolute;
  top: 4px;
  bottom: ${({ active }) => `${(6 - active) * 21 + 4}px`};
  width: 13px;
  background: #9e9e9e;
  border-radius: 6.5px;
  transition: 0.5s ease-out;
`;

const NavigationBar = styled(animated.section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  height: fit-content;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 3vw;
  margin: auto;

  @media (max-width: 480px) {
    display: none;
  }
`;
