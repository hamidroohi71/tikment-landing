import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./customerData.json";
import "./carouselOverride.css";
import styled from "styled-components";
import CommentSlider from "./CommentSlider";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";

export default function CustomerCarousel({
  enterComment,
  showComment,
}: {
  showComment: boolean;
  enterComment: () => void;
}) {
  const width = useWidth();
  const { activeSection } = useSection();
  const [currentIndex, setCurrentIndex] = useState(0);
  const customerData = data.customerData.map((customer, index) => (
    <Item
      selected={showComment && currentIndex === index}
      key={customer.name}
      onClick={() => {
        setCurrentIndex(index);
      }}
    >
      <img src={customer.logo} alt={customer.name} />
    </Item>
  ));

  const carouselStyle = useSpring({
    from: { opacity: 0, transform: "translateX(-10vw)" },
    to: {
      opacity: activeSection === 2 ? 1 : width < 480 ? 1 : 0,
      transform: activeSection === 2 ? "translateX(0vw)" : "translateX(2vw)",
    },
    delay: activeSection === 2 ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  return (
    <>
      <CommentContainer show={showComment && activeSection === 2}>
        <CommentSlider selectedIndex={currentIndex} />
      </CommentContainer>
      <CarouselSection style={carouselStyle} onClick={enterComment}>
        {customerData}
      </CarouselSection>
    </>
  );
}

const CarouselSection = styled(animated.section)`
  display: flex;
  align-items: center;
  margin-top: 74px;

  @media (max-width: 480px) {
    height: 20vh;
    width: 300vw;
  }
`;
const Item = styled.div<{ selected: boolean }>`
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
  // background: linear-gradient(180deg, #75c9db 0%, #4af3f8 100%);
  box-shadow: inset 0px 0px 80px #75c9db80, 0px 3px 3px #8125254d;
  border: 1px solid #75c9db4d;
  backdrop-filter: blur(7px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 2vw;
  cursor: pointer;
  transform: ${({ selected }) => (selected ? "scale(1.4)" : "scale(1)")};
  transition: 0.2s ease-out;

  & > img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    filter: ${({ selected }) =>
      selected
        ? "brightness(0) saturate(100%) invert(11%) sepia(37%) saturate(4190%) hue-rotate(216deg) brightness(96%) contrast(110%)"
        : "contrast(100%)"};
  }

  @media (max-width: 480px) {
    width: 67px;
    height: 67px;
    transform: ${({ selected }) => (selected ? "scale(2)" : "scale(1)")};
    margin: ${({ selected }) => (selected ? "0 10vw" : "0 2vw")};
  }
`;

const CommentContainer = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 8vh;
  left: 10vw;
  right: 10vw;
  bottom: 32vh;

  @media (max-width: 480px) {
    display: block;
    position: static;
    height: 80vh;
  }
`;
