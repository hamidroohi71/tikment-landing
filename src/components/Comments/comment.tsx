import React from "react";
import styled from "styled-components";

interface Props {
  comment: any;
}

export default function Comment(props: Props) {
  const { comment } = props;
  return (
    <CommentElement>
      <CommentTitle>
        <Avatar>
          <img src={comment.photo} alt={comment.author} />
        </Avatar>
        <Position>
          {comment.author}
          <PositionBox />
        </Position>
      </CommentTitle>
      <CommentText>
        {comment.comment}
        <CommentBox />
      </CommentText>
    </CommentElement>
  );
}

const CommentElement = styled.section`
  position: relative;
  width: 91vw;
  padding: 0 80px;
`;

const CommentTitle = styled.section`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background: linear-gradient(180deg, #ff8080 0%, #ffd011 100%);
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
  border-radius: 27px 0 0 27px;
`;

const CommentText = styled.p`
  font-size: 1.8vw;
  color: #666666;
  font-weight: 300;
  position: relative;
  margin: 40px 127px 70px 0;

  & > b {
    color: #e67205;
    font-weight: 500;
  }
`;

const CommentBox = styled.span`
  position: absolute;
  top: -52px;
  right: -85px;
  bottom: -45px;
  left: -70px;
  background: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e4e4e4;
  border-radius: 64px 0px 64px 64px;
  z-index: -1;
`;
