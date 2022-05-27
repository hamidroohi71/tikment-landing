import React from "react";
import GEOFence from "./geoFence";
import Management from "./management";
import Report from "./report";
import Rules from "./rules";
import Transparency from "./transparency";
import Trip from "./trip";
import FreeTest from "./freeTest";

export default function AdvantagesList() {
  return (
    <section>
      <Transparency />
      <GEOFence />
      <Trip />
      <Report />
      <Management />
      <Rules />
      <FreeTest />
    </section>
  );
}
