import MarkdownRenderer from "../components/Markdownrender";
import Slide1 from "../components/Slide/Slide1";
import Slide2 from "../components/Slide/Slide2";
import Slide3 from "../components/Slide/Slide3";
import styles from "./slide.module.css";

const markdown = `# 슬라이드 컴포넌트

이번 문서에서는 세 가지 슬라이드 컴포넌트를 구현한 내용을 설명합니다. 각각의 컴포넌트는 다양한 방식으로 이미지를 슬라이드할 수 있는 기능을 제공합니다.

## Slide1 컴포넌트

\`Slide1\`은 기본적인 이미지 슬라이드 컴포넌트로, 사용자가 좌우 버튼을 클릭하여 이미지를 전환할 수 있습니다.

### 주요 특징:
- **상태 관리**: \`currentIndex\` 상태를 사용하여 현재 표시할 이미지의 인덱스를 관리합니다.
- **애니메이션 처리**: 슬라이드 애니메이션을 통해 매끄러운 전환을 제공합니다(인덱스를 이용하여 translateX).
- **이미지 전환**: 좌우 버튼 클릭 시 이미지 인덱스를 변경하여 슬라이드를 구현합니다.

## Slide2 컴포넌트

\`Slide2\`는 여러 이미지를 한 번에 슬라이드할 수 있는 컴포넌트로, 사용자가 클릭할 때마다 이미지 그룹을 전환합니다.

### 주요 특징:
- **다수 이미지 표시**: 한 번에 여러 이미지를 표시할 수 있도록 설계되었습니다.
- **이미지 수 관리**: \`imagesPerPage\` 변수를 사용하여 한 페이지에 표시할 이미지 수를 관리합니다.
- **애니메이션**: 슬라이드 애니메이션을 사용하여 매끄러운 전환을 제공합니다.

## Slide3 컴포넌트

\`Slide3\`는 무한 슬라이드 기능을 구현한 컴포넌트로, 사용자가 좌우 버튼을 클릭할 때마다 슬라이드가 부드럽게 전환됩니다.

### 주요 특징:
- **무한 슬라이드**: 슬라이드의 처음과 끝에서 무한하게 반복할 수 있도록 구현되었습니다.
- **애니메이션 상태 관리**: 슬라이드 전환 중 애니메이션을 관리하여 사용자 경험을 향상시킵니다.
- **위치 계산**: 슬라이드의 위치를 동적으로 계산하여 부드러운 전환을 제공합니다.

## 무한 슬라이드 아이디어

무한 슬라이드 구현 시, 기본 아이디어는 사용자가 마지막 이미지에 도달했을 때 첫 번째 이미지로 부드럽게 넘어갈 수 있도록 하는 것입니다. 이를 위해 다음과 같은 접근 방식을 사용했습니다

**이미지 배열 복제**: 슬라이드가 자연스럽게 반복되도록 하기 위해, 원래 이미지 배열의 앞과 뒤에 복제된 이미지를 추가했습니다(가장 처음 4개 가장 끝 4개를 이어붙임). 


**위치 조정**: 마지막에서 다음을 누르면 이어붙인 이미지로(처음 4개) 슬라이드를 한후 애니메이션이 끝나면 만약 이어붙인 인덱스에 위치할경우 원래 처음 인덱스로 이동시킵니다 이부분은 사용자가 체감을 할수가 없기때문에 좋은 방식입니다

## 결론

이 세 가지 슬라이드 컴포넌트는 각각 다른 방식으로 이미지를 슬라이드할 수 있는 기능을 제공합니다. 기본 슬라이드에서 시작하여 다수의 이미지를 동시에 보여주는 슬라이드, 그리고 무한 슬라이드 기능까지 구현하였습니다. 각 컴포넌트의 상태 관리와 애니메이션 처리 방법을 통해 사용자의 인터페이스 경험을 향상시킬 수 있습니다.
`;
const SlidePage = () => {
  return (
    <div className={styles.container}>
      <MarkdownRenderer content={markdown} />
      <div className={styles.item}>
        <h2 className={styles.title}>slide1</h2>
        <Slide1 />
      </div>

      <div className={styles.item}>
        <h2 className={styles.title}>slide2</h2>
        <Slide2 />
      </div>

      <div className={styles.item}>
        <h2 className={styles.title}>slide3</h2>
        <Slide3 />
      </div>
    </div>
  );
};

export default SlidePage;
