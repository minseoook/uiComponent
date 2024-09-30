// Slide1.js
import { useRef, useState } from "react";
import styled from "./slide1.module.css";

const imageUrls = Array.from(
  { length: 5 },
  (_, index) => `https://picsum.photos/200/300?random=${index}`
);

const Slide1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(false);

  const handlePrev = () => {
    if (animationRef.current) return;
    setCurrentIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
    animationRef.current = true;
  };

  const handleNext = () => {
    if (animationRef.current) return;
    setCurrentIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
    animationRef.current = true;
  };

  return (
    <div className={styled.container}>
      <ul
        className={styled.imgContainer}
        style={{
          transform: `translateX(-${currentIndex * 1000}px)`,
        }}
        onTransitionEnd={() => (animationRef.current = false)}
      >
        {imageUrls.map((url, index) => (
          <li key={index} className={styled.imgs}>
            <img className={styled.img} src={url} alt={`Image ${index}`} />
          </li>
        ))}
      </ul>
      <button
        className={`${styled.navButton} ${styled.navLeft}`}
        onClick={handlePrev}
      >
        {"<"}
      </button>
      <button
        className={`${styled.navButton} ${styled.navRight}`}
        onClick={handleNext}
      >
        {">"}
      </button>
    </div>
  );
};

export default Slide1;
