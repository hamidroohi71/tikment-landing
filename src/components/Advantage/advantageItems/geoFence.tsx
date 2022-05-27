import React from "react";
import Image from "./assets/mobile.png";

export default function GEOFence() {
  return (
    <section>
      <div>
        <h3>ثبت آسان تردد</h3>
        <h2>با تکنولوژی Geo-Fence</h2>
        <p>
          <b>با نصب تیکمنت در تلفن همراه</b>خود، به راحتی ورود و خروج‌تان را ثبت
          کنید همچنین به محض قرارگیری در محدوۀ شرکت و یا بیرون از آن تکنولوژی{" "}
          <b>GEO-FENCE</b>به کمک شما می‌آید و ثبت تردد را یادآوری می‌کند
        </p>
      </div>
      <div>
        <img src={Image} alt="geo-fence" />
      </div>
    </section>
  );
}
