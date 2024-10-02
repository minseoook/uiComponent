import Dropdown from "../components/DropDown/DropDown";
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
    </div>
  );
};

export default DropdownPage;
