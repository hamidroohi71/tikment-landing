import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./customerData.json";
import "./carouselOverride.css";
import styled from "styled-components";
import { NONAME } from "dns";

export default function CustomerCarousel({
  enterComment,
}: {
  enterComment: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const customerData = data.customerData.map((customer, index) => (
    <Item
      key={customer.name}
      onClick={() => {
        setCurrentIndex(index);
      }}
    >
      <img src={customer.logo} alt={customer.name} />
    </Item>
  ));

  const comments = data.customerData.map((item) => (
    <div>
      <img src={item.comment.profilePic} alt={item.comment.author} />
      <h3>{item.comment.author}</h3>
      <h2>{item.comment.position}</h2>
      <div>
        <p>{item.comment.comment}</p>
        <p>{item.comment.subComment}</p>
      </div>
    </div>
  ));
  return (
    <>
      <CommentContainer>{comments}</CommentContainer>
      <CarouselSection onClick={enterComment}>{customerData}</CarouselSection>
    </>
  );
}

const CarouselSection = styled.section`
  display: flex;
  align-items: center;
  margin-top: 74px;
`;
const Item = styled.div`
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
  background: linear-gradient(180deg, #75c9db 0%, #4af3f8 100%);
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2vw;
  cursor: pointer;

  & > img {
    width: 70%;
    height: 70%;
    object-fit: contain;
  }
`;

const CommentContainer = styled.div`
  display: none;
`;
