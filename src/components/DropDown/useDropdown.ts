import { useState, useCallback } from "react";

export type DataType = {
  id: string;
  text: string;
};
export const useDropdown = (items: DataType[]) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const selectItem = useCallback((index: number) => {
    setSelectedIndex(index);
    setIsOpen(false);
  }, []);

  const selectedItem = selectedIndex !== null ? items[selectedIndex] : null;

  return {
    isOpen,
    selectedItem,
    toggle,
    selectItem,
  };
};
