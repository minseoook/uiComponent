import { useRef, useState } from "react";
import styled from "./slide2.module.css";

const imageUrls = Array.from(
  { length: 20 },
  (_, index) => `https://picsum.photos/200/300?random=${index}`
);

const imagesPerPage = 4;

const Slide2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const animationRef = useRef(false);

  const handlePrev = () => {
    if (animationRef.current) return;
    setCurrentIndex((prev) =>
      prev === 0 ? imageUrls.length - imagesPerPage : prev - imagesPerPage
    );
    animationRef.current = true;
  };

  const handleNext = () => {
    if (animationRef.current) return;
    setCurrentIndex((prev) =>
      prev >= imageUrls.length - imagesPerPage ? 0 : prev + imagesPerPage
    );
    animationRef.current = true;
  };

  return (
    <div className={styled.container}>
      <ul
        className={styled.imgContainer}
        style={{
          transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)`,
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

export default Slide2;
