import { useEffect, useRef, useState } from "react";
import styles from "./autocomplete.module.css";
import { autocompleteData } from "./data";
import { DataType, useAutocomplete } from "./useAutoComplete";

const AutoComplete = () => {
  const { selectedtext, setValue, selectItem, lists } =
    useAutocomplete(autocompleteData);

  return (
    <DropdownContainer>
      <DropdownTrigger selectedtext={selectedtext} setValue={setValue} />
      <DropdownList lists={lists}>
        {lists.map((item, index) => (
          <DropdownItem key={index} item={item} selectItem={selectItem} />
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default AutoComplete;

export const DropdownList = ({
  children,
  lists,
}: {
  children: React.ReactNode;
  lists: DataType[];
}) => lists.length > 0 && <ul className={styles.dropdownList}>{children}</ul>;
export const DropdownItem = ({
  item,
  selectItem,
}: {
  item: DataType;
  selectItem: (index: string) => void;
}) => (
  <li className={styles.item} onClick={() => selectItem(item.text)}>
    <button>{item.text}</button>
  </li>
);
export const DropdownTrigger = ({
  selectedtext,
  setValue,
}: {
  selectedtext: string | null;
  setValue: (value: string) => void;
}) => {
  const inputref = useRef<HTMLInputElement>(null);
  const [valuedebounce, setvaluedebounce] = useState("");
  useEffect(() => {
    if (selectedtext && inputref.current) {
      inputref.current.value = selectedtext;
    }
  }, [selectedtext]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvaluedebounce(e.target.value);
    setTimeout(() => {
      setValue(e.target.value);
    }, 300);
  };
  return (
    <input
      ref={inputref}
      className={styles.buttonToggle}
      value={valuedebounce}
      onChange={handleChange}
      placeholder="a를 입력해 보세요"
    />
  );
};

export const DropdownContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className={styles.dropdown}>{children}</div>;
};
