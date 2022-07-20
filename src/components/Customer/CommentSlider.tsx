import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import data from "./customerData.json";
import TickVideo from "../../assets/video/Tick01.webm";

export default function CommentSlider({
  selectedIndex,
}: {
  selectedIndex: number;
}) {
  const comments = data.customerData;

  const namePart = comments.map((item, index) => {
    return (
      <Title selected={index === selectedIndex} key={item.comment.author}>
        <h3>{item.comment.author}</h3>
        <h2>
          {item.comment.position}
          <span />
        </h2>
        <TickMotion
          id={"tickVideo" + index}
          src={TickVideo}
          loop={false}
          muted
          selected={index === selectedIndex}
        ></TickMotion>
      </Title>
    );
  });

  useEffect(() => {
    const video = document.getElementById(
      "tickVideo" + selectedIndex
    ) as HTMLVideoElement;
    // console.log("tickVideo" + selectedIndex);
    setTimeout(() => {
      video.play();
    }, 700);
  }, [selectedIndex]);

  const commentPart = comments.map((item, index) => (
    <Comment
      selected={index === selectedIndex}
      key={item.comment.comment + index}
    >
      <h2>{item.comment.comment}</h2>
      <p>{item.comment.subComment}</p>
      <CommentBubble selected={index === selectedIndex}></CommentBubble>
    </Comment>
  ));

  const avatarPart = comments.map((item, index) => (
    <Avatar
      selected={index === selectedIndex}
      preSelected={
        selectedIndex === 0 ? index === 5 : index === selectedIndex - 1
      }
      key={item.comment.position + index}
    >
      <img src={item.comment.profilePic} alt={item.comment.author} />
    </Avatar>
  ));

  return (
    <CommentSliderElement>
      <ProfilePicture>{avatarPart}</ProfilePicture>
      <CommentPart>
        <CommentTitle className="TitlePart">{namePart}</CommentTitle>
        <CommentBox className="CommentBox">{commentPart}</CommentBox>
      </CommentPart>
    </CommentSliderElement>
  );
}

const CommentSliderElement = styled.section`
  display: flex;
  align-items: center;
  height: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    position: relative;
  }
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  overflow: hidden;
  margin-left: 5%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CommentPart = styled.div`
  width: 55%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 56px 56px;
  @media (max-width: 480px) {
    width: 100%;
    padding: 2vw;
    text-align: center;
    height: fit-content;
  }
`;

const CommentTitle = styled.div`
  position: relative;
  height: 20%;
  margin-bottom: 10%;
`;

const CommentBox = styled.div`
  position: relative;
  height: 65%;
  z-index: 5;
  @media (max-width: 480px) {
    position: static;
  }
`;

const Avatar = styled.div<{ selected: boolean; preSelected: boolean }>`
  position: absolute;
  left: 0;
  top: 56px;
  bottom: 0;
  margin: auto;
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  transform: ${({ selected, preSelected }) =>
    selected
      ? " translateX(200%)"
      : preSelected
      ? "translateX(320%)"
      : " translateX(-100%)"};

  transform-origin: left;
  transition: 1s ease-out;
  transition-delay: 0s;
  filter: ${({ selected }) => (selected ? " blur(0px)" : " blur(4px)")};

  & > img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: ${({ selected, preSelected }) =>
      selected ? "scale(3.12) " : preSelected ? "scale(1) " : "scale(1)"};
    transform-origin: right;
    transition: 1s ease-out;
    transition-delay: 0s;
  }

  @media (max-width: 480px) {
    width: 33px;
    height: 33px;
    right: 0;
    left: 0;
    margin: auto;
    top: 50%;
    transform: ${({ selected, preSelected }) =>
      selected
        ? " translateX(0)"
        : preSelected
        ? "translateX(400%)"
        : " translateX(-400%)"};
    filter: none;

    & > img {
      overflow: hidden;
      transform: ${({ selected, preSelected }) =>
        selected ? "scale(8) " : "scale(1)"};
      transform-origin: center;
    }
  }
