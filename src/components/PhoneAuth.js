import React from "react";
import firebase from "../firebaseFile";
import { phoneNumber } from "../PhoneNumber";

const PhoneAuth = () => {
  const handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, recaptcha)
      .then((res) => {
        console.log(res, "Res object");
        let code = prompt("Enter the OTP");
        if (code == null) {
          return;
        }
        res
          .confirm(code)
          .then((result) => {
            console.log(result, "User");
            document.querySelector("label").textContent = "Number Verfied";
          })
          .catch((err) => {
            console.log(err);
          });
      });
  };
  return (
    <div>
      <h3>Phone OTP AUthetication</h3>
      <div id="recaptcha"></div>
      <label></label>
      <button onClick={handleClick}>CLICK</button>
      <h3>----------------------------------------</h3>
    </div>
  );
};

export default PhoneAuth;
