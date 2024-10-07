import { useState } from "react";
import { tabsData } from "./data";
import styled from "./tab1.module.css";
import { useTabs } from "./useTabs";

const Tab2 = () => {
  const { index, selectvalue, handleClick } = useTabs();
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const handleClick2 = (id: number) => {
    setValue("");
    setValue2("");
    handleClick(id);
  };
  return (
    <div className={styled.container}>
      <div className={styled.tabs}>
        {tabsData.map((tab) => (
          <div
            className={`${styled.tab} ${index === tab.id && styled.active}`}
            onClick={() => handleClick2(tab.id)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <label>
        <strong>{selectvalue?.title}</strong>의 이메일
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <label>
        {" "}
        <strong>{selectvalue?.title}</strong>의 비밀번호
      </label>
      <input
        type="password"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
    </div>
  );
};

export default Tab2;
