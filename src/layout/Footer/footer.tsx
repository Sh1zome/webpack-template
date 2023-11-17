import * as commonStyles from "../../assets/styles/common.module.scss";
import * as styles from "./footer.module.scss";
import React from "react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={commonStyles.container}>
        <h2>© 2023 ALEF STUDIO. Все права защищены.</h2>
      </div>
    </footer>
  );
}
