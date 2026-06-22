import { useState } from "react";
import styles from "./Navbar.module.css";
import Logo from "../../../assets/Gemini_Generated_Image_7ydq27ydq27ydq27.png";

const Navbar = ({ adminName = "Super Admin", adminImg }) => {
  // layer 1 states & Global Data
  const [notifCount, setNotifCount] = useState(5);
  // layer 2 (effects) API Call
  // layer 3 Handler
  const onIncNotifHandler = () => {
    setNotifCount(notifCount +1)
  }
  // layer 4 JSX  
  return (
    <nav
      className={`${styles.navbar} d-flex justify-content-between align-items-center shadow-sm`}
    >
      <div className="d-flex align-items-center">
        <img src={Logo} alt="GoldHub" className={styles.logoImg} />
      </div>

      <div className={styles.adminSection}>
        <div className={styles.notifIcon}>
          <i className="fa-solid fa-bell-concierge"></i>
          <span className={`${styles.badge} badge rounded-pill bg-info`}>
            {notifCount}
          </span>
        </div>
        <button className={`${styles.increase} btn btn-primary`} onClick={onIncNotifHandler}>Increase Notification</button>

        <div className="d-flex align-items-center gap-2">
          <span className="fw-semibold d-none d-md-block">{adminName}</span>
          {adminImg ? (
            <img src={adminImg} alt="admin" className={styles.avatarCircle} />
          ) : (
            <div className={styles.avatarCircle}>
              {adminName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
