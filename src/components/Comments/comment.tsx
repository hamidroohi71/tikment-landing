import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props {
  comment: any;
  index: number;
  commentIndex: number;
  setDistance: (number: number) => void;
}

export default function Comment(props: Props) {
  const { comment, index, commentIndex } = props;
  const [show, setShow] = useState(false);
  const elRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (commentIndex > index) {
      setShow(true);
    }
    if (elRef.current && commentIndex === index + 2) {
      props.setDistance(elRef.current.offsetTop);
    }
  }, [index, commentIndex, elRef.current]);

  return (
    <CommentElement ref={elRef}>
      <CommentTitle even={index % 2 === 0}>
        <Avatar show={show} orange={index % 2 === 0}>
          <img src={comment.photo} alt={comment.author} />
        </Avatar>
        <Position show={show}>
          {comment.author}
          <PositionBox even={index % 2 === 0} show={show} />
        </Position>
      </CommentTitle>
      <CommentText show={show} even={index % 2 === 0}>
        {comment.comment}
        <CommentBox show={show} even={index % 2 === 0} />
      </CommentText>
    </CommentElement>
  );
}

const CommentElement = styled.section`
  position: relative;
  width: 68vw;
  padding: 0 80px;
`;

const CommentTitle = styled.section<{ even: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: ${({ even }) => (even ? "row" : "row-reverse")};
`;

const Avatar = styled.div<{ orange: boolean; show: boolean }>`
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background: ${({ orange }) =>
    orange
      ? "linear-gradient(180deg, #ff8080 0%, #ffd011 100%)"
      : "linear-gradient(180deg, #37abb8 0%, #71fbff 100%)"};
  box-shadow: 0px 7px 15px #00000033;
  display: flex;
  z-index: 5;
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0)")};
  transform-origin: center;
  transition: 1s 0.5s ease-out;

  & > img {
    width: 6.7vw;
    height: 6.7vw;
    margin: auto;
    border-radius: 50%;
  }
`;

const Position = styled.p<{ show: boolean }>`
  font-size: 1.2vw;
  color: #e67205;
  font-weight: 100;
  position: relative;
  line-height: 53px;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? "transformY(0%)" : "transformY(100%)")};
  transform-origin: center;
  transition: 1s 0.5s ease-out;
`;

const PositionBox = styled.span<{ show: boolean; even: boolean }>`
  position: absolute;
  top: 0;
  left: -40px;
  right: -30px;
  bottom: 0;
  border: 1px solid #e67205;
  border-radius: 27px;
  transform: ${({ show }) => (show ? "scale(1)" : "scale(0)")};
  transform-origin: ${({ even }) => (even ? "right" : "left")};
  transition: 1s 0.5s ease-out;
`;

const CommentText = styled.p<{ even: boolean; show: boolean }>`
  font-size: 1.4vw;
  color: #666666;
  font-weight: 300;
  position: relative;
  margin: 40px 127px 70px 0;
  margin: ${({ even }) => (even ? "40px 127px 70px 0" : "40px 0 70px 127px")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 1s 1.5s ease-out;

  & > b {
    color: #e67205;
    font-weight: 500;
  }
`;

const CommentBox = styled.span<{ even: boolean; show: boolean }>`
  position: absolute;
  top: -52px;
  right: -85px;
  bottom: -45px;
  left: -70px;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e4e4e4;
  border-radius: ${({ even }) =>
    even ? "64px 0 64px 64px" : "0 64px 64px 64px"};
  z-index: -1;
  transform: ${({ show }) => (show ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: 1s 1s ease-out;
`;
