import MarkdownRenderer from "../components/Markdownrender";
import Tooltip1 from "../components/ToolTip/Tooltip1";
import Tooltip2 from "../components/ToolTip/Tooltip2";
import styled from "./tooltip.module.css";

const TooltipPage = () => {
  return (
    <div className={styled.container}>
      <MarkdownRenderer />
      <div className={styled.item}>
        <Tooltip1 />
      </div>
      <div className={styled.item}>
        <Tooltip2 />
      </div>
    </div>
  );
};

export default TooltipPage;
