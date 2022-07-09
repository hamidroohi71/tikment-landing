import React from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";

export default function GlassElement({
  width,
  height,
  bgColor,
  top,
  left,
  rotation,
  border,
  radius,
  index,
  active,
}: any) {
  const glassStyle = useSpring({
    from: {
      transform:
        index % 2 === 0
          ? `rotate(${rotation}deg) translateX(500%) translateY(500%)`
          : `rotate(${rotation}deg) translateX(-500%) translateY(-500%)`,
    },
    to: {
      transform: active
        ? `rotate(${rotation}deg) translateX(0%) translateY(0%)`
        : index % 2 === 0
        ? `rotate(${rotation}deg) translateX(500%) translateY(500%)`
        : `rotate(${rotation}deg) translateX(-500%) translateY(-500%)`,
    },
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const opacityStyle = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: active ? 1 : 0,
    },
    delay: active ? 0 : 1000,
    config: { duration: active ? 0 : 1000, easing: easings.easeOutQuart },
  });
  return (
    <Glass
      style={{ ...glassStyle, ...opacityStyle }}
      width={width}
      height={height}
      bgColor={bgColor}
      top={top}
      left={left}
      rotation={rotation}
      border={border}
      radius={radius}
    ></Glass>
  );
}

const Glass = styled(animated.div)<{
  width: string;
  height: string;
  bgColor: string;
  top: string;
  left: string;
  rotation: number;
  border: string;
  radius: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ bgColor }) => bgColor};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  border: ${({ border }) => border};
  //   transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  position: absolute;
  border-radius: ${({ radius }) => radius};
  transform-origin: left;
`;
