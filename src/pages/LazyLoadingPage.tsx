import LazyImage from "../components/Lazy/LazyImage";
import styled from "./lazyloading.module.css";

const LazyLoadingPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 인터섹션 옵저버를 사용하여 교차여부를 판단하여 이미지를
          불러오거나 스켈레톤 ui를 보여줍니다
        </h3>
        <LazyImage />
      </div>
    </div>
  );
};

export default LazyLoadingPage;
