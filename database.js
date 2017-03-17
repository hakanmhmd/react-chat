import firebase from 'firebase';

const config = {
  apiKey: '',
  authDomain: 'reactchat-22a76.firebaseio.com',
  databaseURL: 'https://reactchat-22a76.firebaseio.com/'
};

firebase.initializeApp(config);
const database = firebase.database();

export default database;