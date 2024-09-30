import Slide1 from "../components/Slide/Slide1";
import Slide2 from "../components/Slide/Slide2";
import Slide3 from "../components/Slide/Slide3";
import styles from "./slide.module.css";

const SlidePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h3 className={styles.header}>구현방법:</h3>
      </div>
      <Slide1 />
      <div className={styles.item}>
        <h3 className={styles.header}>구현방법:</h3>
      </div>
      <Slide2 />
      <div className={styles.item}>
        <h3 className={styles.header}>구현방법:</h3>
      </div>
      <Slide3 />
    </div>
  );
};

export default SlidePage;
