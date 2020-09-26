#!/usr/bin/env node

const firebase = require("firebase");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, temp, index;
  while (i--) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(0, size);
}

const emails = [
  "omja.das@gmail.com",
  "vishal@hotmail.com",
];

const environments = [
  "school",
  "cinema",
  "basketball",
  "soccer",
  "tutoring",
  "drum lessons",
  "band",
  "birthday party",
  "beach",
  "park",
  "shopping centre",
  "hair dresser",
  "library",
];

const fields = [
  "attention",
  "communication",
  "difficultBehaviour",
  "overallMood",
  "sleepQuality",
  "socialInteraction",
];

const config ={
  apiKey: "AIzaSyDlYaYomTt3oU8fvlL8fBDt81gAzE4dLy0",
  authDomain: "codebrew-2020-8141c.firebaseapp.com",
  databaseURL: "https://codebrew-2020-8141c.firebaseio.com",
  projectId: "codebrew-2020-8141c",
  storageBucket: "codebrew-2020-8141c.appspot.com",
  messagingSenderId: "602894421608",
  appId: "1:602894421608:web:f9a8d137e066808cf8f5dd",
};

firebase.initializeApp(config);

const now = new Date();

for (var d = new Date(2020, 0, 1); d <= now; d.setDate(d.getDate() + 1)) {
  for (const email of emails) {
    const entry = {
      user: email,
      environmentalInfo: getRandomSubarray(
        environments,
        getRandomInt(1, 5)
      ).join(", "),
      time: d,
    }

    for (const field of fields) {
      entry[field] = getRandomInt(1, 6);
    }

    firebase.firestore().collection("entries").add(entry);
  }
}
