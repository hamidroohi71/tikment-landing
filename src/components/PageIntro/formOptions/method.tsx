import React from "react";
import data from "./formData.json";

export default function Method() {
  const methodElements = data.method.map((method) => (
    <div key={method.method}>
      <img src={method.logo} alt={method.method} />
      <p>{method.method}</p>
    </div>
  ));

  return <section>{methodElements}</section>;
}
