import Dropdown from "../components/DropDown/DropDown";
import Dropdown2 from "../components/DropDown/Dropdown2";
import Dropdown3 from "../components/DropDown/Dropdown3";
import MarkdownRenderer from "../components/Markdownrender";
import styled from "./dropdown.module.css";

const markdown = `# 드롭다운 컴포넌트 구현

이번 문서에서는 드롭다운 컴포넌트를 구현하는 방법을 설명합니다. 드롭다운을 구현하는 데 필요한 props는 다음과 같습니다:

- **isOpen**: 드롭다운이 열려 있는지를 판단합니다. 리스트를 열거나 닫는 역할을 합니다.
- **selectedIndex**: 선택된 리스트 항목의 인덱스입니다.
- **toggle**: 드롭다운 트리거를 눌렀을 때 아래 리스트를 여는 토글 함수입니다.
- **selectIndex**: 리스트에서 선택된 항목의 인덱스를 선택하는 함수입니다.
- **items**: 드롭다운을 구현할 아이템들입니다.

## 구현 방식

드롭다운 컴포넌트를 구현하는 데 있어 두 가지 방법을 사용했습니다:

- **합성 컴포넌트와 Zustand 사용**
- **헤드리스 UI 방법**
- **select/option 태그 방법**

## 합성 컴포넌트와 Zustand 사용

합성 컴포넌트 방식은 드롭다운의 UI를 여러 개의 컴포넌트로 나누어 구현합니다. 각 컴포넌트는 다음과 같습니다:

- **DropdownContainer**: 드롭다운의 컨테이너 역할을 합니다.
- **DropdownTrigger**: 드롭다운을 여는 트리거입니다.
- **DropdownList**: 선택 가능한 리스트입니다.
- **DropdownItem**: 리스트의 각 항목입니다.

여기서 Zustand를 사용하여 드롭다운의 상태를 관리하고, 드롭다운의 로직을 컴포넌트에서 분리합니다. 이를 통해 상태 관리가 용이해지고, 코드의 재사용성이 높아집니다.

## 헤드리스 UI 방법

헤드리스 UI 방식은 UI 로직을 컴포넌트와 분리하여, 사용자가 필요에 따라 UI를 커스터마이즈할 수 있게 합니다. 이 방법을 선택한 이유는 UI가 변경될 경우 드롭다운의 여러 가지 UI가 필요할 수 있기 때문입니다.
조금더 설명을 하면 현재 위의 방식은 드랍다운의 ui가 고정되어 있습니다 그래서 다양한 ui의 기획에 대응하기 힘들기 때문에
ui를 개발자가 커스텀하기 쉽게 하기위한 방법인 헤드리스 방법을 사용했습니다

헤드리스 UI를 구현할 때는 다음과 같은 절차를 따릅니다:

- **로직 분리**: 드롭다운의 상태와 행동을 훅으로 분리합니다. 이 훅은 \`isOpen\`, \`selectedIndex\`, \`toggle\`, \`selectIndex\` 등을 관리합니다.
- **UI 커스터마이즈**: UI는 사용자가 원하는 방식으로 구현할 수 있도록 합니다. 이렇게 하면 로직과 UI를 결합하여 유연하게 사용할 수 있습니다.

## \`<select>\` 태그의 장점

 - **간편한 구현**: 기본 HTML 요소로 빠르게 구현할 수 있으며, 별도의 상태 관리 로직이 필요 없습니다.

- **브라우저 기본 스타일**: 모든 브라우저에서 일관된 동작을 하며, 기본적으로 접근성이 보장된 UI를 제공합니다.

- **자동 포커스 관리**: 기본적으로 포커스를 자동으로 관리하므로 추가적인 포커스 처리 로직이 필요 없습니다.


## \`<select>\` 태그의 단점

- **제한된 스타일링**: 브라우저의 기본 스타일을 벗어난 사용자 정의가 어려워 UI의 유연성이 제한됩니다.

- **복잡한 기능 구현 어려움**: 사용자 정의 기능(예: 검색, 다중 선택 등)을 구현하기 어려워 복잡한 드롭다운 동작을 필요로 하는 경우 제한적입니다.

- **확장성 부족**: 기본 HTML 드롭다운의 기능 이상을 요구할 경우, 커스터마이즈가 필요하며 추가적인 작업이 필요해질 수 있습니다.


## 결론

이 문서에서는 드롭다운 컴포넌트를 구현하기 위한 두 가지 방법에 대해 설명했습니다. 합성 컴포넌트와 Zustand를 사용하는 방법과, 헤드리스 UI 방식을 통해 드롭다운의 유연성을 높이고 유지 보수를 용이하게 할 수 있음을 보여주었습니다. 이러한 접근 방식을 통해 사용자는 다양한 UI 요구 사항에 쉽게 대응할 수 있습니다.
`;
const DropdownPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h3 className={styled.header}>합성컴포넌트+ 주스탄드</h3>
        <Dropdown.Container>
          <Dropdown.Trigger />
          <Dropdown.List />
        </Dropdown.Container>
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>훅을 사용한 헤드리스ui</h3>
        <Dropdown2 />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>select/option 태그 사용</h3>
        <Dropdown3 />
      </div>
    </div>
  );
};

export default DropdownPage;
