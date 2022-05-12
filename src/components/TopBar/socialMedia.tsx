import React from "react";
import data from "./data.json";

export default function SocailMedia() {
  const socails = data.socialMedai;
  const socialElements = socails.map((item) => (
    <a
      key={item.name}
      href={item.href}
      style={{ backgroundImage: `url(${item.icon})` }}
    />
  ));
  return <section>{socialElements}</section>;
}
