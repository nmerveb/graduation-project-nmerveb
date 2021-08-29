import firebase from './firebase';
import codeGenerator from '../utils/codeGenerator';

const db = firebase.firestore();

export function AddApplication(application) {
  const code = codeGenerator();
  const firstStatus = 'Başvuru inceleniyor';
  db.collection('application-list')
    .add({
      Id: code,
      name: application.name,
      surname: application.surname,
      TC: application.TC,
      age: application.age,
      address: application.address,
      reason: application.reason,
      status: firstStatus,
      description: '',
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  return code;
}

export const getApplicationFields = (queryCode) => {
  const applicationRef = db.collection('application-list');

  return applicationRef
    .where('Id', '==', queryCode)
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((application) => application.data())[0]);
};
function add() {}

export default add;
