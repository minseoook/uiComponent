import { useRef, useState, useEffect } from "react";
import styled from "./slide2.module.css";

const imageUrls: string[] = Array.from(
  { length: 20 },
  (_, index) => `https://picsum.photos/200/300?random=${index}`
);

const imagesPerPage = 4;

const Slide2 = () => {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(imagesPerPage);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setImages([
      ...imageUrls.slice(-imagesPerPage),
      ...imageUrls,
      ...imageUrls.slice(0, imagesPerPage),
    ]);
  }, []);

  const handleSlideChange = (direction: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + direction * imagesPerPage);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    const totalImages = images.length;
    if (currentIndex >= totalImages - imagesPerPage) {
      setCurrentIndex(imagesPerPage);
    } else if (currentIndex <= 0) {
      setCurrentIndex(totalImages - imagesPerPage * 2);
    }
  };

  const handlePrev = () => handleSlideChange(-1);
  const handleNext = () => handleSlideChange(1);

  return (
    <div className={styled.container}>
      <ul
        ref={sliderRef}
        className={styled.imgContainer}
        style={{
          transform: `translateX(-${(currentIndex / imagesPerPage) * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((url, index) => (
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
