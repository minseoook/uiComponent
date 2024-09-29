import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./popover2.module.css";

const Popover2 = ({
  onClose,
  anchorEl,
}: {
  onClose: () => void;
  anchorEl: HTMLElement | null;
}) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isPositioned, setIsPositioned] = useState(false); // 위치 설정 여부
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // 버튼의 위치와 크기를 기준으로 팝오버의 중앙 위치 설정
  useEffect(() => {
    if (anchorEl && popoverRef.current) {
      const rect = anchorEl.getBoundingClientRect();
      const popoverWidth = popoverRef.current.offsetWidth;

      setPosition({
        top: rect.bottom + window.scrollY, // 버튼 바로 아래
        left: rect.left + rect.width / 2 - popoverWidth / 2 + window.scrollX, // 버튼 중앙 정렬
      });

      // 위치 설정 완료
      setIsPositioned(true);
    }
  }, [anchorEl]);

  const popoverContent = (
    <div
      className={styles.popoverContainer}
      ref={popoverRef}
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: "absolute",
        visibility: isPositioned ? "visible" : "hidden", // 위치 설정 전까지 숨김
      }}
    >
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

  return ReactDOM.createPortal(
    <>
      {dimmedBackground}
      {popoverContent}
    </>,
    document.getElementById("popover-root") as HTMLElement
  );
};

export default Popover2;
