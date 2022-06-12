import React, { useEffect, useState } from "react";
import GEOFence from "./geoFence";
import Management from "./management";
import Report from "./report";
import Rules from "./rules";
import Transparency from "./transparency";
import Trip from "./trip";
import FreeTest from "./freeTest";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";

export default function AdvantagesList({
  show,
  index,
}: {
  show: boolean;
  index: number;
}) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });
  return (
    <Advantages style={sectionStyle}>
      <Transparency active={index === 1} />
      <GEOFence active={index === 2} />
      <Trip active={index === 3} />
      <Report active={index === 4} />
      <Management active={index === 5} />
      <Rules active={index === 6} />
      <FreeTest active={index === 7} />
    </Advantages>
  );
}

const Advantages = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 15;
  top: 0;
`;