`;

const TickMotion = styled.video<{ selected: boolean }>`
  width: 4.6vw;
  height: 4.6vw;
  position: absolute;
  right: -148px;
  bottom: -11px;
  object-fit: contain;
  opacity: ${({ selected }) => (selected ? 1 : 0)};
  transition-delay: ${({ selected }) => (selected ? "0.7s" : "0s")}; ;
`;

const Title = styled.div<{ selected: boolean }>`
  position: absolute;
  margin: 0 5vw 0 0;
  & > h2 {
    font-size: 1.6vw;
    color: ${({ selected }) => (selected ? "#fff" : "transparent")};
    margin: 0;
    line-height: 3vw;
    position: relative;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};

    & > span {
      position: absolute;
      right: -60px;
      left: -60px;
      top: -4px;
      bottom: 0;
      background: linear-gradient(259deg, #37abb8 0%, #71fbff 100%);
      border-radius: 1.6vw;
      transform: ${({ selected }) => (selected ? "scaleX(1)" : "scaleX(0)")};
      transform-origin: right;
      z-index: -1;
      transition: 1s ease-out;
      transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};
    }
  }

  & > h3 {
    font-size: 1.4vw;
    font-weight: 300;
    color: #04165d;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 0 0 5px;
    line-height: 3vw;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};
  }

  @media (max-width: 480px) {
    width: 100%;
    & > h2 {
      font-size: 17px;
      line-height: 35px;
      letter-spacing: -1px;
      text-align: center;

      & > span {
        right: -1vw;
        left: -1vw;
        top: -4px;
        bottom: 0;
        text-align: center;
        border-radius: 18px;
      }
    }

    & > h3 {
      font-size: 17px;
      line-height: 35px;
    }
  }
`;

const Comment = styled.div<{ selected: boolean }>`
  position: absolute;
  & > h2 {
    font-size: 1.6vw;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 0 0 13px;
    color: #292929;
    position: relative;
    z-index: 5;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};

    &::after {
      content: "";
      display: inline-block;
      width: 100%;
      height: 1px;
      bottom: -13px;
      background-color: #292929;
    }
  }

  & > p {
    font-size: 1.2vw;
    font-weight: 300;
    color: #666666;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 13px 0 0;
    z-index: 5;
    position: relative;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};
  }

  @media (max-width: 480px) {
    top: 100px;
    padding: 25px;
    box-sizing: border-box;
    & > h2 {
      font-size: 20px;
      color: #183573;
      font-weight: 500;

      &::after {
        display: none;
      }
    }

    & > p {
      display: none;
    }
  }
`;

const CommentBubble = styled.div<{ selected: boolean }>`
  position: absolute;
  top: -4vh;
  left: -4vw;
  right: -4vw;
  bottom: -4vh;
  background: #ffffff;
  box-shadow: inset 0px -90px 99px #0000000a, 8px 8px 36px #a0bdc180;
  border: 1px solid #cbcbcb;
  transform: ${({ selected }) => (selected ? "scale(1)" : "scale(0)")};
  transform-origin: right;
  border-radius: 30px;
  transition: 1s ease-out;
  transition-delay: ${({ selected }) => (selected ? "2s" : "0s")};

  &::after,
  &::before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    transform: rotate(45deg);
    border: 1px solid #cbcbcb;
    position: absolute;
    top: 30%;
    right: -21px;
    background-color: #fff;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 40px;
    height: 40px;
    border: none;
    position: absolute;
    transform: scale(1.5);
    transform-origin: right;
    top: 30%;
    right: 0;
    background-color: #fff;
    z-index: 5;
  }

  @media (max-width: 480px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 8px 8px 36px #a0bdc180;

    &::after,
    &::before {
      width: 40px;
      height: 40px;
      transform: rotate(45deg);
      position: absolute;
      top: unset;
      bottom: -20px;
      right: 0;
      left: 0;
      margin: auto;
      background-color: #fff;
    }

    &::before {
      content: "";
      display: inline-block;
      width: 40px;
      height: 40px;
      border: none;
      position: absolute;
      transform: scale(1.5);
      transform-origin: center;
      bottom: 10px;
      right: 0;
      left: 0;
      margin: auto;
      background-color: #fff;
      z-index: 5;
    }
  }
`;
