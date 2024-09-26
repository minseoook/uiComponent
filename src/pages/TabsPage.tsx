import Tab1 from "../components/Tabs/Tab1";
import styled from "./tabs.module.css";

const TabsPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 탭의 id를 상태로 관리하여 상태마다 아래 폼을 달리 렌더링함
        </h3>
        <Tab1 />
      </div>
    </div>
  );
};

export default TabsPage;
