import React from "react";
import styled from "styled-components";
import Background from "./background";
import Mobile from "./mobile";
import Title from "./title";

export default function PageIntro() {
  return (
    <PageIntroduction>
      <Background />
      <Mobile />
      <Title />
      {/* form */}
    </PageIntroduction>
  );
}

const PageIntroduction = styled.section`
  padding: 20vh 13vw 0;
  width: 100vw;
  height: 100vh;
`;
