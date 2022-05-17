import React from "react";
import styled from "styled-components";

export default function Contact() {
  return (
    <ContactSection>
      <h2>برای مشاورهٔ رایگان در اولین فرصت با شما تماس می‌گیریم.</h2>
      <form>
        <p>چه ساعتی برای تماس راحت‌ترید؟</p>
        <input type="radio" value="همین امروز" />
        <label>همین امروز</label>
        <input type="radio" value="روزهای زوج، از ساعت ۱۰ تا ۱۶" />
        <label>روزهای زوج، از ساعت ۱۰ تا ۱۶</label>
        <input type="radio" value="روزهای فرد، از ساعت ۱۰ تا ۱۶" />
        <label>روزهای فرد، از ساعت ۱۰ تا ۱۶</label>
        <input type="text" placeholder="نام و نام خانوادگی" />
        <input type="text" placeholder="نام شرکت" />
        <input type="text" placeholder="شماره تماس" />
        <input type="submit" value="ثبت" />
      </form>
    </ContactSection>
  );
}

const ContactSection = styled.section`
  height: 50vh;
  padding: 11vh 21vw;
  display: flex;
  justify-content: center;
`;
