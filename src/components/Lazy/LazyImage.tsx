import styled from "./index.module.css";
import useIntersectionObserver from "./useIntersectionObserver";

const LazyImage = () => {
  const imageUrls = Array.from(
    { length: 40 },
    (_, index) => `https://picsum.photos/200/300?random=${index}`
  );

  return (
    <div className={styled.container}>
      {imageUrls.map((url, index) => (
        <Images key={index} src={url} />
      ))}
    </div>
  );
};

const Images = ({ src }: { src: string }) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`${styled.imagecontainer} ${
        isIntersecting ? "" : styled.lazy
      }`}
    >
      {isIntersecting ? (
        <img src={isIntersecting ? src : undefined} alt="random" />
      ) : (
        <Skeleton />
      )}
    </div>
  );
};

const Skeleton = () => {
  return <div className={styled.skeleton}></div>;
};
export default LazyImage;
