import React from "react";
import styled from "styled-components";

export default function Menu() {
  return (
    <MenuElement>
      <MenuLink href="/mag">مجله تیکمگ</MenuLink>
    </MenuElement>
  );
}

const MenuElement = styled.section`
  padding-right: 17px;
  margin-left: auto;
`;

const MenuLink = styled.a`
  text-align: center;
  font-szie: 35px;
  color: #f5f5f5;
`;
