import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCtDD-jpm1J4oUPxPnQhMH3eSgEuvw7Imo',
  authDomain: 'reactchat-22a76.firebaseio.com',
  databaseURL: 'https://reactchat-22a76.firebaseio.com/'
};

firebase.initializeApp(config);
//const database = firebase.database();

export default firebase;