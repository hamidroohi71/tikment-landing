import React from "react";
import Image from "./assets/laptop.png";

export default function Report() {
  return (
    <section>
      <div>
        <h2>گزارش‌های هوش تجاری</h2>
        <p>
          در سال‌های اخیر از دلایل محبوبیت تیکمنت ارائۀ گزارش‌هایی توسط این نرم
          افزار با عنوان<b>گزارش‌های هوش تجاری</b> بوده است. گزارش‌هایی که با
          <b>تحلیل دقیق بازده و عملکرد کارکنان</b>، به مدیران کمک می‌کنند تا
          <b>هزینه‌های سازمان را کاهش و سودآوری آن را افزایش دهند</b>
        </p>
      </div>
      <div>
        <img src={Image} alt="گزارش‌های هوش تجاری" />
      </div>
    </section>
  );
}
