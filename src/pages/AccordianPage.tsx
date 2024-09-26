import Accordian1 from "../components/Accordian/Accordian1";
import Accordian2 from "../components/Accordian/Accordian2";
import Accordian3 from "../components/Accordian/Accordian3";
import styled from "./accordian.module.css";

const AccordianPage = () => {
  return (
    <div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 아코디언item의 key값을 상태로 구현한 아코디언
        </h3>
        <Accordian1 />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : 아코디언item의 상세설명이 active가 아니어도 검색가능한
          아코디언(ctrl + f),css opacity로 구현
        </h3>
        <Accordian2 />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}>
          구현방법 : js없이 html로만 아코디언 구현(details태그 사용)
        </h3>
        <Accordian3 />
      </div>
    </div>
  );
};

export default AccordianPage;
