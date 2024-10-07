import { useState } from "react";
import { tabsData } from "./data";

export const useTabs = () => {
  const [index, setindex] = useState(tabsData[0].id);
  const selectvalue = tabsData.find((tab) => tab.id === index);
  const handleClick = (id: number) => {
    setindex(id);
  };

  return {
    index,
    selectvalue,
    handleClick,
  };
};
