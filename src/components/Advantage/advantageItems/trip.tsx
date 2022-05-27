import React from "react";
import Image from "./assets/mobile.png";

export default function Trip() {
  return (
    <section>
      <div>
        <h3>با خیالی راحت</h3>
        <h2>حتی در سفر</h2>
        <p>
          حتی در<b>سفر و دورکاری</b> ، تیکمنت در کنار شماست. با اپلیکیشن
          <b>تیکمنت</b>، مدیران می‌توانند فقط با یک کلیک درخواست‌ها را بررسی
          کنند کارمندان نیز در <b>ایام دورکاری</b>، به‌راحتی ساعت شروع و پایان
          کارشان را ثبت می‌کنند
        </p>
      </div>
      <div>
        <img src={Image} alt="سفر" />
      </div>
    </section>
  );
}
