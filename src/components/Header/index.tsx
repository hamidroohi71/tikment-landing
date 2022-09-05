import React from "react";
import TopBar from "../TopBar";
import LogoBox from "../LogoBox";
import { useSection } from "../../context/sectionStore";
import styled from "styled-components";

export default function Header() {
  const { activeSection } = useSection();

  return (
    <HeaderSec show={activeSection < 6}>
      <LogoBox />
      <TopBar />
    </HeaderSec>
  );
}

const HeaderSec = styled.section<{ show: boolean }>`
  transform: ${({ show }) => (show ? "translateY(0%)" : "translateY(-300%)")};
  transition: 0.5s ease-out;
  z-index: 1000;
  position: absolute;
  top: 40px;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
