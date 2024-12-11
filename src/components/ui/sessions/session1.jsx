import { useState } from "react";
import background from "../../../assets/images/backgroundImage1.png";
import iconHover from "../../../assets/images/icon-hover.png";
import iconUpRight from "../../../assets/images/icon-up-right.png";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import ImageSlider from "../../ImageSlider";
import styles from "../../styles/session1.module.css";

const Session1 = () => {
  const [icon, setIcon] = useState(iconUpRight);
  const images = [
    { src: image1 },
    { src: image2 },
    { src: image3 },
    { src: image4 },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgGradian}>
        <img src={background} className={styles.img} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>HẬU CẦN</h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Varius nisi amet nullam id. Eu
          odio et cras nisi eu congue faucibus sit. Pretium proin dignissim urna
          aenean rhoncus feugiat. Dui phasellus sed tellus nunc.
        </p>
        <button
          className={styles.button}
          onMouseEnter={() => setIcon(iconHover)}
          onMouseLeave={() => setIcon(iconUpRight)}
        >
          Tìm hiểu ngay
          <img src={icon} className={styles.iconUpRight} />
        </button>
      </div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Session1;
