import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  const checkSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("width:", width);
  }, [width]);

  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return window.removeEventListener("resize", checkSize);
  }, []);

  return width;
}
