import Image from "../components/InfiniteScroll/Image";
import styled from "./infiniteScroll.module.css";
import useInfiniteScroll from "../components/InfiniteScroll/useInfiniteScroll";
import { useEffect } from "react";
import useIntersectionObserver from "../components/InfiniteScroll/useIntersectionObserver";
import MarkdownRenderer from "../components/Markdownrender";

const markdown = `# InfiniteScroll 컴포넌트

- 인터섹션 옵저버와 리액트쿼리와 유사하게 만든 fetcher를 사용하여 라이브러리 없는 무한스크롤 구현입니다

## 주요 특징:
- **무한 스크롤 구현**: 사용자가 페이지의 하단에 도달하면 추가 이미지를 자동으로 로드합니다.
- **이미지 로드 상태 관리**: 이미지를 로드하는 동안 로딩 애니메이션을 표시하여 사용자에게 현재 상태를 알려줍니다.

## 컴포넌트 구조:

### 1. **useInfiniteScroll 훅**
- **목적**: 초기 이미지 배열을 기반으로 추가 이미지를 로드하는 로직을 관리합니다.
- **상태 관리**:
  - \`images\`: 현재 로드된 이미지 배열을 저장합니다.
  - \`isLoading\`: 이미지가 로드 중인지 여부를 저장합니다.
- **fetchNextPage 함수**:
  - 새로운 이미지를 생성하여 기존 이미지 배열에 추가합니다.
  - 1초 후에 로딩 상태를 업데이트하여 사용자에게 로딩이 완료되었음을 알립니다.

### 2. **useIntersectionObserver 훅**
- **목적**: 요소가 뷰포트에 들어왔는지를 감지하여 무한 스크롤을 트리거합니다.
- **상태 관리**:
  - \`isIntersecting\`: 요소가 뷰포트에 교차하는지 여부를 저장합니다.
- **Intersection Observer 사용**: 요소가 뷰포트에 들어오면 \`isIntersecting\`를 업데이트하여 무한 스크롤을 활성화합니다.

### 3. **InfiniteScrollPage 컴포넌트**
- **렌더링**:
  - 이미지를 렌더링하고, 로딩 중일 때 로딩 애니메이션을 표시합니다.
  - 스크롤을 통해 하단에 있는 트리거 요소에 도달하면 \`fetchNextPage\`를 호출하여 다음 이미지를 가져옵니다.
- **Loading 컴포넌트**: 로딩 애니메이션을 렌더링하여 사용자에게 현재 로드 중임을 알립니다.
`;

const InfiniteScrollPage = () => {
  const { images, fetchNextPage, isLoading } = useInfiniteScroll(
    Array.from(
      { length: 12 },
      (_, index) => `https://picsum.photos/200/300?random=${index}`
    )
  );
  const { ref, isIntersecting } = useIntersectionObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      fetchNextPage();
    }
  }, [isIntersecting, isLoading, fetchNextPage]);
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
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
