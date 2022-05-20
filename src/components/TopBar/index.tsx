import React from "react";
import ContactUs from "./contactUs";
import Menu from "./menu";
import Search from "./search";
import SocailMedia from "./socialMedia";
import styled from "styled-components";
import { animated, useSpring, easings } from "react-spring";

export default function TopBar() {
  const styleProps = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
    delay: 500,
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
  z-index: 10;
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
`;
