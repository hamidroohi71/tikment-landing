import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";
// import Video1 from "./IntroVideo01.mp4";
// import Video2 from "./IntroVideo02.mp4";
import Video1 from "./IntroVideo03.mp4";
import Video2 from "./IntroVideo04.mp4";
import LoadingGif from "./loadIcon.webm";
import arrow from "./arrow-right.png";

export default function InitialVideo({
  handleLoaded,
}: {
  handleLoaded: () => void;
}) {
  const [playIndex, setPlayIndex] = useState(0);
  const [nextVideo, setNextVideo] = useState(1);
  const [loadList, setLoadList] = useState<[number]>([0]);
  const [domLoaded, setDomLoaded] = useState(false);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);
  const width = useWidth();

  useEffect(() => {
    if (width > 480) {
      if (loadList.includes(nextVideo)) {
        setPlayIndex(nextVideo);
      }
    }
  }, [nextVideo, loadList.length]);

  useEffect(() => {
    window.addEventListener("load", () => {
      setDomLoaded(true);
    });
  }, []);

  const onLoad = (index: number) => {
    const newList = loadList;
    newList.push(index);
    setLoadList([...newList]);
  };

  useEffect(() => {
    switch (playIndex) {
      case 1:
        videoRef1.current?.play();
        break;
      case 2:
        videoRef2.current?.play();
        break;
      case 3:
        videoRef3.current?.play();
        break;
      case 4:
        videoRef4.current?.play();
        break;
    }
  }, [playIndex]);

  // console.log("load index: ", loadList);
  // console.log("play index: ", playIndex);
  // console.log("next video: ", nextVideo);

  // console.log(loadList.includes(2));

  // console.log("domLoaded", domLoaded);

  return (
    <VideoSections>
      {/* <video src={Video} autoPlay={false} muted={true} width="100%" /> */}
      {width > 480 ? (
        <LoadingVideo
          show={playIndex === 0}
          src={LoadingGif}
          autoPlay={true}
          muted={true}
          width="100%"
          loop={true}
        />
      ) : (
        <LoadingVideo
          show={playIndex === 0}
          src={LoadingGif}
          autoPlay={true}
          muted={true}
          width="100%"
          loop={!domLoaded}
          onEnded={() => {
            handleLoaded();
          }}
        />
      )}

      <Video
        ref={videoRef1}
        show={playIndex === 1}
        src={Video1}
        autoPlay={playIndex === 1}
        muted={true}
        width="100%"
        loop={!loadList.includes(2)}
        onCanPlayThrough={() => {
          onLoad(1);
        }}
        onEnded={() => {
          // console.log("end");
          setNextVideo(2);
        }}
      />
      <Video
        ref={videoRef2}
        show={playIndex === 2}
        src={Video2}
        autoPlay={playIndex === 2}
        muted={true}
        width="100%"
        loop={!loadList.includes(3)}
        onCanPlayThrough={() => {
          onLoad(2);
        }}
        onEnded={() => {
          handleLoaded();
        }}
      />

      <SkipVideo onClick={() => handleLoaded()}>
        <p>بگذرید</p>
        <span></span>
      </SkipVideo>
    </VideoSections>
  );
}

const VideoSections = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 100;
  background: #fff;
  @media (max-width: 480px) {
    background: #fff;
  }
`;

const Video = styled.video<{ show: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: ${({ show }) => (show ? 10 : -1)};
  opacity: ${({ show }) => (show ? 1 : 0)};

  @media (max-width: 480px) {
    display: none;
  }
`;

const LoadingVideo = styled(Video)`
  width: 50%;
  height: 50%;
  object-fit: contain;
  margin: auto;

  @media (max-width: 480px) {
    display: block;
  }
`;

const SkipVideo = styled.div`
  backdrop-filter: blur(19px);
  position: absolute;
  bottom: 9vh;
  right: 7vw;
  padding: 1vw 2vw;
  z-index: 10;
  border: 2px solid #ffffff;
  border-radius: 3vw;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  cursor: pointer;

  & > p {
    font-size: 2vw;
    color: #380005;
    font-weight: light;
    margin: 0;
  }
  span {
    background-image: url(${arrow});
    background-size: cover;
    background-repeat: no-reapet;
    width: 13px;
    height: 27px;
  }
`;
