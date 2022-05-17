import React from "react";
import styled from "styled-components";
import LogoBox from "../LogoBox";

export default function Footer() {
  return (
    <FooterSection>
      <div>
        <div>
          <LogoBox />
          <div></div>
        </div>
        <div>
          <p>
            سیستم حضوروغیاب تیکمنت پیش‌تر با نام «جهان‌گستر پارس» در خدمت
            همکاران عزیز بود. ما تا کنون در بیش از ۳۵۰۰۰ سازمان خصوصی و دولتی
            فعال بوده‌ایم و با بیش از ۷۰ نمایندگی در سرتاسر ایران خدمت
            رسانده‌ایم. شرکت هوش تجاری پایدار در سال ۱۳۹۹ تصمیم گرفت، تا برند
            «جهان‌گستر پارس» را به‌روز کند. اینک مفتخریم: سیستم حضوروغیاب جدید
            خود را با نام «تیکمنت» در اختیار سازمان‌ها‌ی خصوصی و دولتی و دیگر
            مراکز درمانی و تجاری قرار دهیم
          </p>
        </div>
      </div>

      <div>
        <p>.همۀحقوق این وب‌سایت متعلق به گروه شرکت‌های هوش تجاری است </p>
      </div>
    </FooterSection>
  );
}

const FooterSection = styled.section`
  position: relative;
`;
