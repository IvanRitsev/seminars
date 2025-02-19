import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="content-container">
        <div className={styles.wrapper}>
          <div className={styles.logo}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
