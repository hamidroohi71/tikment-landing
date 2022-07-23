import React from "react";
import FaceDetect1 from "../../assets/image/product/faceDetect1.png";
import FaceDetect2 from "../../assets/image/product/faceDetect2.png";
import App1 from "../../assets/image/product/app1.png";
import App2 from "../../assets/image/product/app2.png";
import FingerPrint1 from "../../assets/image/product/fingerPrint1.png";
import FingerPrint2 from "../../assets/image/product/fingerPrint2.png";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";

export default function ProductImageSlider({ step }: { step: number }) {
  const width = useWidth();
  return (
    <section>
      <Image
        width={width<480 ? "200px" : "19vw"}
        height={width<480 ? "auto" : "18vw"}
        top={width<480 ? "150px" : "25.5vh"}
        left={width<480 ? "50px" :"30vw"}
        opacity={step === 1 ? 1 : step === 2 ? 0 : 1}
        blur={step === 1 ? false : step === 2 ? false : true}
        before={step === 1 ? false : step === 2 ? false : true}
        transform={
          step === 1
            ? "translateX(0vw) scale(1)"
            : step === 2
            ? "translateX(100vw) translateY(10vh) scale(0.25)"
            : width < 480
            ? "translateX(400px)"
            : "translateX(50vw) translateY(10vh) scale(0.5)"
        }
        src={FaceDetect1}
        alt="حسگر تغییر چهره تیکمنت"
      />
      <Image
        width={width<480 ? "200px" : "28vw"}
        height={width<480 ? "auto" : "19.8vw"}
        top={"33.5vh"}
        left={"42.8vw"}
        opacity={step === 1 ? 1 : step === 2 ? 0 : 0}
        blur={false}
        before={false}
        transform={"none"}
        src={FaceDetect2}
        alt="حسگر تغییر چهره تیکمنت"
      />
      <Image
        width={width<480 ? "280px" :"40vw"}
        height={width<480 ? "auto" : "23vw"}
        top={width<480 ? "175px" : "31vh"}
        left={width<480 ? "33px" : "26vw"}
        opacity={step === 1 ? 0 : step === 2 ? 1 : 1}
        blur={step === 1 ? false : step === 2 ? true : false}
        before={step === 1 ? false : step === 2 ? true : false}
        transform={
          step === 3
            ? "translateX(0vw) scale(1)"
            : step === 1
            ? "translateX(100vw) scale(0.25)"
            : width < 480
            ? "translateX(400px)"
            : "translateX(40vw) scale(0.5)"
        }
        src={App1}
        alt="نرم افزار تیکمنت"
      />
      <Image
        width={width<480 ? "70px" : "10vw"}
        height={width<480 ? "auto" : "18.8vw"}
        top={width<480 ? "190px" : "31vh"}
        left={width<480 ? "285px" :"61vw"}
        opacity={step === 1 ? 0 : step === 2 ? 0 : 1}
        blur={false}
        before={false}
        transform={"none"}
        src={App2}
        alt="نرم افزار تیکمنت"
      />
      <Image
        width={width<480 ? "155px": "19vw"}
        height={width<480 ? "auto" :"24.7vw"}
        top={"16vh"}
        left={"45vw"}
        opacity={step === 1 ? 1 : step === 2 ? 1 : 0}
        blur={step === 1 ? true : step === 2 ? false : false}
        before={step === 1 ? true : step === 2 ? false : false}
        transform={
          step === 2
            ? "translateX(0vw) scale(1)"
            : step === 3
            ? "translateX(100vw) translateY(10vh) scale(0.25)"
            : width < 480
            ? "translateX(400px)"
            : "translateX(35vw) translateY(10vh) scale(0.5)"
        }
        src={FingerPrint1}
        alt="حسگر اثر انگشت تیکمنت"
      />
      <Image
        width={width<480 ? "110px" :"14.5vw"}
        height={width<480 ? "auto" : "23vw"}
        top={"25.8vh"}
        left={width<480 ? "77px" : "30vw"}
        opacity={step === 1 ? 0 : step === 2 ? 1 : 0}
        blur={false}
        before={false}
        transform={"none"}
        src={FingerPrint2}
        alt="حسگر اثر انگشت تیکمنت"
      />
    </section>
  );
}

const Image = styled.img<{
  width: string;
  height: string;
  top: string;
  left: string;
  opacity: number;
  blur: boolean;
  before: boolean;
  transform: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  opacity: ${({ opacity }) => opacity};
  filter: ${({ blur }) => (blur ? " blur(6px)" : " blur(0px)")};
  position: absolute;
  object-fit: contain;
  transform: ${({ transform }) => transform};
  transition: opacity ${({ opacity }) => (opacity ? "0.5s" : "0s")} ease-out,
    transform 0.5s ease-out;
  transition-delay: ${({ opacity, before }) =>
      before ? "0s" : opacity ? "0.5s" : "0s"},
    0s;
   
    
  @media (max-width:480px){
    // transform:none;
   
  }
`;
