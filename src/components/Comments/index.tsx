import React from "react";
import styled from "styled-components";
import Comment from "./comment";
import data from "./commentsData.json";

export default function Comments() {
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
`;

const Title = styled.h2`
  font-size: 90px;
  color: #e67205;
  margin: 0;
  text-align: center;
`;
