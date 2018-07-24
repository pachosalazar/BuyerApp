// import firebase from '../../fire'

// const firebaseConfig = require('./data-seed.json').result;
// firebase.initializeApp(firebaseConfig);



// const getAllDbSeed = () => {
//   return firebase.database().ref('/clothes').once('value').then(snap => {
//     return {clothes: snap.val()};
//   });
// };


// module.exports = {
//     DbSeed,
  
// };
import DBFormTool from 'react-firebase-schema-form';

export const newClothes =
{
    "clothes" : [{
     "pants" : {
          
          "img":"",
          "type": "Pants and jeans",
          "color": "red",
          "size": "xl",
          "price": "$ 32"
     }},

     {"pants1" : {
          "img":"",
          "type": "Pants and jeans",
          "color": "red",
          "size": "xl",
          "price": "$ 32" 
        }}
         
     ]
    };
  