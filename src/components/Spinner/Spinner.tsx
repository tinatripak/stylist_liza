import React from "react";
import styles from "./Spinner.module.scss";

const Spinner: React.FC = () => {
  return (
    <div className={styles.spinner_overlay}>
      <div className={styles.spinner}>Liza Balizka</div>
    </div>
  );
};

export default Spinner;
