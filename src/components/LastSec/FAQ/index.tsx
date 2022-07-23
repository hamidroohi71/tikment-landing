import React, { useState } from "react";
import data from "./data.json";
import styled from "styled-components";
import FAQBlock from "./FAQBlock";


export default function FAQ() {
  const [current, setCurrent] = useState(0);
  const faqElements = data.faq.map((item, index) => (
    <FAQBlock
      key={item.question}
      item={item}
      open={current === index}
      even={index % 2 === 0}
      toggleOpen={() => {
        setCurrent(index);
      }}
    />
  ));
  return <FAQSection>{faqElements}</FAQSection>;
}

const FAQSection = styled.section`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10vh 12vw;

  @media (max-width: 480px) {
    order: 0;
    padding: 10vh 28px;
  }
`;
