import AutoComplete from "../components/AutoComplete/AutoComplete";
import MarkdownRenderer from "../components/Markdownrender";
import styled from "./autocomplete.module.css";

const markdown = `# 자동 완성 컴포넌트 (AutoComplete)

이 컴포넌트는 사용자가 입력한 내용을 기반으로 자동 완성 목록을 표시합니다.

## 구조

1. **상태 관리**: \`useAutocomplete\` 훅을 사용하여 사용자가 입력한 값과 선택된 항목을 관리합니다.
2. **컴포넌트 구성**:
   - **DropdownContainer**: 드롭다운의 기본 컨테이너입니다.
   - **DropdownTrigger**: 사용자가 입력하는 텍스트 필드입니다.
   - **DropdownList**: 자동 완성 제안을 보여주는 리스트입니다.
   - **DropdownItem**: 리스트의 각 항목을 나타냅니다.

## 코드 설명

### \`AutoComplete\` 컴포넌트

- \`useAutocomplete\` 훅을 사용하여 상태를 초기화합니다.
- 선택된 텍스트와 리스트 항목을 기반으로 드롭다운을 구성합니다.

### \`DropdownContainer\`

- 자식 컴포넌트를 래핑하는 단순한 DIV입니다.

### \`DropdownTrigger\`

- 사용자가 입력할 수 있는 텍스트 필드입니다.
- 입력값이 변경될 때마다 \`valuedebounce\` 상태를 업데이트합니다.
- 300ms의 디바운스를 적용하여 입력이 끝난 후 \`setValue\`를 호출합니다.

### \`DropdownList\`

- \`lists\`가 비어있지 않을 경우에만 리스트를 렌더링합니다.

### \`DropdownItem\`

- 각 리스트 항목을 렌더링하며, 클릭 시 선택된 항목을 업데이트합니다.

### \`useAutocomplete\` 훅

- \`value\`, \`selectedtext\` 상태와 \`selectItem\` 함수를 관리합니다.
- 입력 값에 기반하여 필터링된 리스트를 생성합니다.
- 사용자의 입력을 기준으로 아이템을 filter한후 리턴해줍니다
- 리스트를 클릭하면 selectItem함수 실행

## 사용 예시

이 컴포넌트를 사용하려면 \`autocompleteData\` 배열을 제공하면 됩니다. 
`;

const AutoCompletePage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <AutoComplete />
      </div>
    </div>
  );
};

export default AutoCompletePage;
