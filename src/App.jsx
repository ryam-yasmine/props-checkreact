import "./App.css";
import React, { useState, useEffect } from "react";
import Infos from "./Components/Profile/infos";

function App() {
  const [appear, setAppear] = useState(true);
  const [timer, setTimer] = useState(1);
  useEffect(() => {
    setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  }, []);

  return (
    <div className="info">
      {appear ? (
        <Infos />
      ) : (
        <h4 className="when">last component mounted since {timer}</h4>
      )}
      <button
        onClick={() => {
          setAppear(!appear);
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
