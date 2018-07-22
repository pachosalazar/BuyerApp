import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAAc6NIA86KDekb3F17HGHGxQ1BNlB922k",
    authDomain: "buyer-3ad89.firebaseapp.com",
    databaseURL: "https://buyer-3ad89.firebaseio.com",
    projectId: "buyer-3ad89",
    storageBucket: "buyer-3ad89.appspot.com",
    messagingSenderId: "1078989500824"
  };


  // get the element 
  // const preObject = document.getElementById('clothes');
  // create the reference
  // const dbRefObject = firebase.database().ref().child('clothes');
  //Sync
  // dbRefObject.on('value', snap => console.log(snap.val()));




  var fire = firebase.initializeApp(config);
export default fire;