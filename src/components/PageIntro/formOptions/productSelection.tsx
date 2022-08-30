import React, { useEffect, useState } from "react";
import styled from "styled-components";
import data from "./productData.json";

export default function ProductSelection({ setSelectedProduct }: any) {
  const [selected, setSelected] = useState(1);

  useEffect(() => {
    setSelectedProduct(selected);
  }, [selected]);
  const formOptions = data.productData.map((item, index) => (
    <Option
      onClick={() => {
        setSelected(index);
      }}
      selected={selected === index}
    >
      <svg>
        <use width="100%" height="100%" href={item.icon} />
      </svg>
      <p>{item.name}</p>
    </Option>
  ));
  return <ProductSelectionBox>{formOptions}</ProductSelectionBox>;
}

const ProductSelectionBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OptionBase = styled.div<{
  selected: boolean;
}>`
  width: 10.7vw;
  height: 18vh;

  background: ${({ selected }) =>
    selected
      ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)"
      : "linear-gradient(180deg,rgb(55 171 184 / 8%) 0%,#71fbff1f 100%)"};

  background: ${(
    { selected } //default added
  ) =>
    selected ? "linear-gradient(208deg, #05185E 0%, #4B86AC 100%)" : "default"};

  border: 2px solid #ffffff99;
  border-radius: 2vw;
  backdrop-filter: blur(0px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 1;
  transition: 0.25s ease-out;
  z-index: 25;

  &:hover {
    background: linear-gradient(208deg, #05185e 0%, #4b86ac 100%);

    & > svg {
      & > use {
        fill: #fff;
        stroke: #fff;
      }
    }

    & > p {
      color: #fff;
    }
  }

  & > svg {
    display: block;
    width: 4vw;
    height: 4vw;
    margin: auto;
    z-index: 20;

    & > use {
      display: flex;
      margin: auto;
      width: 4vw;
      height: 4vw;
      fill: ${({ selected }) => (selected ? "#fff" : "#2BE2F4")};
      fill: ${({ selected }) => (selected ? "#fff" : "#183573")}; // saber
      stroke: ${({ selected }) => (selected ? "#fff" : "#2BE2F4")};
      stroke: ${({ selected }) => (selected ? "#fff" : "#183573")}; // saber
    }
  }

  & > p {
    margin: 0 0 10px;
    font-size: 1vw;
    font-weight: 500;
    // color: #4af3f8;
    color: ${({ selected }) => (selected ? "#fff" : "#4AF3F8")};
    color: ${({ selected }) => (selected ? "#fff" : "#183573")}; // saber
  }

  @media (max-width: 480px) {
    width: 127px;
    border-radius: 36px;
    height: 141px;
    position: static;
    transform: translateX(0) !important;
    margin: 5px;
    opacity: 1 !important;

    & > svg {
      width: 50px;
      height: 50px;

      & > use {
        width: 50px;
        height: 50px;
      }
    }

    & > p {
      font-size: 15px;
      white-space: nowrap;
    }
  }
`;

const Option = styled(OptionBase)``;
