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
    top: "94vh",
    left: "26vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "60vw",
    height: "8vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "25vh",
    left: "7vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "4vw",
  },
  {
    width: "24vw",
    height: "5vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "102vh",
    left: "50vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "2.5vw",
  },
  {
    width: "26vw",
    height: "5px",
    bgColor:
      "linear-gradient(to right, rgba(255,175,59,1) 0%, rgba(224,125,20,1) 100%)",
    top: "86vh",
    left: "50vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "25vw",
    height: "25px",
    bgColor:
      "linear-gradient(to right, rgba(255,175,59,1) 0%, rgba(224,125,20,1) 100%)",
    top: "47vh",
    left: "31.6vw",
    rotation: 45,
    border: "none",
    radius: "12.5px",
  },
  {
    width: "36vw",
    height: "1.8vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "75vh",
    left: "41vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "0.9vw",
  },
  {
    width: "35vw",
    height: "5vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(74,243,248,1) 100%)",
    top: "21vh",
    left: "26vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "2.5vw",
  },
  {
    width: "83vw",
    height: "8.5vw",
    bgColor:
      "linear-gradient(to right, rgba(117,201,219,0.6) 0%, rgba(197,134,70,1) 100%)",
    top: "4vh",
    left: "31.6vw",
    rotation: 45,
    border: "1px solid rgba(117,201,219,0.69)",
    radius: "4.3vw",
  },
  {
    width: "26vw",
    height: "5px",
    bgColor: "linear-gradient(to right, #FFAF3B 0%, #E07D14 100%)",
    top: "48vh",
    left: "57vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "26vw",
    height: "5px",
    bgColor: "linear-gradient(to right, #FFAF3B 0%, #E07D14 100%)",
    top: "20vh",
    left: "50vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
  {
    width: "10.5vw",
    height: "5px",
    bgColor: "linear-gradient(to right, #FFAF3B 0%, #E07D14 100%)",
    top: "47vh",
    left: "86vw",
    rotation: 45,
    border: "none",
    radius: "2.5px",
  },
];

export default function GlassPattern({
  productIndex,
}: {
  productIndex: number;
}) {
  const { activeSection } = useSection();

  const glassStyleEven = useSpring({
    from: {
      transform: `rotate(45deg) translateX(500%) translateY(500%)`,
    },
    to: {
      transform:
        activeSection === 3
          ? `rotate(45deg) translateX(0%) translateY(0%)`
          : `rotate(45deg) translateX(500%) translateY(500%)`,
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const glassStyleOdd = useSpring({
    from: {
      transform: `rotate(45deg) translateX(-500%) translateY(-500%)`,
    },
    to: {
      transform:
        activeSection === 3
          ? `rotate(45deg) translateX(0%) translateY(0%)`
          : `rotate(45deg) translateX(-500%) translateY(-500%)`,
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const PatternStyle = useSpring({
    from: { transform: "scale(0.5) rotateX(0) rotateY(0)" },
    to: {
      transform:
        productIndex === 1
          ? "scale(0.7) rotateX(56deg) rotateY(30deg)"
          : productIndex === 2
          ? "scale(0.7) rotateX(56deg) rotateY(0deg)"
          : productIndex === 3
          ? "scale(0.7) rotateX(33deg) rotateY(22deg)"
          : "scale(0.7) rotateX(0deg) rotateY(0deg)",
    },
    config: { duration: 500, easing: easings.easeOutQuart },
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
      active={activeSection === 3}
      glassStyle={index % 2 === 0 ? glassStyleEven : glassStyleOdd}
    />
  ));
  return (
    <GlassPatternElement show={productIndex !== 0} style={PatternStyle}>
      {glassElems}
    </GlassPatternElement>
  );
}

const GlassPatternElement = styled(animated.div)<{ show: boolean }>`
  position: absolute;
  width: 100vw;
  height: 150vh;
  overflow: hidden;
  top: -20vh;
  left: 0vw;
  z-index: 0;
  opacity: ${({ show }) => (show ? 0.15 : 0)};
  transform-origin: center;
`;
