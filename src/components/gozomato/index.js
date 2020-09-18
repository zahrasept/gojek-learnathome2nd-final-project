import React, { useState, useEffect } from "react";

const yourApiCall = () => Promise.resolve("hello world!");

const Gozomato = () => {
  const [searchCity, getCity] = useState("");

  // useEffect(() => {
  //   yourApiCall.then(setYourState);
  // }, []);

  return (
    <div>
      <div>Your element</div>
      {/* <div>Your state has a default value of {yourState}</div> */}
      <div>Your state has a default value of </div>
    </div>
  );
};

export default Gozomato;
