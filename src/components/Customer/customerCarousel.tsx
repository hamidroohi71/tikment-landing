import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import data from "./customerData.json";

export default function CustomerCarousel() {
  const customerData = data.customerData.map((customer) => (
    <div>
      <img src={customer.logo} alt={customer.name} />
    </div>
  ));
  return (
    <section>
      <Carousel width={6}>{customerData}</Carousel>
    </section>
  );
}
