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
    this._user = null;
  }

  get auth() {
    return this._auth;
  }

  get user() {
    if (this._user !== null) {
      return this._user;
    }

    this._user = new Promise((resolve, reject) => {
       const unsubscribe = this.auth.onAuthStateChanged(user => {

          unsubscribe();
          resolve(user);
       }, reject);
    });

    return this._user;
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

  async submitArticle(values) {
    return this.storage.child(values.name).put(values.image)
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        return this.firestore
          .collection("articles").add({
            name: values.name,
            url: values.url,
            category: values.category.value,
            image: url,
          });
      });
  }

  async submitEntry(date, values) {
    const user = await this.user;

    console.log(user.email)

    const querySnapshot = await this.firestore.collection("entries").where("time", "==", date).where("user", "==", user.email).get()
    querySnapshot.forEach((doc)=> {
      doc.ref.delete();
    })

    return this.firestore
      .collection("entries").add({
        user: user.email,
        time: date,
        ...values,
      });
  }

  async signOut() {
    await this.auth.signOut()
    this._user = null;
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
          "isDoc" : false
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

  doRegisterDoc(email, password, name) {
    return this.auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          return this.firestore.collection("users").add({
            email,
            name,
            "isDoc" : true
          })
        })
  }
}

export const FirebaseContext = React.createContext(null);
