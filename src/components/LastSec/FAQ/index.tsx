import React from "react";
import data from "./data.json";
import styled from "styled-components";

export default function FAQ() {
  const faqElements = data.faq.map((item) => (
    <div key={item.question}>
      <h2>{item.question}</h2>
      <p>{item.answer}</p>
    </div>
  ));
  return <FAQSection>{faqElements}</FAQSection>;
}

const FAQSection = styled.section`
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  transform: translateY(100vh);
`;
