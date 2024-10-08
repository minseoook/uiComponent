import { useState } from "react";
import { tabsData } from "./data";
import styled from "./tab1.module.css";

const Tab1 = () => {
  const [index, setindex] = useState(tabsData[0].id);
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const selectvalue = tabsData.find((tab) => tab.id === index);
  const handleClick = (id: number) => {
    setValue("");
    setValue2("");
    setindex(id);
  };
  return (
    <div className={styled.container}>
      <div className={styled.tabs}>
        {tabsData.map((tab) => (
          <div
            className={`${styled.tab} ${index === tab.id && styled.active}`}
            onClick={() => handleClick(tab.id)}
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

export default Tab1;
