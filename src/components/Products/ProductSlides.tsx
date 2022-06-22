import React from "react";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import NameIconImage from "./nameIcon.svg";

export default function ProductSlide({
  product,
  current,
}: {
  product: any;
  current: boolean;
}) {
  const slideStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: current ? 1 : 0 },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const benefits = product.benefits;
  const benefitsElement = benefits.map((item: any, index: number) => (
    <BenefitBox key={item.name} index={index}>
      <BenefitIcon src={item.logo} alt={item.name} />
      <BenefitTitle>{item.name}</BenefitTitle>
    </BenefitBox>
  ));
  return (
    <ProDuctSlideSection style={slideStyle}>
      <Image1 src={product.pics[0]} alt={product.name} />
      <Image2 src={product.pics[1]} alt={product.name} />
      <Image3 src={product.pics[2]} alt={product.name} />
      {benefitsElement}
      <ProductName>
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

const Image1 = styled.img`
  position: absolute;
  width: 19vw;
  height: 18vw;
  object-fit: contain;
  top: 25vh;
  left: 30vw;
`;

const Image2 = styled.img`
  position: absolute;
  width: 9vw;
  height: 12vw;
  object-fit: contain;
  top: 34vh;
  right: 11vw;
`;

const Image3 = styled.img`
  position: absolute;
  width: 27.8vw;
  height: 19.8vw;
  object-fit: contain;
  top: 33.4vh;
  right: 29.6vw;
`;

const BenefitBox = styled.div<{ index: number }>`
  display: flex;
  align-items: center;
  position: absolute;
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
    position: static;
    padding-right: 64px;

    &:first-of-type {
      margin-top: 484px;
    }
  }
`;

const BenefitIcon = styled.img`
  width: 4.7vw;
  height: 4.7vw;
  border-radius: 50%;
`;

const BenefitTitle = styled.p`
  font-size: 2.1vw;
  color: #183573;

  &:first-of-type {
    font-size: 23px;
  }
`;

const ProductName = styled.h2`
  font-size: 4vw;
  color: #ff4d4d;
  position: absolute;
  bottom: 8.4vh;
  right: 0;
  left: 8vw;
  margin: auto;
  width: fit-content;

  @media (max-width: 480px) {
    top: 45px;
    bottom: unset;
    font-size: 35px;
    left: 0;
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
