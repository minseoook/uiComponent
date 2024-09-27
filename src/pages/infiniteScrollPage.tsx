import Image from "../components/InfiniteScroll/Image";
import styled from "./infiniteScroll.module.css";
import useInfiniteScroll from "../components/InfiniteScroll/useInfiniteScroll";
import { useEffect } from "react";
import useIntersectionObserver from "../components/InfiniteScroll/useIntersectionObserver";

const InfiniteScrollPage = () => {
  const { images, fetchNextPage, isLoading } = useInfiniteScroll(
    Array.from(
      { length: 12 },
      (_, index) => `https://picsum.photos/200/300?random=${index}`
    )
  );
  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      fetchNextPage();
    }
  }, [isIntersecting, isLoading, fetchNextPage]);
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 리액트쿼리 없이 리액트쿼리 스럽게 + 인터섹션 옵저버를
          사용하여 무한 스크롤 구현
        </h3>
        <div className={styled.imgcontainer}>
          {images.map((data, i) => (
            <Image src={data} key={i} />
          ))}
        </div>
      </div>
      {isLoading && <Loading />}
      <div ref={ref} style={{ backgroundColor: "red", height: "20px" }}>
        트리거 입니다
      </div>
    </div>
  );
};

const Loading = () => {
  return (
    <div className={styled.spinner}>
      <div className={styled.doubleBounce1}></div>
      <div className={styled.doubleBounce2}></div>
    </div>
  );
};

export default InfiniteScrollPage;
