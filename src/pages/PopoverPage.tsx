import { useRef, useState } from "react";
import styles from "./popover.module.css";
import Popover from "../components/Popover/Popover";
import Popover2 from "../components/Popover/Popover2";

const PopoverPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef2 = useRef<HTMLButtonElement | null>(null);
  const buttonRef3 = useRef<HTMLButtonElement | null>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClick2 = () => {
    setIsOpen2(!isOpen2);
  };
  const handleClick3 = () => {
    setIsOpen3(!isOpen2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.header}>
          구현방법: flag상태값을 사용하여 팝오버 생성
        </h3>
        <button className={styles.button} onClick={handleClick} ref={buttonRef}>
          클릭시 팝오버
        </button>
        {isOpen && <Popover onClose={() => setIsOpen(false)} />}
      </div>
      <div className={styles.item}>
        <h3 className={styles.header}>구현방법: 포탈을 사용하여 팝오버 구현</h3>
        <button
          className={styles.button}
          onClick={handleClick2}
          ref={buttonRef2}
        >
          클릭시 팝오버
        </button>
        {isOpen2 && (
          <Popover2
            onClose={() => setIsOpen2(false)}
            anchorEl={buttonRef2.current}
          />
        )}
      </div>
      <div className={styles.item}>
        <h3 className={styles.header}>구현방법: 포탈을 사용하여 팝오버 구현</h3>
        <button
          className={styles.button}
          onClick={handleClick3}
          ref={buttonRef3}
        >
          클릭시 팝오버
        </button>
        {isOpen3 && (
          <Popover2
            onClose={() => setIsOpen3(false)}
            anchorEl={buttonRef3.current}
          />
        )}
      </div>
    </div>
  );
};

export default PopoverPage;
