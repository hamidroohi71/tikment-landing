import React from "react";
import styled from "styled-components";
import data from "./formData.json";

export default function JobType() {
  const typeElements = data.jobType.map((type) => (
    <div key={type.type}>
      <img src={type.logo} alt={type.type} />
      <p>{type.type}</p>
    </div>
  ));

  return <OptionBox>{typeElements}</OptionBox>;
}

const OptionBox = styled.section`
  display: flex;
  align-items: center;
`;
