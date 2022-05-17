import React from "react";
import styled from "styled-components";
import CustomerCarousel from "./customerCarousel";

export default function Customer() {
  return (
    <CustomerElement>
      <div>
        <p>
          تا امروز
          <span>1401/03/03</span>
        </p>
        <p>سیستم حضور و غیاب تیکمنت</p>
        <p>
          در
          <span>34561</span>
          سازمان خصوصی و دولتی فعال بوده است.
        </p>
      </div>
      <div>
        <CustomerCarousel />
      </div>
    </CustomerElement>
  );
}

const CustomerElement = styled.section`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8vh 10vw;
`;
