import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import TickVideo from "../../../assets/video/Tick02.webm";

export default function TickIconVideo({
  styleProps,
  play,
}: {
  styleProps: any;
  play: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (play) {
      setTimeout(() => {
        videoRef.current?.play();
      }, 1000);
    }
  }, [play]);
  return (
    <Tick
      ref={videoRef}
      src={TickVideo}
      style={styleProps}
      loop={false}
      muted
    />
  );
}

const Tick = styled(animated.video)`
  position: absolute;
  width: 6.3vw;
  height: 6.3vw;
  object-fit: contain;
  top: 3vw;
  right: -8vw;

  @media (max-width: 480px) {
    right: 0;
    left: 0;
    margin: auto;
    top: -20px;
  }
`;
