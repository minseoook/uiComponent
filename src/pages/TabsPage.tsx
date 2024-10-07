import Tab1 from "../components/Tabs/Tab1";
import Tab2 from "../components/Tabs/Tab2";
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
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : ui,로직을 분리하기 위해 헤드리스 컴포넌트로 구현하였습니다
          (useTabs훅 구현)
        </h3>
        <Tab2 />
      </div>
    </div>
  );
};

export default TabsPage;
