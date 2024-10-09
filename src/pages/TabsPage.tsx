import MarkdownRenderer from "../components/Markdownrender";
import Tab1 from "../components/Tabs/Tab1";
import Tab2 from "../components/Tabs/Tab2";
import styled from "./tabs.module.css";
const markdown = `
# 탭 컴포넌트

상태로 구현한 탭 컴포넌트와 훅을 사용하여 ui,로직을 분리한 헤드리스 ui로 만든 탭 컴포넌트를 알아보겠습니다

## Tab1 컴포넌트

\`Tab1\`은 React의 상태 관리(\`useState\`)를 사용하여 구현된 기본 탭 UI입니다. 이 컴포넌트는 사용자가 선택한 탭에 따라 이메일과 비밀번호 입력 필드를 렌더링합니다.

### 주요 특징:
- \`useState\` 훅을 사용하여 현재 선택된 탭의 상태 관리
- 탭 클릭 시 상태를 업데이트하는 \`handleClick\` 함수 구현
- \`tabsData\`를 매핑하여 각 탭을 렌더링

### 탭 아이템 렌더링
- 각 탭 아이템을 클릭하면 해당 탭의 콘텐츠가 활성화됨
- 선택된 탭에 대한 스타일링을 적용하여 시각적 피드백 제공

## Tab2 컴포넌트

\`Tab2\`는 \`useTabs\` 커스텀 훅을 사용하여 탭 상태를 관리하는 방식으로 구현된 탭 UI입니다. 이 컴포넌트는 코드의 재사용성을 높이기 위해 상태 관리 로직을 분리합니다.

### 주요 특징:
- \`useTabs\` 훅을 통해 탭의 상태와 선택된 탭 정보를 관리
- 탭 클릭 시 해당 탭의 콘텐츠가 표시되도록 처리
- 코드 구조가 깔끔하고 유지보수가 용이함

### 코드 재사용성
- 탭 관련 상태 및 클릭 핸들러 로직을 훅으로 분리하여 다른 컴포넌트에서도 쉽게 사용할 수 있음

이 두 가지 방식의 탭 컴포넌트는 각각 다른 접근 방법을 사용하여 사용자 인터페이스를 개선하는 방법을 보여줍니다. 이를 통해 다양한 상황과 요구사항에 맞는 유연한 UI 개발이 가능해집니다.
`;

const TabsPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h2 className={styled.title}>탭1</h2>
        <Tab1 />
      </div>
      <div className={styled.item}>
        <h2 className={styled.title}>탭2</h2>
        <Tab2 />
      </div>
    </div>
  );
};

export default TabsPage;
