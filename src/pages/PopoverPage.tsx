import { useRef, useState } from "react";
import styles from "./popover.module.css";
import Popover from "../components/Popover/Popover";
import Popover2 from "../components/Popover/Popover2";
import MarkdownRenderer from "../components/Markdownrender";

const markdown = `# Popover 컴포넌트

- 두 가지의 방식으로 팝오버를 구현해보겠습니다 하나는 가장 기본적인 팝오버입니다 상태에 따라 버튼 아래에 팝오버 컴포넌트를 렌더합니다
 - 두번째는 포탈을 이용하여 팝오버를 렌더합니다, 포탈을 사용한 이유는 1번의 경우 만약 부모에 overflow : hidden이 걸린다면 팝오버가 안보이는
문제가 있습니다 이를 해결하기 위해 포탈을 이용했습니다
## Popover 컴포넌트

\`Popover\`는 사용자가 버튼을 클릭할 때 나타나는 기본적인 팝오버 UI입니다. 사용자가 버튼을 클릭하면 해당 버튼과 관련된 추가 옵션이 표시됩니다.

### 주요 특징:
- \`isOpen\` 상태를 사용하여 팝오버의 열림/닫힘 상태를 관리합니다.
- 클릭 이벤트가 발생할 때 팝오버를 토글하는 \`handleClick\` 함수가 구현되어 있습니다.
- 팝오버 외부를 클릭할 경우 팝오버를 닫기 위한 \`onClose\` prop이 사용됩니다.

### 외부 클릭 처리
- 팝오버가 열릴 때 \`onClose\`를 통해 외부 클릭 이벤트를 처리합니다.
- 외부 클릭 시 \`onClose\` 함수를 호출하여 팝오버를 닫습니다.

## Popover2 컴포넌트

\`Popover2\`는 포탈을 사용한 컴포넌트입니다 포탈을 사용하게 되며 버튼의 위치를 알수없기 때문에 ref를 프랍으로 내려주어 동적으로 위치를 계산하여 렌더링합니다

### 주요 특징:
- \`anchorEl\`을 사용하여 팝오버가 기준으로 삼는 버튼의 DOM 요소를 참조합니다.
- \`useEffect\` 훅을 통해 버튼의 위치와 크기를 기반으로 팝오버의 위치를 설정합니다.
- 팝오버의 위치가 설정될 때까지 팝오버를 숨기는 \`isPositioned\` 상태가 사용됩니다.

### 위치 계산
- 버튼의 위치를 가져오기 위해 \`getBoundingClientRect()\` 메서드를 사용하여 팝오버의 위치를 계산합니다.
- 버튼 중앙에 맞춰 팝오버가 표시되도록 \`setPosition\`을 통해 동적으로 위치를 업데이트합니다.

이 두 가지 팝오버 컴포넌트는 각기 다른 방식으로 구현되며, 각각의 상황에 맞는 유연한 UI를 제공합니다. 상태 관리와 위치 계산을 통해 사용자 경험을 향상시킬 수 있습니다.
`;
const PopoverPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef2 = useRef<HTMLButtonElement | null>(null);
  const buttonRef3 = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen2);
  };

  return (
    <div className={styles.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styles.item}>
        <button className={styles.button} onClick={handleClick} ref={buttonRef}>
          클릭시 팝오버
        </button>
        {isOpen && <Popover onClose={() => setIsOpen(false)} />}
      </div>
      <div className={styles.item}>
        <button
          className={styles.button}
          onClick={handleClick2}
          ref={buttonRef2}
        >
          클릭시 팝오버
        </button>
        {isOpen2 && (
          <Popover2
            onClose={() => setIsOpen2(false)}
            anchorEl={buttonRef2.current}
          />
        )}
      </div>
      <div className={styles.item}>
        <button
          className={styles.button}
          onClick={handleClick3}
          ref={buttonRef3}
        >
          클릭시 팝오버
        </button>
        {isOpen3 && (
          <Popover2
            onClose={() => setIsOpen3(false)}
            anchorEl={buttonRef3.current}
          />
        )}
      </div>
    </div>
  );
};

export default PopoverPage;
