// import { useTranslation } from "react-i18next";
import styles from "./FooterToLanding.module.css";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({
  year = new Date().getFullYear(),
  appName = "LawBridge",
}) => {
  // const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`row text-center ${styles.footerRow}`}>
          {/* About */}
          <div className={`col-md-4 mb-4 ${styles.footerCol}`}>
            <h5 className={styles.title}>"footer.aboutTitle"</h5>

            <hr className={styles.line} />

            <p className={styles.aboutText}>
              "footer.aboutDescription"
            </p>
          </div>

          {/* Links */}
          <div className={`col-md-4 mb-4 ${styles.footerCol}`}>
            <h6 className={styles.title}>"footer.linksTitle"</h6>

            <hr className={styles.smallLine} />

            <ul className={styles.links}>
              <li>
                <a href="/">"navbar.home"</a>
              </li>
              <li>
                <a href="/about">aboutUs</a>
              </li>
      
            </ul>
          </div>

          {/* Contact */}
          <div className={`col-md-4 mb-4 ${styles.footerCol}`}>
            <h6 className={styles.title}>"footer.contactTitle"</h6>

            <hr className={styles.smallLine} />

            <ul className={styles.links}>
              <li>
                <FaHome />
                Law Bridge
              </li>

              <li>
                <FaEnvelope />
                lawBridge@gmail.com
              </li>

              <li>
                <FaPhone />
                +11111111111
              </li>

              <li>
                <FaPrint />
                +11111111111
              </li>
            </ul>
          </div>
        </div>

        {/* Register */}
        <div className={styles.register}>
          <h5>"footer.register"</h5>

          <a href="/login" className={styles.button}>
            "footer.signup"
          </a>
        </div>

        {/* Social */}
        <div className={styles.social}>
          <a href="https://www.facebook.com/?locale=ar_AR" target="_blank"><FaFacebook /></a>
          <a href="https://x.com/" target="_blank"><FaXTwitter /></a>
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
          <a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
          <a href="https://github.com/" target="_blank"><FaGithub /></a>
          <a href="https://www.linkedin.com/" target="_blank"><FaLinkedin /></a>
        </div>
      </div>

      {/* Copyright */}
      {/* <div className={styles.copy}>
        "footer.rights", { year, appName }
      </div> */}
    </footer>
  );
};

export default Footer;