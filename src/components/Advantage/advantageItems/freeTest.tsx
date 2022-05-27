import React from "react";
import Image from "./assets/device.png";
import Badge from "./assets/freeTest.png";

export default function FreeTest() {
  return (
    <section>
      <div>
        <h2>۳۰ روز تست رایگان</h2>
        <p>
          آرمان ما ارائۀ بهترین انتخاب به شماست بنابر این فرصتی ۳۰ روزه در
          اختیار دارید تا به طور کامل تیکمنت را تست کنید و قابلیت های آن را در
          عمل ببینید
        </p>
      </div>
      <div>
        <img src={Image} alt="۳۰ روز تست رایگان" />
        <img src={Badge} alt="نشان رایگان" />
      </div>
    </section>
  );
}
