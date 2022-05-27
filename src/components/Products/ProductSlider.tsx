import React, { useEffect, useState } from "react";
import data from "./data.json";
import ProductSlide from "./ProductSlides";

export default function ProductSlider() {
  const productsData = data.products;
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(productsData);

  const productSlides = productsData.map((item) => (
    <ProductSlide key={item.name} product={item} current={slideIndex} />
  ));
  return <section>{productSlides}</section>;
}
