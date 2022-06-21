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
  font-size: 1.4vw;
  color: #f5f5f5;

  @media (max-width: 480px) {
    font-size: 24px;
    font-weight: 100;
  }
`;
