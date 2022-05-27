import React from "react";

export default function ProductSlide({
  product,
  current,
}: {
  product: any;
  current: number;
}) {
  console.log(product);
  const benefits = product.benefits;
  const benefitsElement = benefits.map((item: any) => (
    <div key={item.name}>
      <img src={item.logo} alt={item.name} />
      <p>{item.name}</p>
    </div>
  ));
  return (
    <section>
      <img src={product.pics[0]} alt={product.name} />
      <img src={product.pics[1]} alt={product.name} />
      <img src={product.pics[2]} alt={product.name} />
      {benefitsElement}
      <h2>{product.name}</h2>
    </section>
  );
}
