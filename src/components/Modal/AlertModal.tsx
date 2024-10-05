import Modal from "./Modal";
import useModal from "./useModal";
import styles from "./alert.module.css";

type AlertModalProps = {
  message: string;
};

const AlertModal = ({ message }: AlertModalProps) => {
  const { open, openModal, closeModal } = useModal();

  return (
    <>
      <button onClick={openModal}>경고창 열기</button>
      <Modal open={open} close={closeModal}>
        <Modal.Header title="경고" close={closeModal} />
        <Modal.Content>
          <p>{message}</p>
        </Modal.Content>
        <Modal.Footer>
          <button onClick={closeModal} className={styles.button}>
            확인
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AlertModal;
