import React from "react";
import GlassElement from "../Glass/glassElement";
import styled from "styled-components";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";

const patternInfo = [
  {
    width: "26vw",
    height: "5px",
    bgColor: "linear-gradient(to right, #FFAF3B 0%, #E07D14 100%)",
    top: "74vh",
    left: "-4vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "60vw",
    height: "8vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "5vh",
    left: "-23vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "4vw",
  },
  {
    width: "24vw",
    height: "5vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "82vh",
    left: "20vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "2.5vw",
  },
  {
    width: "26vw",
    height: "5px",
    bgColor:
      "linear-gradient(to right, rgba(255,175,59,1) 0%, rgba(224,125,20,1) 100%)",
    top: "66vh",
    left: "20vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "36vw",
    height: "1.8vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "35vh",
    left: "11vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "0.9vw",
  },
  {
    width: "83vw",
    height: "8.5vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(197,134,70,1) 100%)",
    top: "-16vw",
    left: "1.6vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "4.3vw",
  },
];

export default function GlassPattern({
  showComment,
}: {
  showComment: boolean;
}) {
  const { activeSection } = useSection();

  const glassStyle = useSpring({
    from: {
      transform: `rotate(45deg) translateX(-500%) translateY(-500%)`,
    },
    to: {
      transform:
        activeSection === 2 && showComment
          ? `rotate(45deg) translateX(0%) translateY(0%)`
          : `rotate(45deg) translateX(-500%) translateY(-500%)`,
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const glassElems = patternInfo.map((item, index) => (
    <GlassElement
      width={item.width}
      height={item.height}
      bgColor={item.bgColor}
      top={item.top}
      left={item.left}
      rotation={item.rotation}
      border={item.border}
      radius={item.radius}
      index={index}
      active={activeSection === 2}
      glassStyle={glassStyle}
    />
  ));
  return <GlassPatternElement>{glassElems}</GlassPatternElement>;
}

const GlassPatternElement = styled.div`
  position: absolute;
  width: 100vw;
  height: 150vh;
  overflow: hidden;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0.15;
  transform: translateY(-70vh);
  mix-blend-mode: multiply;
`;
