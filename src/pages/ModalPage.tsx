import AlertModal from "../components/Modal/AlertModal";
import LoginModal from "../components/Modal/LoginModal";
import NestedModal from "../components/Modal/nestingModal";
import styled from "./modal.module.css";

const ModalPage = () => {
  return (
    <div className={styled.container}>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <AlertModal message="경고입니다!!!" />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <LoginModal />
      </div>
      <div className={styled.item}>
        <h3 className={styled.header}></h3>
        <NestedModal />
      </div>
    </div>
  );
};

export default ModalPage;
