import React from "react";
import styled from "styled-components";
import data from "./customerData.json";
import BubbleBack from "../../assets/image/bubbleBack.svg";

export default function CommentSlider({
  selectedIndex,
}: {
  selectedIndex: number;
}) {
  const comments = data.customerData;

  const namePart = comments.map((item, index) => (
    <Title selected={index === selectedIndex} key={item.comment.author}>
      <h3>{item.comment.author}</h3>
      <h2>
        {item.comment.position}
        <span />
      </h2>
    </Title>
  ));

  const commentPart = comments.map((item, index) => (
    <Comment selected={index === selectedIndex} key={item.comment.comment}>
      <h2>{item.comment.comment}</h2>
      <p>{item.comment.subComment}</p>
      <CommentBubble selected={index === selectedIndex}></CommentBubble>
    </Comment>
  ));

  const avatarPart = comments.map((item, index) => (
    <Avatar
      selected={index === selectedIndex}
      preSelected={index === selectedIndex - 1}
      key={item.comment.position}
    >
      <img src={item.comment.profilePic} alt={item.comment.author} />
    </Avatar>
  ));

  return (
    <CommentSliderElement>
      <BackgroundElement />
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
`;

const BackgroundElement = styled.div`
  width: 27vw;
  height: 27vw;
  position: absolute;
  top: 5vh;
  right: 5vw;
  background: linear-gradient(5deg, #ff808036 0%, #ffd01136 100%);
  box-shadow: inset 0px 0px 99px #80a5ac21;
  border: 2px solid #ffd01140;
  opacity: 0.5;
  backdrop-filter: blur(19px);
  border-radius: 50%;
`;

const ProfilePicture = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  overflow: hidden;
  margin-left: 5%;
`;

const CommentPart = styled.div`
  width: 55%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 0 56px 56px;
`;

const CommentTitle = styled.div`
  position: relative;
  height: 20%;
  margin-bottom: 15%;
`;

const CommentBox = styled.div`
  position: relative;
  height: 65%;
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
`;

const Title = styled.div<{ selected: boolean }>`
  position: absolute;
  & > h2 {
    font-size: 2vw;
    color: ${({ selected }) => (selected ? "#fff" : "transparent")};
    margin: 0;
    line-height: 3vw;
    position: relative;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};

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
      transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};
    }
  }

  & > h3 {
    font-size: 1.8vw;
    font-weight: 300;
    color: #04165d;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 0 0 5px;
    line-height: 3vw;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};
  }
`;

const Comment = styled.div<{ selected: boolean }>`
  position: absolute;
  & > h2 {
    font-size: 2vw;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 0 0 13px;
    color: #292929;
    position: relative;
    z-index: 5;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};

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
    font-size: 1.5vw;
    font-weight: 300;
    color: #666666;
    opacity: ${({ selected }) => (selected ? 1 : 0)};
    margin: 13px 0 0;
    z-index: 5;
    position: relative;
    transition: 1s ease-out;
    transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};
  }
`;

const CommentBubble = styled.div<{ selected: boolean }>`
  position: absolute;
  top: -47px;
  left: -83px;
  right: -83px;
  bottom: -47px;
  background: #ffffff;
  box-shadow: inset 0px -90px 99px #0000000a, 8px 8px 36px #a0bdc180;
  border: 1px solid #cbcbcb;
  transform: ${({ selected }) => (selected ? "scale(1)" : "scale(0)")};
  transform-origin: right;
  border-radius: 30px;
  transition: 1s ease-out;
  transition-delay: ${({ selected }) => (selected ? "1.1s" : "0s")};

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
`;
