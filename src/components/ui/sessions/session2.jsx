import styles from "../../styles/session2.module.css";
import iconHover from "../../../assets/images/icon-hover.png";
import iconUpRight from "../../../assets/images/icon-up-right.png";
import map from "../../../assets/images/map.png";
import { useState } from "react";

const Session2 = () => {
  const [icon, setIcon] = useState(iconUpRight);
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutUs}>
        <div className={styles.text}>
          <span>VỀ CHÚNG TÔI</span>
          <p>
            Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id.
            Eu odio et cras nisi eu congue faucibus sit. Pretium proin dignissim
            urna aenean Varius nisi amet nullam id. Eu odio et cras nisi eu{" "}
          </p>
        </div>
        <div className={styles.plus}>
          <div className={styles.card}>
            <span>27+</span>
            <p>Varius nisi amet nullam id</p>
          </div>
          <div className={styles.card}>
            <span>100+</span>
            <p>Varius nisi amet nullam id</p>
          </div>
          <div className={styles.card}>
            <span>50+</span>
            <p>Varius nisi amet nullam id</p>
          </div>
          <div className={styles.card}>
            <span>100+</span>
            <p>Varius nisi amet nullam id</p>
          </div>

          <button
            className={styles.button}
            onMouseEnter={() => setIcon(iconHover)}
            onMouseLeave={() => setIcon(iconUpRight)}
          >
            Tìm hiểu ngay
            <img src={icon} className={styles.iconUpRight} />
          </button>
        </div>
      </div>
      <div className={styles.map}>
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default Session2;
