import Tooltip1 from "../components/ToolTip/Tooltip1";
import Tooltip2 from "../components/ToolTip/Tooltip2";
import styled from "./tooltip.module.css";

const TooltipPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 각 툴팁 컴포넌트마다 독립적인 상태를 사용하여 각 툴팁의
          active여부를 독립적으로 관리 <br />
          추가로 window에 이벤트를 걸어서 외부 클릭시 모든 툴팁 닫히게 구현
        </h3>
        <Tooltip1 />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 전역상태 관리를 사용하여 하나의 상태에 종속적으로 툴팁관리
          <br />
          하나 클릭시 하나만 열리고 다른 툴팁 클릭시 이전 툴팁 닫히고 클릭한
          툴팁 열림
        </h3>
        <Tooltip2 />
      </div>
    </div>
  );
};

export default TooltipPage;
