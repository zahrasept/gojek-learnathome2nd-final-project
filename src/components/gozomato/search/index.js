import React, { useState } from "react";
import styles from "./search.module.css";

const SearchCity = () => {
  const [inputCity, getCity] = useState("");

  return (
    <React.Fragment>
      <div className={styles.container}>
        <input
          onChange={({ target: { value } }) => {
            getCity(value);
          }}
          placeholder="Current City "
        />
        <button onClick>Change City</button>
      </div>
    </React.Fragment>
  );
};

export default SearchCity;
