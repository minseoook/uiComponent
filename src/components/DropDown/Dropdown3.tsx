import { data } from "./data";
import styled from "./dropdown.module.css";
const Dropdown3 = () => {
  return (
    <div className={styled.dropdown}>
      <select className={styled.buttonToggle}>
        {data.map((item, index) => (
          <option className={styled.item} key={index}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown3;
