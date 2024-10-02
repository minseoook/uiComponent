import { useEffect, useRef } from "react";
import { data } from "./data";
import styles from "./dropdown.module.css";
import { DataType, useDropdown } from "./useDropdown";

const Dropdown2 = () => {
  const { isOpen, selectedItem, toggle, selectItem } = useDropdown(data);

  return (
    <DropdownContainer handleKeyDown={() => toggle()} isOpen={isOpen}>
      <DropdownTrigger selectedItem={selectedItem} toggle={toggle} />
      <DropdownList isOpen={isOpen}>
        {data.map((item, index) => (
          <DropdownItem
            key={index}
            item={item}
            index={index}
            selectItem={selectItem}
          />
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown2;

export const DropdownList = ({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) => (
  <ul
    className={styles.dropdownList}
    style={{ display: isOpen ? "block" : "none" }}
  >
    {children}
  </ul>
);
export const DropdownItem = ({
  item,
  index,
  selectItem,
}: {
  item: DataType;
  index: number;
  selectItem: (index: number) => void;
}) => (
  <li className={styles.item} onClick={() => selectItem(index)}>
    <button>{item.text}</button>
  </li>
);
export const DropdownTrigger = ({
  selectedItem,
  toggle,
}: {
  selectedItem: DataType | null;
  toggle: () => void;
}) => (
  <button className={styles.buttonToggle} onClick={toggle}>
    <span>{selectedItem ? selectedItem.text : "항목을 선택하세요"}</span>
  </button>
);
export const DropdownContainer = ({
  isOpen,
  handleKeyDown,
  children,
}: {
  isOpen: boolean;
  handleKeyDown: () => void;
  children: React.ReactNode;
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!isOpen) return;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        handleKeyDown();
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [handleKeyDown]);

  return (
    <div
      className={styles.dropdown}
      ref={dropdownRef}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};
