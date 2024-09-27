import styles from "./popover.module.css";

const Popover = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      <div className={styles.dimmed} onClick={onClose} />
      <div className={styles.popoverContainer}>
        <ul className={styles.popoverList}>
          <li className={styles.popoverItem}>
            <button className={styles.popoverButton}>
              <span className={styles.icon}>➕</span> 추가
            </button>
          </li>
          <li className={styles.popoverItem}>
            <button className={styles.popoverButton}>
              <span className={styles.icon}>🗑️</span> 삭제
            </button>
          </li>
          <li className={styles.popoverItem}>
            <button className={styles.popoverButton}>
              <span className={styles.icon}>✏️</span> 수정
            </button>
          </li>
          <li className={styles.popoverItem}>
            <button className={styles.popoverButton}>
              <span className={styles.icon}>💾</span> 저장
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Popover;
