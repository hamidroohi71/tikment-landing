import React from "react";
import ManImage from "./assets/man.png";

export default function Transparency() {
  return (
    <section>
      <div>
        <h3>حقوق و مزایا،</h3>
        <h2>شفاف‌تر از همیشه</h2>
        <p>
          پژوهش‌ها نشان می‌دهد: هرچه حقوق و مزایا شفاف تر باشد، بازده کارمندان
          بیشتر است. تیکمنت <b>گزارش‌های دقیقی</b> را در اختیار مدیران و
          کارمندان قرار می‌دهد. از
          <b>محاسبۀ حقوق و مزایا، مرخصی‌ها و اضافه‌کاری‌ها</b>
          گرفته تا <b>تأخیر و تعجیل، غیبت‌ها و پاداش‌ها، حق بیمه</b>و ده‌ها مورد
          دیگر{" "}
        </p>
      </div>
      <div>
        <img src={ManImage} alt="شفافیت حقوق و مزایا" />
      </div>
    </section>
  );
}