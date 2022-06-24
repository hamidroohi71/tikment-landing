import React, { useEffect, useState } from "react";
import data from "./data.json";
import ProductSlide from "./ProductSlides";
import styled from "styled-components";
import RightArrow from "./rightArrow.svg";
import { useSection } from "../../context/sectionStore";

export default function ProductSlider() {
  const productsData = data.products;
  const [slideIndex, setSlideIndex] = useState(0);
  const { activeSection } = useSection();
  // console.log(productsData);

  const productSlides = productsData.map((item, index) => (
    <ProductSlide
      key={item.name}
      product={item}
      current={slideIndex === index}
    />
  ));

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(2);
    }
  };

  const nextSlide = () => {
    if (slideIndex < 2) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  useEffect(() => {
    if (activeSection && activeSection === 3) {
      setSlideIndex(0);
    }
  }, [activeSection]);

  return (
    <ProductSliderSection>
      <BackgroundElement />
      <PrevSlideBtn onClick={prevSlide}></PrevSlideBtn>
      <NextSlideBtn onClick={nextSlide}></NextSlideBtn>
      {productSlides}
    </ProductSliderSection>
  );
}

const ProductSliderSection = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media (max-width: 480px) {
    height: 150vh;
    top: 0;
  }
`;

const BackgroundElement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 33vw;
  height: 33vw;
  border-radius: 50%;
  border: 2px solid #e4e4e4;
  background: linear-gradient(to bottom, #37abb81f, #71fbff1f);
`;

const PrevSlideBtn = styled.div`
  position: absolute;
  right: 26vw;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url(${RightArrow});
  background-size: contain;
  background-repeat: no-repeat;
  width: 2.7vw;
  height: 5.4vw;
  cursor: pointer;
  z-index: 100;
`;

const NextSlideBtn = styled(PrevSlideBtn)`
  transform: scaleX(-1);
  right: unset;
  left: 26vw;
`;
