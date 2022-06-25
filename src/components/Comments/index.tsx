import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Comment from "./comment";
import data from "./commentsData.json";
import { useSection } from "../../context/sectionStore";

export default function Comments() {
  const { activeSection, nextSection, setActiveSection } = useSection();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setActiveSection(nextSection);
      }, 500);
    }
  }, [active, nextSection]);

  useEffect(() => {
    if (activeSection === 6) {
      setActive(true);
    } else if (activeSection !== null) {
      setActive(false);
    }
  }, [activeSection]);
  const commentList = data.comments.map((item, index) => (
    <Comment key={item.id} comment={item} index={index} />
  ));
  return (
    <CommentSection active={active}>
      <Title>نظرات مشتریان تیکمنت</Title>
      <div>{commentList}</div>
    </CommentSection>
  );
}

const CommentSection = styled.section<{ active: boolean }>`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: ${({ active }) =>
    active ? "translateY(0)" : "translateY(100vh)"};
  z-index: ${({ active }) => (active ? 20 : 0)};
  transition: 0.5s ease-out;
  padding: 13.6vh 17vw 7vh;

  @media (max-width: 480px) {
    display: none;
  }

  & > div {
    height: 65vh;
    overflow: hidden;
  }
`;

const Title = styled.h2`
  font-size: 4.6vw;
  color: #e67205;
  margin: 0;
  text-align: center;
`;
