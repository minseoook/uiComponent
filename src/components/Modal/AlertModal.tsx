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
      <button className={styles.button} onClick={openModal}>
        경고창 열기
      </button>
      <Modal open={open} close={closeModal}>
        <Modal.Header title="경고" close={closeModal} />
        <Modal.Content>
          <div className={styles.modalContent}>
            <p className={styles.message}>{message}</p>
            <p className={styles.additionalInfo}>
              이 경고는 중요합니다. 모든 정보를 확인한 후 작업을 계속
              진행하세요.
            </p>
            <p className={styles.warning}>
              주의: 이 작업은 되돌릴 수 없습니다!
            </p>
          </div>
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
