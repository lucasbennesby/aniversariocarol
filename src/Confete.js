import React from "react";
import bg from "./confetti-19 (1).gif";
import "./Confete.css";
function Confete(props) {
  return (
    <div className="bg">
      <img
        src={bg}
        alt=""
      />
      <div className="blink">
        <h1>feliz aniversario porra</h1>
        <button
          className="reloadButton"
          onClick={props.changeState}
        >
          ⟳
        </button>
      </div>
    </div>
  );
}

export default Confete;
