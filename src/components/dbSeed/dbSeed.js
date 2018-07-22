import firebase from '../../fire'

const firebaseConfig = require('./data-seed.json').result;
firebase.initializeApp(firebaseConfig);



const getAllClothes = () => {
  return firebase.database().ref('/clothes').once('value').then(snap => {
    return {clothes: snap.val()};
  });
};


module.exports = {
  getAllClothes,
  
};