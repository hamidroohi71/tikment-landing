import React from "react";
import styled from "styled-components";
import Video from "./IntroVideo.mp4";

export default function InitialVideo() {
  return (
    <VideoSections>
      <video src={Video} autoPlay={true} muted={true} width="100%" />
    </VideoSections>
  );
}

const VideoSections = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
`;
