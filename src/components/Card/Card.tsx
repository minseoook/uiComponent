import { useNavigate } from "react-router-dom";
import styles from "./card.module.css";

type CardProps = {
  img: string;
  title: string;
  desc: string;
  link: number;
};
const Card = ({ img, title, desc, link }: CardProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${link}`);
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.imageWrapper}>
        <img src={img} alt={title} className={styles.image} />
      </div>
      <div className={styles.detail}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.button}>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
