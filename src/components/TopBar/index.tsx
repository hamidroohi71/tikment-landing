import React from "react";
import ContactUs from "./contactUs";
import Menu from "./menu";
import Search from "./search";
import SocailMedia from "./socialMedia";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";
import useWidth from "../../hooks/useWidth";

export default function TopBar() {
  const { activeSection } = useSection();
  const width = useWidth();
  const styleProps = useSpring({
    from: {
      transform:
        activeSection !== 1
          ? "translateX(0%)"
          : width < 480
          ? "translateX(0%)"
          : "translateX(-100%)",
    },
    to: {
      transform:
        activeSection === 1
          ? "translateX(0%)"
          : width < 480
          ? "translateX(0%)"
          : "translateX(-85%)",
    },
    delay: activeSection === 1 ? 500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });
  return (
    <TopBarElement style={styleProps}>
      <ContactUs />
      <Menu />
      <Search />
      <SocailMedia />
    </TopBarElement>
  );
}

const TopBarElement = styled(animated.section)`
  z-index: 30;
  display: flex;
  background: linear-gradient(to right, #0089a7, #04165d);
  border-radius: 0 34px 34px 0;
  align-items: center;
  width: 78vw;
  position: absolute;
  top: 41px;
  left: 0;
  height: 68px;
  box-shadow: 0px 10px 14px #033f7733;

  @media (max-width: 480px) {
    top: 29px;
    width: 76vw;
    height: 51px;
    border-radius: 0 26px 26px 0;
  }
`;
