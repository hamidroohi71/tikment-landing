import React from "react";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";

const Dot = styled.div<{ selected: boolean }>`
  background-color: #37b3b8;
  width: 13px;
  height: 13px;
  transform: ${({ selected }) => (selected ? "scale(1.6)" : "scale(1)")};
  transform-origin: center;
  margin: 18px 0;
  border-radius: 50%;
  transition: 0.3s ease-out;
`;

function NavigationDot({ selected }: { selected: boolean }) {
  return <Dot selected={selected}></Dot>;
}

export default function Navigation() {
  const { activeSection } = useSection();
  const styleProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  const elements = [];

  for (let i = 0; i < 7; i++) {
    elements.push(<NavigationDot key={i} selected={i === activeSection - 1} />);
  }

  return <NavigationBar style={styleProps}>{elements}</NavigationBar>;
}

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
`;
