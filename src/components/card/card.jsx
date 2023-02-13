import styles from "../card/Card.module.scss";
import { useState } from "react";
const Card = ({ title, skillLevel, aughtor, students, modules, duration }) => {
  const [count, setCount] = useState(4);
  const starRaiting = () => setCount(count + 1);

  return (
    <div className={styles.cardContainer}>
      <div className="imageBox">
        <img src="images/photo.png" alt="uxImage" />
      </div>
      <h3 className={styles.cardHeader}>{title}</h3>
      <p className={styles.skillLevel}> Level:{skillLevel}</p>
      <div className={styles.aughtorWrapper}>
        <p className={styles.aughtorName}>{aughtor}</p>
        <div className={styles.starButtonContainer}>
          <button onClick={starRaiting} className={styles.starButton}>
            <svg
              className={styles.hoverStarIcon}
              width="16"
              height="15"
              viewBox="0 0 16 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.5L10.0279 5.20889L15.1329 5.68237L11.2811 9.06611L12.4084 14.0676L8 11.45L3.59161 14.0676L4.71886 9.06611L0.867076 5.68237L5.97214 5.20889L8 0.5Z"
                fill="#FFBB54"
              />
            </svg>
          </button>
          <p className={styles.ratingNumber}>{count}</p>
        </div>
      </div>
      <div className={styles.footerCardWrapper}>
        <span>{students}students</span>
        <span>{modules}modules</span>
        <span>{duration}</span>
      </div>
    </div>
  );
};

export default Card;
