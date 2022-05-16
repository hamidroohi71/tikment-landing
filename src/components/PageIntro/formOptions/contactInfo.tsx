import React from "react";

export default function ContactInfo() {
  return (
    <section>
      <div>
        <p>
          برای مشاوره و راه‌اندازی نسخۀ رایگان تیکمنت، چه ساعتی با شما تماس
          بگیریم؟
        </p>
        <div>
          <span>همین امروز</span>
          <span>روزهای زوج، از ساعت ۱۰ تا ۱۶</span>
          <span>روزهای فرد، از ساعت ۱۰ تا ۱۶</span>
        </div>
      </div>
      <form>
        <input type="text" placeholder="نام و نام خانوادگی" />
        <input type="text" placeholder="نام شرکت" />
        <input type="text" placeholder="شماره تماس" />
        <input type="submit" value="ثبت" />
      </form>
    </section>
  );
}
