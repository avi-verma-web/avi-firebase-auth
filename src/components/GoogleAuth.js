import React from "react";
import firebase from "../firebaseFile";

const GoogleAuth = () => {
  const handleClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        document.getElementById("gauth").textContent =
          result.user.displayName + "Verifed";
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>Google AUth</h3>
      <label id="gauth"></label>
      <button onClick={handleClick}>CLICK</button>
      <h3>--------------------------------------</h3>
    </div>
  );
};

export default GoogleAuth;
