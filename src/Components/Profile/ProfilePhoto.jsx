import person from "./person.jpg";
import "./style.css";
import React from "react";

function ProfilePhoto(props) {
  return (
    <div className="profile">
      <img src={person} alt="" />
    </div>
  );
}

export default ProfilePhoto;
