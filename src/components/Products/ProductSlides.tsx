import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import { useSection } from "../../context/sectionStore";

export default function ProductSlide({
  product,
  current,
  active,
}: {
  product: any;
  current: boolean;
  active: boolean;
}) {
  const { activeSection } = useSection();
  const [myInterval, setMyInterval] = useState<any>();
  const [benefitIndex, setBenefitIndex] = useState(0);


  const slideStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: current ? 1   : 0 },
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const imageStyle = useSpring({
    from: { transform: "scale(0) translateX(300%)" },
    to: {
      transform: current
        ? "scale(1) translateX(0%)"
        : "scale(0) translateX(300%)",
    },
    delay: 0,
    config: { duration: current ? 500 : 0, easing: easings.easeOutQuart },
  });

  const mainImageStyle = useSpring({
    from: { transform: "scale(0) translateX(300%)" },
    to: {
      transform: current
        ? "scale(1) translateX(0%)"
        : "scale(0) translateX(300%)",
    },
    delay: 0,
    config: { duration: current ? 500 : 0, easing: easings.easeOutQuart },
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
      const newInterval = setInterval(() => {
        setBenefitIndex((prevBenefitIndex) => prevBenefitIndex + 1);
      }, 500);
      setMyInterval(newInterval);
    }
    // console.log(benefitIndex);
  }, [benefitIndex, current, active]);

 

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
      {/* <Image1 src={product.pics[0]} alt={product.name} big={product.id === 2} />
      <Image2 style={imageStyle} src={product.pics[1]} alt={product.name} />
      {product.id !== 2 && <Image3 src={product.pics[2]} alt={product.name} />} */}

      {benefitsElement}
      <ProductName benefitIndex={benefitIndex}>{product.name}</ProductName>
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
  font-size: 1.6vw;
  color: #183573;
  line-height: 4.4vw;
  margin: 0 1vw 0 0;
  opacity: ${({ index, benefitIndex }) => (index <= benefitIndex - 1 ? 1 : 0)};
  transition: 1s ease-out;
  transition-delay: 0.25s;

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
  font-size: 3.2vw;
  color: #ff4d4d;
  position: absolute;
  bottom: 8.4vh;
  left: 36vw;
  text-align: left;
  margin: auto;
  width: fit-content;
  opacity: ${({ benefitIndex }) => (benefitIndex > 4 ? 1 : 0)};
  transition: 1s ease-out;
  @media (max-width: 480px) {
    top: 45px;
    bottom: unset;
    font-size: 28px;
    opacity: 1;
    left: 50%;
    transform: translate(-50%, -19px);
  }
`;
