import React from "react";
import Image from "./assets/laughingMan.png";

export default function Rules() {
  return (
    <section>
      <div>
        <h2>
          تنظیم قوانین
          <br />
          متناسب با سازمان شما
        </h2>
        <p>
          هر سازمان قوانین مختلف و منحصر به فرد خود را دارد تیکمنت به گونه‌ای
          کدنویسی شده تا به هنگام راه‌اندازی، مطابق با نیازها و قوانین سازمان
          شما تنظیم شود
        </p>
      </div>
      <div>
        <img src={Image} alt="تنظیم قوانین و مقررات" />
      </div>
    </section>
  );
}
