import firebase from "firebase";
import React from "react";

const config ={
  apiKey: "AIzaSyDlYaYomTt3oU8fvlL8fBDt81gAzE4dLy0",
  authDomain: "codebrew-2020-8141c.firebaseapp.com",
  databaseURL: "https://codebrew-2020-8141c.firebaseio.com",
  projectId: "codebrew-2020-8141c",
  storageBucket: "codebrew-2020-8141c.appspot.com",
  messagingSenderId: "602894421608",
  appId: "1:602894421608:web:f9a8d137e066808cf8f5dd",
};

export class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this._auth = firebase.auth();
    this._firestore = firebase.firestore();
    this._storage = firebase.storage().ref();
  }

  get auth() {
    return this._auth;
  }

  get user() {
    return new Promise((resolve, reject) => {
       const unsubscribe = this.auth.onAuthStateChanged(user => {
          unsubscribe();
          resolve(user);
       }, reject);
    });
  }

  get persistenceSetting() {
    return firebase.auth.Auth.Persistence.LOCAL;
  }

  get firestore() {
    return this._firestore;
  }

  get storage() {
    return this._storage;
  }

  submitEntry(values) {
    return this.firestore
      .collection("entries").add({
        user: this.auth.currentUser.email,
        ...values,
      });
  }

  doRegister(email, password, name, age, diagnosis, history, behaviourManagement) {
    return this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        return this.firestore.collection("users").add({
          email,
          name,
          age,
          diagnosis,
          history,
        })
      })
      .then(() => {
        if (behaviourManagement !== undefined) {
          return this.storage
            .child(`${email}-behaviour`)
            .put(behaviourManagement);
        }
      });
  }
}

export const FirebaseContext = React.createContext(null);
