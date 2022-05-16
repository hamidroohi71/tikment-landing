import React from "react";
import data from "./formData.json";

export default function Number() {
  const numberElements = data.number.map((number) => (
    <div key={number.number}>
      <img src={number.logo} alt={number.number} />
      <p>{number.number}</p>
    </div>
  ));

  return <section>{numberElements}</section>;
}
