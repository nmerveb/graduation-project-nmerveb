/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import firebase from './firebase';
import codeGenerator from '../utils/codeGenerator';

const db = firebase.firestore();

export const AddApplication = (application) => {
  const code = codeGenerator();
  const firstStatus = 'pending';
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
  const querySnapshot = await applicationRef.where('status', '==', 'pending').get();
  querySnapshot.docs.map((application) => pendingList.push(application.data()));

  return pendingList;
};
export const updateStatus = async (appId, data) => {
  const applicationRef = db.collection('application-list');
  const docId = await applicationRef
    .where('Id', '==', appId)
    .get()
    .then((querySnapshot) => querySnapshot.docs.map((application) => application.id)[0]);

  await applicationRef.doc(docId).update({
    status: data.status,
    description: data.description,
  });
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
