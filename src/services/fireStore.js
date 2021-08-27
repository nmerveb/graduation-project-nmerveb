import firebase from './firebase';

const db = firebase.firestore();

function add() {
  db.collection('application-list').add({
    name: 'deneme',
    surname: 'test',
    age: '22',
    address: 'test2',
  });
}

export default add;
