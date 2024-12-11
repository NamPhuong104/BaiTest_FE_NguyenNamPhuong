import { faCaretDown, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/images/logo.png";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} />

      <ul className={styles.navigation}>
        <li className={styles.menu}>Về chúng tôi</li>

        <div className={styles.dropdown}>
          <li className={styles.menu}>Dịch vụ</li>
          <div className={styles.dropdownContent}>
            <p>Logistic</p>
            <p>Giải pháp kinh doanh hàng hóa quốc tế</p>
            <p>Outsourcing về hàng hóa</p>
          </div>
        </div>

        <li className={styles.menu}>Sản phẩm</li>

        <div className={styles.dropdown}>
          <li className={styles.menu}>Tin tức & Thị trường</li>
          <div className={styles.dropdownContent}>
            <p>Tin tức thị trường</p>
            <p>Tin tức báo chí</p>
          </div>
        </div>

        <div className={styles.dropdown}>
          <li className={styles.menu}>Nhân lực</li>
          <div className={styles.dropdownContent}>
            <p>Tuyển dụng</p>
            <p>Hoạt động nhân lực</p>
          </div>
        </div>

        <li className={styles.menu}>Video & Hình ảnh</li>
        <li className={styles.menu}>Liên hệ</li>
      </ul>

      <div className={styles.dropdown}>
        <div className={styles.language}>
          <p>VI</p>
          <FontAwesomeIcon icon={faGlobe} />
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
        <div className={styles.dropdownContent}>
          <p>Tiếng Anh</p>
          <p>Tiếng Việt</p>
          <p>Tiếng Trung</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
