import styles from "../../styles/session4.module.css";
import logo from "../../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

const Session4 = () => {
  return (
    <div className={styles.partner}>
      <div className={styles.partnerLogo}>
        <span>ĐỐI TÁC CỦA CHÚNG TÔI</span>
        <div className={styles.slideshow}>
          <img src={logo} className={styles.images1} />
        </div>
      </div>

      <div className={styles.reason}>
        <div className={styles.reasonImg}>
          <img src={logo} alt="" />
        </div>

        <div className={styles.reasonList}>
          <div className={styles.reasonItem}>
            <span>LÝ DO CHỌN CHÚNG TÔI</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
              excepturi sit dolorem similique odit, officiis id! Assumenda
              possimus, numquam officia qui hic cumque culpa odio in atque
              deserunt repellendus sapiente.
            </p>
          </div>

          <div className={styles.cardList}>
            <div className={styles.cardItem}>
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <span>Độ uy tín</span>
              <p>
                Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam
                id. Eu odio et cras nisi eu
              </p>
            </div>

            <div className={styles.cardItem}>
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <span>Độ uy tín</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deserunt aliquid atque ipsa praesentium voluptas
              </p>
            </div>

            <div className={styles.cardItem}>
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <span>Độ uy tín</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deserunt aliquid atque ipsa praesentium voluptas
              </p>
            </div>

            <div className={styles.cardItem}>
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <span>Độ uy tín</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate deserunt aliquid atque ipsa praesentium voluptas
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session4;
