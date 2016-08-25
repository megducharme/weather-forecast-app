"use strict";
let firebase = require("./firebaseConfig"),
    provider = new firebase.auth.GoogleAuthProvider();

function logInGoogle() {
  console.log("wazzup, auth?");
  return firebase.auth().signInWithPopup(provider);//this will return a promise - new firebase3
}

module.exports = logInGoogle;
