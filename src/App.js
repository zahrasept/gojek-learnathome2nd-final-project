import React from "react";
import Header from "components/gozomato/header";
import styles from "./app.module.css";
import SearchCity from "components/gozomato/search";

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SearchCity />
    </div>
  );
};

export default App;
