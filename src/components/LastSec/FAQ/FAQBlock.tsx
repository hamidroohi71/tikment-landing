import React from "react";
import styled from "styled-components";

export default function FAQBlock({
  item,
  open,
  toggleOpen,
  even,
}: {
  item: any;
  open: boolean;
  toggleOpen: () => void;
  even: boolean;
}) {
  return (
    <FaqBlock open={open}>
      <TitlePart even={even}>
        <Sign even={even} open={open}>
          <span />
          <span />
        </Sign>
        <Title open={open} onClick={toggleOpen}>
          {item.question}
        </Title>
      </TitlePart>
      <Answer even={even} open={open}>
        {item.answer}
      </Answer>
    </FaqBlock>
  );
}

const FaqBlock = styled.div<{ open: boolean }>`
  width: 100%;
  margin: 3.5vh;
  max-height: ${({ open }) => (open ? "14vh" : "3vh")};
  transition: 0.5s ease-out;
  transition-delay: ${({ open }) => (open ? "10vh" : "3vh")};

  @media (max-width: 480px) {
    margin: 25px 0;
  }
`;

const TitlePart = styled.div<{ even: boolean }>`
  display: flex;
  align-items: center;
  z-index: 5;
  position: relative;
  flex-direction: ${({ even }) => (even ? "row" : "row-reverse")};
  @media (max-width: 480px) {
    padding: 0 25px;
  }
`;

const Title = styled.h2<{ open: boolean }>`
  cursor: pointer;
  font-size: 1.2vw;
  font-weight: 500;
  color: #fff;
  background: ${({ open }) => (open ? "#FF8080" : "#bababa")};
  line-height: 3.3vw;
  border-radius: 1.7vw;
  padding: 0 43px;
  width: fit-content;
  margin: 0;
  transition: 1s all ease-out;

  @media (max-width: 480px) {
    font-size: 19px;
    line-height: 1.5;
    padding: 17px 35px;
    letter-spacing: -1px;
    border-radius: 32px;
  }
`;

const Sign = styled.div<{ open: boolean; even: boolean }>`
  width: 3.3vw;
  height: 3.3vw;
  border-radius: 50%;
  background: ${({ open }) => (open ? "#FF8080" : "#bababa")};
  margin-left: ${({ even }) => (even ? "25px" : "0")};
  margin-right: ${({ even }) => (even ? "0" : "25px")};
  position: relative;

  & > span {
    position: absolute;
    display: block;
    width: 1.5vw;
    height: 4px;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    &:last-child {
      transform: rotate(90deg);
      display: ${({ open }) => (open ? "none" : "block")};
    }
  }

  @media (max-width: 480px) {
    width: 43px;
    height: 43px;
    flex-shrink: 0;
    margin-left: ${({ even }) => (even ? "9px" : "0")};
    margin-right: ${({ even }) => (even ? "0" : "9px")};

    & > span {
      width: 23px;
      height: 4px;
    }
  }
`;
const Answer = styled.p<{ open: boolean; even: boolean }>`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.5s ease-out;
  overflow: hidden;
  border: 1px solid #9e9e9e;
  padding: 57px 80px 24px;
  border-radius: 64px;
  position: relative;
  top: -35px;
  width: 80%;
  text-align: ${({ even }) => (even ? "left" : "right")};
  color: #6e6d6d;
  margin-left: ${({ even }) => (even ? "auto" : "0")};
  margin-right: ${({ even }) => (even ? "0" : "auto")};

  @media (max-width: 480px) {
    font-size: 21px;
    line-height: 1.5;
    padding: 72px 36px 30px;
    width: 100%;
    margin: 0;
    top: -60px;
  }
`;
