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
    <CommentSection>
      <Title>نظرات مشتریان</Title>
      <div>{commentList}</div>
    </CommentSection>
  );
}

const CommentSection = styled.section`
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transform: translateY(100vh);
`;

const Title = styled.h2`
  font-size: 90px;
  color: #e67205;
  margin: 0;
  text-align: center;
`;
