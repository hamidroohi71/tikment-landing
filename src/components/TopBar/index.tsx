import React from "react";
import ContactUs from "./contactUs";
import Menu from "./menu";
import Search from "./search";
import SocailMedia from "./socialMedia";
import styled from "styled-components";

export default function TopBar() {
  return (
    <TopBarElement>
      <ContactUs />
      <Menu />
      <Search />
      <SocailMedia />
    </TopBarElement>
  );
}

const TopBarElement = styled.section`
  display: flex;
  background: linear-gradient(to right, #0089a7, #04165d);
  border-radius: 0 34px 34px 0;
  align-items: center;
`;
