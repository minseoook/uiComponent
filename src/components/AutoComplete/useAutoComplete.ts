import { useState, useCallback } from "react";

export type DataType = {
  text: string;
};
export const useAutocomplete = (items: DataType[]) => {
  const [value, setValue] = useState("");
  const [selectedtext, setSelectedtext] = useState<string | null>(null);

  const selectItem = useCallback((index: string) => {
    setSelectedtext(index);
    setValue("");
  }, []);

  const lists = items.filter(
    (item) =>
      value.length > 0 && item.text.toLowerCase().includes(value.toLowerCase())
  );
  return {
    selectedtext,
    setValue,
    selectItem,
    lists,
  };
};
