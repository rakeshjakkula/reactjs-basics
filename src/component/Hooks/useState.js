import React, { useState } from "react";
import "./style.css";

const UseState = () => {
  const [myNumber, setMyNumber] = useState(0);
  return (
    <>
      <div className="center_div">
        <p>{myNumber}</p>
        <div className="button2" onClick={() => setMyNumber(myNumber + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2"
          onClick={() =>
            myNumber > 0 ? setMyNumber(myNumber - 1) : setMyNumber(0)
          }
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
