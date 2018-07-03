
var config = {
    apiKey: "AIzaSyDdjSnZXerTyTOi7g3910IalzfxARpJXu0",
    authDomain: "trakarotwo.firebaseapp.com",
    databaseURL: "https://trakarotwo.firebaseio.com",
    projectId: "trakarotwo",
    storageBucket: "trakarotwo.appspot.com",
    messagingSenderId: "1004981268613"
};

var defaultApp = firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);

console.log(defaultApp.name);
var defaultStorage = defaultApp.storage();
var db = defaultApp.firestore();
defaultStorage = firebase.storage();