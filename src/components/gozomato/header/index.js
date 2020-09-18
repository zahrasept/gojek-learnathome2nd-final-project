import React from "react";
import styles from "./header.module.css";

const Header = ({ title }) => {
  const defaultTitle = "GoZomato";

  return (
    <div className={styles.container}>
      {title ? (
        <div className={styles.title}>{title}</div>
      ) : (
        <div className={styles.title}>{defaultTitle}</div>
      )}
    </div>
  );
};

export default Header;
