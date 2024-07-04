import { Button } from "@mui/material";
import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function SignIn() {
  function signInwithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <div>
      <Button onClick={signInwithGoogle}>Googleでログインする</Button>
    </div>
  );
}

export default SignIn;
