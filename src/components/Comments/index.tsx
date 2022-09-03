import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./comment";
import data from "./commentsData.json";
import { useSection } from "../../context/sectionStore";
import { useWheel } from "react-use-gesture";
import useWidth from "../../hooks/useWidth";
const { Lethargy } = require("lethargy");

let myTimeOut: any;

export default function Comments() {
  const { activeSection, nextSection, setActiveSection, setNextSection } =
    useSection();
  const [active, setActive] = useState(false);
  const [commentIndex, setCommentIndex] = useState(0);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 6) {
      setCommentIndex(0);
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
      setCommentIndex(0);
    }
  }, [activeSection]);

  useEffect(() => {
    if (commentIndex < 4 && active) {
      clearTimeout(myTimeOut);
      myTimeOut = setTimeout(() => {
        setCommentIndex((index) => index + 1);
      }, 5000);
    }
  }, [commentIndex, active]);
  const commentList = data.comments.map((item, index) => (
    <Comment
      commentIndex={commentIndex}
      key={item.id}
      comment={item}
      index={index}
      setDistance={setDistance}
    />
  ));

  const lethargy = new Lethargy();

  const nextCommentHandler = () => {
    if (commentIndex < data.comments.length) {
      setCommentIndex(commentIndex + 1);
    } else {
      setNextSection(7);
      setActiveSection(null);
    }
  };

  const prevCommentHandler = () => {
    if (commentIndex > 0) {
      setCommentIndex(commentIndex - 1);
    } else {
      setNextSection(5);
      setActiveSection(null);
    }
  };

  const width = useWidth();

  const bind = useWheel(({ event, last, memo: wait = false }) => {
    event.stopPropagation();
    if (width > 480) {
      if (!last) {
        const s = lethargy.check(event);
        if (s) {
          if (!wait) {
            if (s < 0) {
              nextCommentHandler();
            } else if (s > 0) {
              prevCommentHandler();
            }
            return true;
          }
        } else return false;
      } else {
        return false;
      }
    }
  });

  return (
    <CommentSection
      active={active}
      status={nextSection === 6 ? "show" : nextSection < 6 ? "before" : "after"}
    >
      <Title>نظرات مشتریان تیکمنت</Title>
      <CommentsContainer dis={distance} commentIndex={commentIndex}>
        <div>{commentList}</div>
      </CommentsContainer>
    </CommentSection>
  );
}

const CommentSection = styled.section<{ active: boolean; status: string }>`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: ${({ status }) =>
    status === "show"
      ? "translateY(0vh)"
      : status === "before"
      ? "translateY(100vh)"
      : "translateY(-100vh)"};
  transition: 0.5s ease-in;
  z-index: ${({ active }) => (active ? 20 : 0)};
  padding: 13.6vh 17vw 7vh;

  @media (max-width: 480px) {
    display: none;
  }
`;

const CommentsContainer = styled.div<{ dis: number; commentIndex: number }>`
  height: 65vh;
  overflow: hidden;
  position: relative;
  & > div {
    transition: 0.5s ease-out;
    transform: translateY(-${({ dis }) => dis}px);
  }
  &::before {
    opacity: ${({ commentIndex }) => (commentIndex > 1 ? 1 : 0)};
    transition: 0.5s ease-out;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 10vh;
    background: linear-gradient(to bottom, #fff 0%, transparent 100%);
    z-index: 5;
  }
`;

const Title = styled.h2`
  font-size: 3.6vw;
  color: #e67205;
  margin: 0;
  text-align: center;
  margin-top: 0;
`;
