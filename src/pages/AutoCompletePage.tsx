import AutoComplete from "../components/AutoComplete/AutoComplete";
import styled from "./autocomplete.module.css";

const AutoCompletePage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <AutoComplete />
      </div>
    </div>
  );
};

export default AutoCompletePage;
