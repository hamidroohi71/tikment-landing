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
  const commentList = data.comments.map((item) => (
    <Comment key={item.id} comment={item} />
  ));
  return (
    <CommentSection active={active}>
      <Title>نظرات مشتریان</Title>
      <div>{commentList}</div>
    </CommentSection>
  );
}

const CommentSection = styled.section<{ active: boolean }>`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: translateY(100vh);
  z-index: ${({ active }) => (active ? 20 : 0)};

  @media (max-width: 480px) {
    position: static;
    height: unset;
    z-index: 20;
  }
`;

const Title = styled.h2`
  font-size: 90px;
  color: #e67205;
  margin: 0;
  text-align: center;
`;
