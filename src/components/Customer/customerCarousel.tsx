import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "./customerData.json";
import "./carouselOverride.css";
import styled from "styled-components";
import CommentSlider from "./CommentSlider";
import { useSection } from "../../context/sectionStore";
import { useSpring, animated, easings } from "react-spring";
import useWidth from "../../hooks/useWidth";
import back from "./back.png";
import forward from "./forward.png";

let myTime: any;

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
  console.log('showComment:',showComment)
  const customerData = data.customerData.map((customer, index) => (
    <Item
      // selected={showComment && currentIndex === index}
      selected={showComment && currentIndex === index}
      preSelected={
        currentIndex === 0 ? index === 5 : index === currentIndex - 1
      }
      key={customer.name}
      onClick={() => {
        clearTimeout(myTime);
        setCurrentIndex(index);
      }}
    >
      <img src={customer.logo} alt={customer.name} />
    </Item>
  ));

  // useEffect(() => {
  //   if (showComment) {
  //     setInterval(() => {
  //       setCurrentIndex((i) => i + 1);
  //     }, 5000);
  //   }
  // }, [showComment]);

  useEffect(()=>{
    if(width < 480 ){
      enterComment();
    }
  },[])

  const goNextSlide = () => {
    if (currentIndex < customerData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    myTime = setTimeout(() => {
      goNextSlide();
      clearTimeout(myTime);
    }, 7000);
  }, [currentIndex]);

  const carouselStyle = useSpring({
    from: { opacity: 0, transform: "translateX(-10vw)" },
    to: {
      opacity: showComment ? 1 : width < 480 ? 1 : 0,
      transform: showComment ? "translateX(0vw)" : "translateX(2vw)",
    },
    // delay: activeSection === 2 ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  return (
    <>
      <CommentContainer show={showComment}>
        <CommentSlider selectedIndex={currentIndex} />
      </CommentContainer>
      <CarouselSection style={carouselStyle} onClick={enterComment}>
        <Back onClick={()=>currentIndex===0?"": setCurrentIndex(currentIndex-1)}></Back>
        {customerData}
        <Forward onClick={()=>goNextSlide()}></Forward>
      </CarouselSection>
    </>
  );
}

const Back = styled.div`
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 23px;
  cursor: pointer;

  @media (max-width:480px){
    width:20px;
    height:12px;
  }
`;

const Forward = styled.div`
  background-image: url(${forward});
  background-repeat: no-repeat;
  background-size: contain;
  width: 40px;
  height: 23px;
  cursor: pointer;

  @media (max-width:480px){
    width:20px;
    height:12px;
    right: -24px;
    position: absolute;
  }
`;

const CarouselSection = styled(animated.section)`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  margin-top: 0px; //74px saber
  height: 10vh; // saber

  @media (max-width: 480px) {
    height: 168px;
    width: 100%;
    margin-top:35px;
    
  }
`;
const Item = styled.div<{ selected: boolean; preSelected: boolean ;}>`
  width: 9vw; //7vw not a good solution
  height: 9vw; // 7vw not a good solution
  border-radius: 50%;
  // background: linear-gradient(180deg, #75c9db 0%, #4af3f8 100%);
  box-shadow: inset 0px 0px 80px #75c9db80;
  border: 1px solid #b9e4ed;
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
   
    position:absolute;
    width: 67px;
    height: 67px;
    margin: ${({ selected }) => (selected ? "0 10vw" : "0 2vw")};
    transform: ${({ selected, preSelected }) =>
    selected
      ? " translateX(100px) scale(2)"
      : preSelected
      ? "translateX(258px) scale(1)"
      : " translateX(10px) scale(1)"};
      filter: none;
    
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
