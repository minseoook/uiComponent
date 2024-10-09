import MarkdownRenderer from "../components/Markdownrender";
import AlertModal from "../components/Modal/AlertModal";
import LoginModal from "../components/Modal/LoginModal";
import NestedModal from "../components/Modal/nestingModal";
import styled from "./modal.module.css";

const markdown = `# Modal Component

모달 컴포넌트는 사용자가 상호작용할 수 있는 ui를 제공합니다. 사용자가 특정 작업을 수행하기 전에 중요한 정보나 결정을 요구하는 데 유용합니다. 이 컴포넌트는 합성 컴포넌트로 구성되어 있어, 다양한 방식으로 활용할 수 있습니다.

## 구조

### 1. **Modal.tsx**
기본 모달 컴포넌트로, 다음과 같은 기능을 제공합니다:
- **Props**:
  - \`open\`: 모달의 열림 상태를 결정합니다.
  - \`close\`: 모달을 닫는 함수입니다.
  - \`children\`: 모달 내에서 렌더링될 자식 요소를 받습니다.
  - \`outsideClick\`: 외부 영역 클릭 시 모달을 닫을지 여부를 설정합니다.

모달은 React Portal을 사용하여 DOM 트리 외부에 렌더링되며, 이를 통해 더 나은 사용자 경험을 제공합니다. 외부 영역을 클릭하면 모달이 닫히도록 할 수 있으며, 내부 콘텐츠를 클릭할 경우 이벤트 전파를 방지하여 모달이 닫히지 않도록 할 수 있습니다.

### 2. **합성 컴포넌트**
모달은 크게 다음의 세 가지 부분으로 나누어져 있습니다:
- **Modal Header**: 모달의 제목을 표시하며, 닫기 버튼을 포함합니다.
- **Modal Content**: 모달의 주 내용을 담고 있으며, 다양한 요소(텍스트, 이미지 등)를 포함할 수 있습니다.
- **Modal Footer**: 모달의 푸터 부분으로, 버튼이나 추가 정보를 포함합니다.

이러한 구조는 모달의 디자인이 여러 곳에서 사용되며, 대체로 비슷한 형태를 유지하는데 유용합니다. 또한, 각 모달은 필요에 따라 헤더, 푸터 등이 있을 수도 있고 없을 수도 있습니다. 푸터의 버튼이 하나일 수도 있고 여러 개일 수도 있기 때문에, 이러한 다양한 요구 사항을 충족하기 위해 각 컴포넌트를 개별적으로 설계하고 조립할 수 있도록 하였습니다. 

이렇게 합성 컴포넌트 패턴을 사용하면, 각 요소를 레고처럼 조립하여 실제 사용할 모달을 생성할 수 있어, 재사용성과 유연성을 높일 수 있습니다.

### 3. **모달 로직의 분리**
모달의 로직은 별도의 훅으로 분리하여 헤드리스 UI 방식으로 구현했습니다. 이 방식은 UI와 로직을 분리함으로써 모달의 사용성을 더욱 유연하게 만들어줍니다. 예를 들어, 모달의 상태 관리 및 이벤트 처리 로직을 분리하여 다양한 UI 디자인에 쉽게 적용할 수 있습니다.

## 사용 예시

### 1. **AlertModal.tsx**
- **특징**:
  - 경고 메시지를 표시하는 모달입니다.
  - 사용자가 중요한 메시지를 확인하고 결정할 수 있도록 돕습니다.
- **구성**: 
  - 버튼 클릭 시 경고 모달이 열리며, 사용자는 메시지를 읽고 확인 버튼을 통해 모달을 닫을 수 있습니다.

### 2. **LoginModal.tsx**
- **특징**:
  - 사용자 로그인 정보를 입력받는 모달입니다.
  - 사용자 이름, 이메일, 비밀번호를 입력받아 처리합니다.
- **구성**: 
  - 사용자가 로그인 정보를 입력하고 제출하면, 입력된 데이터를 콘솔에 출력하고 모달을 닫습니다. 이를 통해 간편한 로그인 절차를 제공합니다.

### 3. **NestedModal.tsx**
- **특징**:
  - 외부 모달 내에서 내부 모달을 여는 기능을 제공합니다.
  - 중첩된 모달 구조로 사용자가 더욱 복잡한 상호작용을 할 수 있도록 돕습니다.
- **구성**: 
  - 외부 모달에서 버튼 클릭 시 내부 모달이 열리며, 사용자는 두 개의 모달 간에 상호작용할 수 있습니다. 모든 모달을 닫는 옵션도 제공하여 유연한 사용자 경험을 제공합니다.

## 결론
이 모달 컴포넌트는 사용자가 정보를 쉽게 확인하고 조치를 취할 수 있도록 돕는 유용한 UI 요소입니다. 합성 컴포넌트를 활용하여 다양한 구성 요소를 독립적으로 관리할 수 있으며, 재사용성과 유연성을 높입니다. 로직과 UI를 분리하여 다양한 요구 사항을 충족할 수 있도록 하였습니다.
`;
const ModalPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <AlertModal message="경고입니다!!!" />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <LoginModal />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <NestedModal />
      </div>
    </div>
  );
};

export default ModalPage;
