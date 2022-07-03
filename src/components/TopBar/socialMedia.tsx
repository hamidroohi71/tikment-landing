import React from "react";
import data from "./data.json";
import styled from "styled-components";

export default function SocailMedia() {
  const socails = data.socialMedai;
  const socialElements = socails.map((item) => (
    <a
      key={item.name}
      href={item.href}
      style={{ backgroundImage: `url(${item.icon})` }}
    />
  ));
  return <SocialMediaElement>{socialElements}</SocialMediaElement>;
}

const SocialMediaElement = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #7197b2;
  padding-right: 11px;
  height: 100%;

  & > a {
    display: inline-block;
    width: 41px;
    height: 41px;
    border-radius: 50%;
    margin: 0 11px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
