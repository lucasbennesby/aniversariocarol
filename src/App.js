import logo from "./logo.svg";
import "./App.css";
import Hb from "./Hb";
import Confete from "./Confete";
import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  const changeState = () => {
    if (!isOn) {
      setIsOn(true);
    } else {
      setIsOn(false);
    }
  };
  return (
    <div className="App">
      {isOn ? (
        <Confete
          isOn={isOn}
          changeState={changeState}
        />
      ) : (
        <Hb
          isOn={isOn}
          changeState={changeState}
        />
      )}
    </div>
  );
}

export default App;
