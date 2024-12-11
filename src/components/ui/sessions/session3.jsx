import styles from "../../styles/session3.module.css";
import background1 from "../../../assets/images/backgroundImage2.png";
import background2 from "../../../assets/images/image4.png";
import background3 from "../../../assets/images/image7.png";
import iconHover from "../../../assets/images/icon-hover.png";
import iconUpRight from "../../../assets/images/icon-up-right.png";
import { useState } from "react";

const backgrounds = [background1, background2, background3];
const paragraps = [
  "Giải pháp hàng hóa quốc tế",
  "Outsourecing hàng hóa",
  "Cung cấp giải pháp về hậu cần",
];

const Session3 = () => {
  const [icon, setIcon] = useState(iconUpRight);
  const [background, setBackground] = useState(backgrounds[0]);
  const [text, setText] = useState(paragraps[0]);
  const [index, setIndex] = useState(0);

  const handleButtonClick = () => {
    const nextIndex = (index + 1) % backgrounds.length;

    setBackground(backgrounds[nextIndex]);
    setText(paragraps[nextIndex]);
    setIndex(nextIndex);
  };

  return (
    <div className={styles.services}>
      <div className={styles.bgGradian}>
        <img src={background} className={styles.bgImage} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>Dịch Vụ Của Chúng Tôi</h2>
        <div className={styles.serviceList}>
          <p>{text}</p>
          <div className={styles.serviceItem}>
            <img src={background} className={styles.arrowImg}></img>
            <button
              className={styles.button}
              onMouseEnter={() => setIcon(iconHover)}
              onMouseLeave={() => setIcon(iconUpRight)}
            >
              Tìm hiểu ngay
              <img src={icon} className={styles.iconUpRight} />
            </button>
          </div>
          <button className={styles.next} onClick={handleButtonClick}>
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Session3;
