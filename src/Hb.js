import React from "react";
import styles from "./Hb.module.css";
function Hb(props) {
  const click = () => {
    props.changeState();
  };
  return (
    <div>
      <div className={styles.button}>
        <button onClick={click}>Clique Aqui</button>
      </div>
    </div>
  );
}

export default Hb;
