import Accordian1 from "../components/Accordian/Accordian1";
import Accordian2 from "../components/Accordian/Accordian2";
import Accordian3 from "../components/Accordian/Accordian3";
import MarkdownRenderer from "../components/Markdownrender";
import styled from "./accordian.module.css";

const markdown = `
# 아코디언 컴포넌트 

아코디언 컴포넌트를 3가지 다른 방식으로 만들어 보며 각각의 주요 특징을 알아보겠습니다

## Accordian1 컴포넌트

\`Accordian1\`은 React의 상태 관리(\`useState\`)를 사용하여 구현된 아코디언 UI입니다. 이 컴포넌트는 여러 개의 아코디언 아이템을 렌더링하며, 각 아이템을 클릭할 때마다 해당 아이템의 세부 내용이 열리고 닫히는 방식으로 동작합니다.

### 주요 특징:
- \`useState\` 훅을 사용하여 현재 활성화된 아코디언 아이템의 상태 관리
- 아이템 클릭 시 상태를 업데이트하는 \`handleClick\` 함수 구현
- \`accordianData\`를 매핑하여 각 아코디언 아이템 렌더링

### AccordianItem 하위 컴포넌트
- 개별 아코디언 아이템을 렌더링
- 제목 클릭 시 상태 토글
- 활성 상태에 따라 설명을 조건부로 렌더링

## Accordian2 컴포넌트

\`Accordian2\`는 아코디언 아이템의 상세 설명이 비활성 상태에서도 검색 가능한 구현 방식입니다.

### 주요 특징:
- CSS \`opacity\` 속성을 사용하여 비활성 상태의 콘텐츠를 숨김
- 검색 기능(ctrl + f)을 통해 숨겨진 콘텐츠도 검색 가능

## Accordian3 컴포넌트

\`Accordian3\`는 JavaScript 없이 HTML만으로 구현된 아코디언입니다.

### 주요 특징:
- HTML \`<details>\` 태그를 사용하여 아코디언 기능 구현
- 최소한의 JavaScript로 순수 HTML/CSS 기반 동작

이 세 가지 구현 방식은 각각 다른 접근 방법을 사용하여 아코디언 UI를 구현합니다. 이를 통해 다양한 상황과 요구사항에 맞는 유연한 UI 개발 방법을 보여줍니다.
`;

const AccordianPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h2 className={styled.title}>아코디언1</h2>
        <Accordian1 />
      </div>
      <div className={styled.item}>
        <h2 className={styled.title}>아코디언2</h2>
        <Accordian2 />
      </div>
      <div className={styled.item}>
        <h2 className={styled.title}>아코디언3</h2>
        <Accordian3 />
      </div>
    </div>
  );
};

export default AccordianPage;
