import Modal from "./Modal";
import useModal from "./useModal";
import styles from "./nest.module.css";

const NestedModal = () => {
  const outerModal = useModal();
  const innerModal = useModal();

  return (
    <>
      <button onClick={outerModal.openModal} className={styles.button}>
        외부 모달 열기
      </button>
      <Modal open={outerModal.open} close={outerModal.closeModal}>
        <div className={styles.outerModal}>
          <Modal.Header title="외부 모달" close={outerModal.closeModal} />
          <Modal.Content>
            <div className={styles.modalContent}>
              <p>이것은 외부 모달입니다.</p>
              <p>
                추가적인 정보를 제공합니다. 이 모달은 다른 모달을 열 수 있는
                기능을 가지고 있습니다. 아래 버튼을 클릭하여 내부 모달을
                열어보세요.
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className={styles.modalFooter}>
              <button onClick={innerModal.openModal} className={styles.button}>
                내부 모달 열기
              </button>
              <button
                onClick={outerModal.closeModal}
                className={styles.closeAllButton}
              >
                닫기
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>

      <Modal open={innerModal.open} close={innerModal.closeModal}>
        <div className={styles.innerModal}>
          <Modal.Header title="내부 모달" close={innerModal.closeModal} />
          <Modal.Content>
            <div className={styles.modalContent2}>
              <p>이것은 내부 모달입니다.</p>
              <p>
                이 모달은 외부 모달에서 열 수 있으며, 모든 모달을 닫는 옵션도
                제공합니다.
              </p>
            </div>
          </Modal.Content>
          <Modal.Footer>
            <div className={styles.modalFooter}>
              <button onClick={innerModal.closeModal} className={styles.button}>
                내부 모달 닫기
              </button>
              <button
                onClick={() => {
                  innerModal.closeModal();
                  outerModal.closeModal();
                }}
                className={`${styles.button} ${styles.closeAllButton}`}
              >
                모든 모달 닫기
              </button>
            </div>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default NestedModal;
