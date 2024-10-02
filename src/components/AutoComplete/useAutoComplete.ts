import { useState, useCallback } from "react";

export type DataType = {
  text: string;
};
export const useAutocomplete = (items: DataType[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectedtext, setSelectedtext] = useState<string | null>(null);

  const selectItem = useCallback((index: string) => {
    setSelectedtext(index);
    setIsOpen(false);
    setValue("");
  }, []);

  const lists = items.filter(
    (item) =>
      value.length > 0 && item.text.toLowerCase().includes(value.toLowerCase())
  );
  return {
    isOpen,
    selectedtext,
    setValue,
    selectItem,
    lists,
  };
};
