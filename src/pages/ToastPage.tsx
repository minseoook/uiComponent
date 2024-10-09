import { createPortal } from "react-dom";
import { useToast } from "../store/snackbarStore";
import styled from "./toast.module.css";
import { useEffect, useRef } from "react";
import useToast2 from "../components/Toast/useToast";
import MarkdownRenderer from "../components/Markdownrender";

const markdown = `# Toast 컴포넌트 

Toast 컴포넌트는 사용자에게 임시 알림을 표시하는 친숙한 방법을 제공합니다. 포탈을 사용하여 렌더링하여, 애플리케이션의 어느 지점에서든 토스트가 나타날 수 있습니다.

## 개요

### 주요 기능
- **동적 알림**: 사용자 상호작용에 따라 토스트 메시지를 동적으로 생성하고 표시할 수 있습니다.
- **애니메이션**: 토스트에는 부드러운 사용자 경험을 위한 open 및 close 애니메이션이 있습니다.
- **상태 관리**: Zustand를 사용하여 중앙 집중식 토스트 상태 관리를 통해 애플리케이션 전반에서 쉽게 토스트를 처리할 수 있습니다.
- **상태 관리**: 훅을 사용하여 각 토스트마다 개별 상태관리를 하여 토스트를 처리할수 있습니다


## 컴포넌트

### \`ToastPage\`
이것은 토스트 알림을 트리거하는 버튼과 토스트 항목 자체를 렌더링하는 주요 컴포넌트입니다.

**상태:**
- \`toasts\`:주스탄드, 훅에서 만든 토스트 상태를 가져와 아래 toastItem을 렌더링

**함수:**
- \`handleClick\`:주스탄드, 훅에서 만든 토스트를 open하는 함수를 가져와 실행시키는 함수 입니다

### \`ToastItem\`
이 컴포넌트는 개별 토스트 알림을 나타냅니다.(포탈을 이용하여 렌더링)

**Props:**
- \`id\`: 토스트의 고유 식별자입니다.
- \`children\`: 토스트에 표시될 콘텐츠입니다.
- \`isOpen\`: 토스트가 열려 있는지 여부를 나타내는 불리언 값입니다.
- \`index\`: 토스트의 순서를 나타내는 인덱스입니다.(순서를 기준으로 토스트아이템 정렬 css 구현)


**애니메이션 동작 방식:**
- \`ToastItem\` 컴포넌트는 \`isOpen\` 값에 따라 CSS 클래스가 변경되며, 이를 통해 애니메이션 효과가 적용됩니다. 토스트가 닫힐 때는 \`transitionend\` 이벤트 리스너를 통해 종료 애니메이션이 완료된 후 \`removeToast\` 함수를 호출하여 토스트를 상태에서 제거합니다.

## 상태 관리: Zustand vs 지역 상태

### Zustand 사용의 장점:
- **중앙 집중식 상태 관리**: 애플리케이션의 여러 컴포넌트에서 공유하는 상태를 쉽게 관리할 수 있습니다.
- **간편한 API**: Zustand는 사용하기 쉬운 API를 제공하여 상태 업데이트 및 구독을 간단하게 수행할 수 있습니다.
- **성능 최적화**: 상태 변경 시 필요할 때만 리렌더링하여 성능을 개선할 수 있습니다.

### Zustand 사용의 단점:
- **추가적인 학습 곡선**: Zustand와 같은 상태 관리 라이브러리를 사용하는 데 추가적인 학습이 필요할 수 있습니다.
- **작은 애플리케이션에서는 과도한 사용**: 애플리케이션이 작을 경우, 지역 상태로도 충분히 관리할 수 있는데 Zustand를 사용하는 것이 과도할 수 있습니다.

### 지역 상태 관리의 장점:
- **단순성**: 작은 컴포넌트나 애플리케이션에서 지역 상태를 사용하는 것이 더 직관적이고 간단합니다.
- **불필요한 의존성 제거**: 상태 관리 라이브러리를 추가할 필요가 없으므로 의존성을 줄일 수 있습니다.

### 지역 상태 관리의 단점:
- **상태 공유의 어려움**: 여러 컴포넌트에서 동일한 상태를 공유할 필요가 있는 경우, 프랍스 드릴링이 필요합니다


## zustand / 훅 구현 설명

### \`toasts\`
- **기능**: 토스트가 생성이되면 생성된 토스트를 관리하는 배열.

### \`createToast\`
- **인자**: \`id\` (string), \`children\` (ReactNode)
- **기능**: 받을 인자를 사용하여 새로운 토스트 값을 만든후 upsertToast함수를 실행합니다

### \`upsertToast\`
- **인자**: \`newToast\` (Toast 타입)
- **기능**: 새로운 토스트를 추가하거나 기존 토스트를 업데이트합니다.

### \`removeToast\`
- **인자**: \`id\` (string)
- **기능**: 주어진 ID를 가진 토스트를 상태에서 제거합니다.

이 문서는 Toast 컴포넌트의 기능, 상태 관리 방법 및 사용법에 대한 포괄적인 개요를 제공합니다. 이를 통해 개발자는 쉽게 토스트 알림 기능을 이해하고 구현할 수 있습니다.`;

const ToastPage = () => {
  const { toasts, createToast } = useToast();
  const { toasts: t2, createToast: ct2, removeToast: rt2 } = useToast2();

  const handleClick = () => {
    createToast("1", <div>토스트 입니다</div>);
  };
  const handleClick2 = () => {
    createToast("2", <div>토스트2 입니다</div>);
  };
  const handleClick3 = () => {
    ct2(<div>토스트3 입니다</div>);
  };

  return (
    <div className={styled.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styled.item}>
        <button onClick={handleClick}>토스트 오픈</button>
        <button onClick={handleClick2}>토스트2 오픈</button>
      </div>
      <div className={styled.item}>
        <button onClick={handleClick3}>토스트3 오픈</button>
      </div>
      {toasts.map((snackbar, index) => (
        <ToastItem key={snackbar.id} {...snackbar} index={index} />
      ))}
      {t2.map((snackbar, index) => (
        <ToastItem
          key={snackbar.id}
          {...snackbar}
          index={index}
          another
          r2={rt2}
        />
      ))}
    </div>
  );
};

export const ToastItem = ({
  id,
  children,
  isOpen,
  index,
  another,
  r2,
}: {
  id: string;
  children: React.ReactNode;
  isOpen: boolean;
  index: number;
  another?: boolean;
  r2?: (id: string) => void;
}) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const { removeToast } = useToast();

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (!isOpen) {
        removeToast(id);
        if (r2) {
          r2(id);
        }
      }
    };

    toastRef.current?.addEventListener("transitionend", handleAnimationEnd);

    return () => {
      toastRef.current?.removeEventListener(
        "transitionend",
        handleAnimationEnd
      );
    };
  }, [isOpen, id, removeToast, r2]);

  return createPortal(
    <div
      ref={toastRef}
      className={`${styled.snackbar} ${isOpen ? styled.open : styled.close}`}
      style={{
        bottom: `${index * 90 + 20}px`,
        width: "300px",
        left: another ? "20px" : undefined,
      }}
    >
      {children}
    </div>,
    document.querySelector("#snackbarRoot")!
  );
};

export default ToastPage;
