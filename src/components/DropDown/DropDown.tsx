import { create } from "zustand";
import { ReactNode, useEffect, useRef } from "react";
import styles from "./Dropdown.module.css";
import { data } from "./data";

type DropdownState = {
  items: DropdownItemType[];
  isOpen: boolean;
  selectedIndex: number;
  toggle: () => void;
  selectIndex: (index: number) => void;
};

export type DropdownItemType = {
  id: string;
  text: string;
};

const useDropdownStore = create<DropdownState>((set) => ({
  items: data,
  isOpen: false,
  selectedIndex: -1,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  selectIndex: (index) => set({ selectedIndex: index }),
}));

const DropdownTrigger = () => {
  const { items, selectedIndex, toggle } = useDropdownStore();
  const selectedItem = items[selectedIndex];

  return (
    <button className={styles.buttonToggle} onClick={() => toggle()}>
      <span className={styles.text}>
        {selectedItem?.text || "항목을 선택하세요"}
      </span>
    </button>
  );
};

const DropdownItem = ({
  item,
  index,
}: {
  item: DropdownItemType;
  index: number;
}) => {
  const { selectIndex, toggle } = useDropdownStore();

  const handleClick = () => {
    selectIndex(index);
    toggle();
  };
  return (
    <li className={styles.item}>
      <button onClick={handleClick}>
        <span>{item.text}</span>
      </button>
    </li>
  );
};

const DropdownList = () => {
  const { items, isOpen } = useDropdownStore();
  if (!isOpen) return null;

  return (
    <ul className={styles.dropdownList}>
      {items.map((item, i) => (
        <DropdownItem item={item} index={i} key={item.id} />
      ))}
    </ul>
  );
};

const DropdownContainer = ({ children }: { children: ReactNode }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { isOpen, toggle } = useDropdownStore();
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isOpen) return;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        toggle();
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, toggle]);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      {children}
    </div>
  );
};

const Dropdown = {
  Container: DropdownContainer,
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownItem,
};

export default Dropdown;
