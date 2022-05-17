import React from "react";
import styled from "styled-components";

export default function Product() {
  return (
    <ProductSection>
      <TitlePart>
        <h2>تیکمنت چیست؟</h2>
        <h3>سیستم حضور و غیبا تیکمنت شامل ۳ محصول اصلی است.</h3>
        <h4>شمار می‌توانید هر محصول را مجزا هم سفارش دهید.</h4>
      </TitlePart>
    </ProductSection>
  );
}

const ProductSection = styled.section`
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify: content: center;
    align-items: center;
`;

const TitlePart = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
