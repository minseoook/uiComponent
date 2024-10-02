import Dropdown from "../components/DropDown/DropDown";
import Dropdown2 from "../components/DropDown/Dropdown2";
import Dropdown3 from "../components/DropDown/Dropdown3";
import styled from "./dropdown.module.css";

const DropdownPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <Dropdown.Container>
          <Dropdown.Trigger />
          <Dropdown.List />
        </Dropdown.Container>
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <Dropdown2 />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <Dropdown3 />
      </div>
    </div>
  );
};

export default DropdownPage;
