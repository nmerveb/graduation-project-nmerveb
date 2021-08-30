import firebase from './firebase';
import codeGenerator from '../utils/codeGenerator';

const db = firebase.firestore();

export const AddApplication = (application) => {
  const code = codeGenerator();
  const firstStatus = 'Başvurunuz inceleniyor.';
  const defaultDescription = 'Başvurunuz alınmıştır.';
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
      description: defaultDescription,
      date: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
  return code;
};

export const getApplicationFields = (queryCode) => {
  const applicationRef = db.collection('application-list');

  return applicationRef
    .where('Id', '==', queryCode)
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((application) => application.data())[0]);
};

export const getPendingList = async () => {
  const applicationRef = db.collection('application-list');
  const pendingList = [];
  const querySnapshot = await applicationRef.where('status', '==', 'Başvurunuz inceleniyor.').get();
  querySnapshot.docs.map((application) => {
    const data = application.data();
    pendingList.push(data);
  });

  return pendingList;
};
export const getAuth = async () => {
  const applicationRef = db.collection('application-list');
  const auth = applicationRef
    .doc('Auth')
    .get()
    .then((doc) => doc.data());
  return auth;
};
function add() {}

export default add;
