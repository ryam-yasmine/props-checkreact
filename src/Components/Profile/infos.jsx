import "./Infos.css";
import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import FullName from "./FullName";
import Adresse from "./Adresse";

function Infos() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Profile</h3>
      </header>
      <div className="infos">
        <ProfilePhoto />
        <FullName name="ANNA HAPPY">
          {" "}
          <Adresse />
        </FullName>
      </div>
    </div>
  );
}

export default Infos;
