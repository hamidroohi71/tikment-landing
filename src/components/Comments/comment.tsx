import React from "react";
import styled from "styled-components";

interface Props {
  comment: any;
  index: number;
}

export default function Comment(props: Props) {
  const { comment, index } = props;

  return (
    <CommentElement>
      <CommentTitle even={index % 2 === 0}>
        <Avatar orange={index % 2 === 0}>
          <img src={comment.photo} alt={comment.author} />
        </Avatar>
        <Position>
          {comment.author}
          <PositionBox />
        </Position>
      </CommentTitle>
      <CommentText even={index % 2 === 0}>
        {comment.comment}
        <CommentBox even={index % 2 === 0} />
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

const Avatar = styled.div<{ orange: boolean }>`
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

  & > img {
    width: 6.7vw;
    height: 6.7vw;
    margin: auto;
    border-radius: 50%;
  }
`;

const Position = styled.p`
  font-size: 1.6vw;
  color: #e67205;
  font-weight: 100;
  position: relative;
  line-height: 53px;
`;

const PositionBox = styled.span`
  position: absolute;
  top: 0;
  left: -40px;
  right: -30px;
  bottom: 0;
  border: 1px solid #e67205;
  border-radius: 27px;
`;

const CommentText = styled.p<{ even: boolean }>`
  font-size: 1.8vw;
  color: #666666;
  font-weight: 300;
  position: relative;
  margin: 40px 127px 70px 0;
  margin: ${({ even }) => (even ? "40px 127px 70px 0" : "40px 0 70px 127px")};

  & > b {
    color: #e67205;
    font-weight: 500;
  }
`;

const CommentBox = styled.span<{ even: boolean }>`
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
`;
