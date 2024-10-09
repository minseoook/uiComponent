import MarkdownRenderer from "../components/Markdownrender";
import Tooltip1 from "../components/ToolTip/Tooltip1";
import Tooltip2 from "../components/ToolTip/Tooltip2";
import styled from "./tooltip.module.css";

const markdown = `
# Tooltip 컴포넌트

툴팁 컴포넌트를 2가지 방식으로 구현해 보겠습니다 하나는 툴팁 각각의 독립적인 상태를 가진 툴팁과 주스탄드에서 모든 툴팁에 종속적인 상태를 가진 툴팁입니다
## Tooltip1 컴포넌트

\`Tooltip1\`은 상태 관리로 \`useState\` 훅을 사용하여 구현된 기본 툴팁 UI입니다. 사용자가 버튼을 클릭하면 해당 버튼과 관련된 설명이 표시됩니다.

### 주요 특징:
- \`isOpen\` 상태를 사용하여 툴팁의 열림/닫힘 상태를 관리
- 클릭 이벤트가 발생할 때 툴팁을 토글하는 \`handleClick\` 함수 구현
- 툴팁 외부 클릭 시(useRef 이용) 툴팁을 닫기 위한 \`useEffect\` 훅 사용

### 클릭 외부 처리
- \`useEffect\`를 사용하여 툴팁이 열릴 때만 클릭 이벤트 리스너를 등록
- 클릭 외부 감지를 위해 \`tooltipref\`를 사용하여 툴팁 외부 클릭 시 상태를 업데이트
- ref.current.contain(e.target)코드 이용

## Tooltip2 컴포넌트

\`Tooltip2\`는 Zustand 상태 관리 라이브러리를 사용하여 구현된 툴팁 UI입니다. 이 컴포넌트는 각 툴팁의 열림 상태를 글로벌 상태에서 관리합니다.

### 주요 특징:
- Zustand를 사용하여 현재 열려 있는 툴팁의 인덱스를 관리
- \`handleClick\` 함수에서 클릭된 툴팁의 ID를 통해 상태를 업데이트
- 툴팁이 열려있을 때 클릭 이벤트를 감지하여 외부 클릭 시 툴팁을 닫는 \`useEffect\` 훅 사용

### 글로벌 상태 관리
- Zustand를 사용하여 상태를 중앙 집중화하여 툴팁 간의 상태 관리 간소화
- 다른 컴포넌트와의 상태 공유가 용이

이 두 가지 방식의 툴팁 컴포넌트는 각각의 상태 관리 접근 방식에 따라 다르게 구현됩니다. 이를 통해 상태 관리의 유연성과 유지 보수성을 높일 수 있습니다.
`;

const TooltipPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h2 className={styled.title}>툴팁1</h2>
        <Tooltip1 />
      </div>
      <div className={styled.item}>
        <h2 className={styled.title}>툴팁2</h2>
        <Tooltip2 />
      </div>
    </div>
  );
};

export default TooltipPage;
