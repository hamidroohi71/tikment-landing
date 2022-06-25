import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import NameIconImage from "./nameIcon.svg";
import { useSection } from "../../context/sectionStore";

export default function ProductSlide({
  product,
  current,
}: {
  product: any;
  current: boolean;
}) {
  const { activeSection } = useSection();
  const [myInterval, setMyInterval] = useState<any>();
  const [benefitIndex, setBenefitIndex] = useState(0);
  const slideStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: current ? 1 : 0 },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  useEffect(() => {
    clearInterval(myInterval);
    setMyInterval(0);
    if (current) {
      setBenefitIndex(0);
    }
  }, [current]);

  useEffect(() => {
    if (benefitIndex === 0 && current && activeSection === 3) {
      console.log("here");
      const newInterval = setInterval(() => {
        setBenefitIndex((prevBenefitIndex) => prevBenefitIndex + 1);
      }, 1000);
      setMyInterval(newInterval);
    }
    console.log(benefitIndex);
  }, [benefitIndex, current]);

  const benefits = product.benefits;
  const benefitsElement = benefits.map((item: any, index: number) => (
    <BenefitBox key={item.name} index={index} benefitIndex={benefitIndex}>
      <BenefitIcon
        src={item.logo}
        alt={item.name}
        benefitIndex={benefitIndex}
      />
      <BenefitTitle index={index} benefitIndex={benefitIndex}>
        {item.name}
      </BenefitTitle>
      <BenefitBorder index={index} benefitIndex={benefitIndex}></BenefitBorder>
    </BenefitBox>
  ));
  return (
    <ProDuctSlideSection style={slideStyle}>
      <Image1 src={product.pics[0]} alt={product.name} big={product.id === 2} />
      <Image2 src={product.pics[1]} alt={product.name} />
      {product.id !== 2 && <Image3 src={product.pics[2]} alt={product.name} />}

      {benefitsElement}
      <ProductName benefitIndex={benefitIndex}>
        {product.name}
        <NameIcon />
      </ProductName>
    </ProDuctSlideSection>
  );
}

const ProDuctSlideSection = styled(animated.section)`
  position: absolute;
  width: 100vw;
  height: 100vh;

  @media (max-width: 480px) {
    height: fit-content;
  }
`;

const Image1 = styled.img<{ big: boolean }>`
  position: absolute;
  width: ${({ big }) => (big ? "45vw" : "19vw")};
  height: ${({ big }) => (big ? "23.6vw" : "18vw")};
  object-fit: contain;
  top: ${({ big }) => (big ? "0" : "25vh")};
  bottom: ${({ big }) => (big ? "0" : "unset")};
  margin: auto;
  left: ${({ big }) => (big ? "0" : "30vw")};
  right: ${({ big }) => (big ? "0" : "unset")};

  @media (max-width: 480px) {
    width: ${({ big }) => (big ? "70vw" : "40vw")};
    height: ${({ big }) => (big ? "50vw" : "50vw")};
    left: ${({ big }) => (big ? "0" : "5vw")};
    right: ${({ big }) => (big ? "0" : "unset")};
    top: 25vh;
    bottom: unset;
  }
`;

const Image2 = styled.img`
  position: absolute;
  width: 9vw;
  height: 12vw;
  object-fit: contain;
  top: 34vh;
  right: 11vw;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Image3 = styled.img`
  position: absolute;
  width: 27.8vw;
  height: 19.8vw;
  object-fit: contain;
  top: 33.4vh;
  right: 29.6vw;

  @media (max-width: 480px) {
    width: 60vw;
    height: 50vw;
    right: 10vw;
    top: 30vh;
  }
`;

const BenefitBox = styled.div<{ index: number; benefitIndex: number }>`
  opacity: ${({ index, benefitIndex }) => (index <= benefitIndex ? 1 : 0)};
  transition: 1s ease-out;
  display: flex;
  align-items: center;
  position: absolute;
  height: 4.4vw;
  top: ${({ index }) =>
    index === 0
      ? "15vh"
      : index === 1
      ? "28.7vh"
      : index === 2
      ? "42.5vh"
      : index === 3
      ? "56.2vh"
      : index === 4
      ? "69.9vh"
      : "0"};
  right: ${({ index }) =>
    index === 0
      ? "69.4vw"
      : index === 1
      ? "75.6vw"
      : index === 2
      ? "77.5vw"
      : index === 3
      ? "76.3vw"
      : index === 4
      ? "72.5vw"
      : "0"};

  @media (max-width: 480px) {
    position: relative;
    opacity: 1;
    right: 0;
    top: 0;
    margin: 35px 64px 35px 0;
    height: 40px;
    width: fit-content;

    &:first-of-type {
      margin-top: 500px;
    }
  }
`;

const BenefitIcon = styled.img<{ benefitIndex: number }>`
  width: 3.7vw;
  height: 3.7vw;
  border-radius: 50%;

  @media (max-width: 480px) {
    width: 41px;
    height: 41px;
  }
`;

const BenefitTitle = styled.p<{ index: number; benefitIndex: number }>`
  font-size: 2.1vw;
  color: #183573;
  line-height: 4.4vw;
  margin: 0 1vw 0 0;
  opacity: ${({ index, benefitIndex }) => (index <= benefitIndex - 1 ? 1 : 0)};
  transition: 1s ease-out;
  transition-delay: 0.25s;

  &:first-of-type {
    font-size: 23px;
  }

  @media (max-width: 480px) {
    opacity: 1;
    padding-left: 10px;
  }
`;

const BenefitBorder = styled.div<{ index: number; benefitIndex: number }>`
  position: absolute;
  top: 0;
  right: -0.35vw;
  left: ${({ index, benefitIndex }) =>
    index <= benefitIndex - 1 ? "-3.5vw" : "calc(100% - 4.2vw);"};
  bottom: 0;
  border-radius: 2.2vw;
  border: 1px solid #183573;
  transition: 1s ease-out;
  @media (max-width: 480px) {
    opacity: 1;
    top: -4.5px;
    right: -4.5px;
    left: -4.5px;
    bottom: -4.5px;
    border-radius: 25px;
  }
`;

const ProductName = styled.h2<{ benefitIndex: number }>`
  font-size: 4vw;
  color: #ff4d4d;
  position: absolute;
  bottom: 8.4vh;
  right: 0;
  left: 8vw;
  margin: auto;
  width: fit-content;
  opacity: ${({ benefitIndex }) => (benefitIndex > 4 ? 1 : 0)};
  transition: 1s ease-out;
  @media (max-width: 480px) {
    top: 45px;
    bottom: unset;
    font-size: 35px;
    left: 0;
    opacity: 1;
  }
`;

const NameIcon = styled.span`
  display: inline-block;
  position: absolute;
  width: 4.7vw;
  height: 4.7vw;
  background: url(${NameIconImage});
  background-size: contain;
  left: -4.7vw;
  top: 0;
  bottom: 0;
  margin: auto;
  @media (max-width: 480px) {
    width: 42px;
    height: 42px;
    left: unset;
    right: -40px;
  }
`;
