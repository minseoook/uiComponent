import ReactDOM from "react-dom";
import styles from "./popover2.module.css";

const Popover2 = ({ onClose }: { onClose: () => void }) => {
  //   // 외부 클릭 시 팝오버를 닫기 위한 useEffect
  //   useEffect(() => {
  //     const handleOutsideClick = (event: MouseEvent) => {
  //       const popoverElement = document.getElementById("popover-root");
  //       if (popoverElement && !popoverElement.contains(event.target as Node)) {
  //         onClose();
  //       }
  //     };

  //     document.addEventListener("mousedown", handleOutsideClick);
  //     return () => {
  //       document.removeEventListener("mousedown", handleOutsideClick);
  //     };
  //   }, [onClose]);

  const popoverContent = (
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
  );

  const dimmedBackground = <div className={styles.dimmed} onClick={onClose} />;

  // 포탈을 생성하여 팝오버와 dimmed 배경 렌더링
  return ReactDOM.createPortal(
    <>
      {dimmedBackground}
      {popoverContent}
    </>,
    document.getElementById("popover-root") as HTMLElement
  );
};

export default Popover2;
