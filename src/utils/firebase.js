import firebase from "firebase";
import React from "react";

const config ={
  apiKey: "AIzaSyDlYaYomTt3oU8fvlL8fBDt81gAzE4dLy0",
  authDomain: "codebrew-2020-8141c.firebaseapp.com",
  databaseURL: "https://codebrew-2020-8141c.firebaseio.com",
  projectId: "codebrew-2020-8141c",
  storageBucket: "codebrew-2020-8141c.appspot.com",
  messagingSenderId: "602894421608",
  appId: "1:602894421608:web:f9a8d137e066808cf8f5dd"
};

export class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this._auth = firebase.auth();
    this._firestore = firebase.firestore();
    this._storage = firebase.storage();
  }

  get auth() {
    return this._auth;
  }

  get firestore() {
    return this._firestore;
  }

  get storage() {
    return this._storage;
  }

  doRegister(email, password, name, age, diagnosis, history) {
    const create = this.auth.createUserWithEmailAndPassword(email, password);
    const store = this.firestore.collection("users").add({
      email,
      name,
      age,
      diagnosis,
      history,
    });

    return Promise.all([create, store]);
  }
}

export const FirebaseContext = React.createContext(null);
