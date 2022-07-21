import React, { useEffect, useState } from "react";
import data from "./data.json";
import ProductSlide from "./ProductSlides";
import styled from "styled-components";
import RightArrow from "./rightArrow.svg";
import { useSection } from "../../context/sectionStore";
import NameIconImage from "./nameIcon.svg";
import ProductImageSlider from "./ProductImageSlider";
import useWidth from "../../hooks/useWidth";
import backpic from "./123.png";

export default function ProductSlider({
  active,
  indexHandler,
  productIndex,
}: {
  active: boolean;
  indexHandler: any;
  productIndex: number;
}) {
  const productsData = data.products;
  // const [slideIndex, setSlideIndex] = useState(0);
  const { activeSection } = useSection();
  // console.log(productsData);
  const width = useWidth();

  const productSlides = productsData.map((item, index) => (
    <ProductSlide
      key={item.name}
      product={item}
      current={productIndex - 1 === index}
      active={active}
    />
  ));

  const nextSlide = () => {
    if (productIndex > 1) {
      indexHandler(productIndex - 1);
    } else {
      indexHandler(3);
    }
  };

  const prevSlide = () => {
    if (productIndex < 3) {
      indexHandler(productIndex + 1);
    } else {
      indexHandler(1);
    }
  };

  //For show prodict in slider in mobile screen
  useEffect(() => {
    if (width < 480) {
      nextSlide();
    }
  }, [width]);

  return (
    <ProductSliderSection>
      <BackgroundElement />
      <PrevSlideBtn onClick={prevSlide}></PrevSlideBtn>
      <NextSlideBtn onClick={nextSlide}></NextSlideBtn>
      {productSlides}
      <ProductImageSlider step={productIndex} />

      <NameIcon />
      <BackPic/>
    </ProductSliderSection>
  );
}

const ProductSliderSection = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  @media (max-width: 480px) {
    top: 0;
  }
`;

const BackPic = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    position: absolute;
    left :0;
    top:20px;
    background-image: url(${backpic});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    padding-top: 57%;
    top: 333px;
    z-index: -1;
  }
`;

const BackgroundElement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 20%;
  margin: auto;
  width: 33vw;
  height: 33vw;
  border-radius: 50%;
  border: 2px solid #e4e4e4;
  background: linear-gradient(to bottom, #37abb81f, #71fbff1f);
  @media (max-width: 480px) {
    width: 280px;
    height: 280px;
  }
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
  @media (max-width: 480px) {
    width: 17px;
    height: 34px;
    bottom: unset;
    top: 37%;
    right: 7%;
  }
`;

const NextSlideBtn = styled(PrevSlideBtn)`
  transform: scaleX(-1);
  right: unset;
  left: 26vw;
  @media (max-width: 480px) {
    right: unset;
    left: 7%;
  }
`;

const NameIcon = styled.span`
  display: inline-block;
  position: absolute;
  width: 4.7vw;
  height: 4.7vw;
  background: url(${NameIconImage});
  background-size: contain;
  left: 31.2vw;
  bottom: 9vh;
  margin: auto;
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    left: unset;
    right: -40px;
  }
`;
