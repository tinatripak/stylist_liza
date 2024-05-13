import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <a
          className={styles.instagram}
          href="https://www.instagram.com/li.balizka/"
        >
          Instagram
        </a>
        <p className={styles.email}>collabs@lizabalizka.com</p>
        <p className={styles.name}>Liza Balizka</p>
      </div>
    </footer>
  );
};

export default Footer;
