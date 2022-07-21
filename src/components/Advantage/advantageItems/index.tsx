import React, { useEffect, useState } from "react";
import GEOFence from "./geoFence";
import Management from "./management";
import Report from "./report";
import Rules from "./rules";
import Transparency from "./transparency";
import Trip from "./trip";
import FreeTest from "./freeTest";
import styled from "styled-components";
import { useSpring, animated, easings } from "react-spring";
import GlassPattern from "../glassPattern";
import ManImage from "./assets/man.webp";
import MobileImage from "./assets/mobile.webp";
import MobileImage2 from "./assets/mobile2.webp";
import TripImage from "./assets/trip.webp";
import GeoFenceImage from "./assets/geoFence.webp";
import ReportImage from "./assets/report.webp";
import LaptopImage1 from "./assets/laptop.webp";
import LaptopImage2 from "./assets/laptop2.webp";
import managementImage from "./assets/management.webp";
import laughingManImage from "./assets/laughingMan.webp";
import DeviceImage from "./assets/device.webp";
import Badge from "./assets/freeTest.webp";
import MobilePic from "./assets/mobile.png"

export default function AdvantagesList({
  show,
  index,
}: {
  show: boolean;
  index: number;
}) {
  const sectionStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 2000, easing: easings.easeOutQuart },
  });

  const manImageStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 1 ? 1 : 0 },
    delay: index === 1 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const mobileImageStyle = useSpring({
    from: { opacity: 0, transform: "translateX(10%)" },
    to: {
      opacity: index === 2 ? 1 : 0,
      transform: index === 2 ? "translateX(0%)" : "translateX(10%)",
    },
    delay: index === 2 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const geoFenceMobileContentStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 2 ? 1 : 0 },
    delay: index === 2 ? 2000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const mobileImageStyle2 = useSpring({
    from: { opacity: 0, transform: "translateX(10%)" },
    to: {
      opacity: index === 3 ? 1 : 0,
      transform: index === 3 ? "translateX(0%)" : "translateX(10%)",
    },
    delay: index === 3 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const tripMobileContentStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 3 ? 1 : 0 },
    delay: index === 3 ? 1500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const LaptopStyle1 = useSpring({
    from: { transform: "translateX(-150%)" },
    to: { transform: index === 4 ? "translateX(0%)" : "translateX(-150%)" },
    delay: 0,
    config: { duration: 500, easing: easings.easeOutQuart },
  });

  const reportContentStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 4 ? 1 : 0 },
    delay: index === 4 ? 1500 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const managementContentStyle = useSpring({
    from: { opacity: 0, transform: "scale(1)" },
    to: {
      opacity: index === 5 || index === 6 ? 1 : 0,
      transform:
        index === 5 ? "scale(1)" : index === 6 ? "scale(0.3)" : "scale(1)",
    },
    delay: index === 5 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const LaptopStyle2 = useSpring({
    from: { opacity: 0, transform: "scale(1)" },
    to: {
      opacity: index === 5 || index === 6 ? 1 : 0,
      transform:
        index === 5 ? "scale(1)" : index === 6 ? "scale(0.3)" : "scale(1)",
    },
    delay: index === 5 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const laughingManStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 6 ? 1 : 0 },
    delay: index === 6 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  const deviceStyle = useSpring({
    from: { opacity: 0 },
    to: { opacity: index === 7 ? 1 : 0 },
    delay: index === 7 ? 1000 : 0,
    config: { duration: 1000, easing: easings.easeOutQuart },
  });

  return (
    <Advantages style={sectionStyle}>
      <GlassPattern listIndex={index} />
      <Transparency active={index === 1} />
      <GEOFence active={index === 2} />
      <Trip active={index === 3} />
      <Report active={index === 4} />
      <Management active={index === 5} />
      <Rules active={index === 6} />
      <FreeTest active={index === 7} />

      <Image style={manImageStyle} src={ManImage} alt="شفافیت حقوق و مزایا" />
      <Image style={mobileImageStyle} src={MobileImage} alt="geo-fence" />
      <ImageContent
        style={geoFenceMobileContentStyle}
        src={GeoFenceImage}
        alt="geo-fence"
      />
      <Image style={mobileImageStyle2} src={MobileImage2} alt="سفر" />
      <ImageContent style={tripMobileContentStyle} src={TripImage} alt="trip" />
      <Image
        style={LaptopStyle1}
        src={LaptopImage1}
        alt="گزارش‌های هوش تجاری"
      />
      <ImageContent
        style={reportContentStyle}
        src={ReportImage}
        alt="geo-fence"
      />
      <Image
        style={{ ...LaptopStyle2, transformOrigin: "5% center" }}
        src={LaptopImage2}
        alt="مدیریت بهینهٔ شیفت‌ها"
      />
      <ImageContent
        style={{ ...managementContentStyle, transformOrigin: "5% center" }}
        src={managementImage}
        alt="geo-fence"
      />
      <Image
        style={laughingManStyle}
        src={laughingManImage}
        alt="تنظیم قوانین و مقررات"
      />

      <Image style={deviceStyle} src={DeviceImage} alt="۳۰ روز تست رایگان" />
      <Image style={deviceStyle} src={Badge} alt="نشان رایگان" />
    </Advantages>
  );
}

const Advantages = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  perspective: 50vw;
`;

const Image = styled(animated.img)`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 25;
  object-fit: contain;

  @media (max-width: 480px) {
    content : url(${MobilePic});
    right: -96%;
    top:-15%;
     width: 150%;
    height: auto;
    
  }
`;

const ImageContent = styled(Image)`
  z-index: 26;
`;
