import LazyImage from "../components/Lazy/LazyImage";
import MarkdownRenderer from "../components/Markdownrender";
import styled from "./lazyloading.module.css";

const markdown = `
# LazyImage 컴포넌트

\`LazyImage\` 컴포넌트는 지연 로딩(Lazy Loading) 기능을 구현하여 이미지가 뷰포트에 들어올 때만 이미지를 로드합니다. 이를 통해 페이지 성능을 향상시키고 불필요한 네트워크 요청을 줄일 수 있습니다.

## LazyImage 컴포넌트

\`LazyImage\`는 40개의 무작위 이미지를 생성하여 지연 로딩을 적용하는 컴포넌트입니다.

### 주요 특징:
- \`imageUrls\` 배열을 생성하여 무작위 이미지를 URL로 구성
- \`Images\` 컴포넌트를 매핑하여 각 이미지를 렌더링
- 각 이미지가 뷰포트에 들어오면 이미지를 로드하고, 그렇지 않으면 스켈레톤 UI를 표시

## Images 컴포넌트

\`Images\` 컴포넌트는 실제 이미지를 렌더링하며, \`useIntersectionObserver\` 훅을 사용하여 뷰포트와의 교차 상태를 관리합니다.

### 주요 특징:
- \`useIntersectionObserver\`를 사용하여 이미지가 뷰포트에 들어오는지 확인
- \`isIntersecting\` 상태에 따라 이미지를 로드하거나 스켈레톤 UI를 표시
- \`ref\`를 사용하여 Intersection Observer에 관찰할 요소를 지정

## useIntersectionObserver 훅

\`useIntersectionObserver\`는 Intersection Observer API를 사용하여 요소가 뷰포트에 들어오는지를 감지하는 커스텀 훅입니다.

### 주요 특징:
- \`isIntersecting\` 상태를 관리하여 요소가 교차하는지 여부를 표시
- \`ref\`를 반환하여 관찰할 요소를 지정
- \`useEffect\`를 사용하여 요소의 교차 상태를 업데이트하고, 요소가 교차할 경우 관찰을 해제

### 작동 방식:
- Intersection Observer를 생성하여 요소가 뷰포트에 들어올 때 \`isIntersecting\`를 \`true\`로 설정
- 요소가 뷰포트에 들어오면 관찰을 해제하여 성능을 최적화

이러한 구조는 지연 로딩을 통해 페이지의 성능을 향상시키고, 사용자 경험을 개선하는 데 도움을 줍니다.
`;

const LazyLoadingPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <LazyImage />
      </div>
    </div>
  );
};

export default LazyLoadingPage;
