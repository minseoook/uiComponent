import { useState } from "react";
import styled from "./popover.module.css";
import Popover from "../components/Popover/Popover";
import Popover2 from "../components/Popover/Popover2";

const PopoverPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClick2 = () => {
    setIsOpen2(!isOpen);
  };
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : flag상태값을 사용하여 팝오버 생성
        </h3>
        <button className={styled.button} onClick={handleClick}>
          클릭시 팝오버
        </button>
        {isOpen && <Popover onClose={() => setIsOpen(false)} />}
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 포탈을 사용하여 팝오버 구현
        </h3>
        <button className={styled.button} onClick={handleClick2}>
          클릭시 팝오버
        </button>
        {isOpen2 && <Popover2 onClose={() => setIsOpen2(false)} />}
      </div>
    </div>
  );
};

export default PopoverPage;
