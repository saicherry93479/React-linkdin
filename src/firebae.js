import firebase from  'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAnmA8jAefjZS1pxj3fnYVti7gOdGhmYvU",
    authDomain: "linkedin-clone-62a52.firebaseapp.com",
    projectId: "linkedin-clone-62a52",
    storageBucket: "linkedin-clone-62a52.appspot.com",
    messagingSenderId: "889792117765",
    appId: "1:889792117765:web:cf7101537531b34e26f06c"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();

  const auth=firebase.auth();
  const provider =new firebase.auth.GoogleAuthProvider();

  const storage=firebase.storage();


  export {auth,provider, storage};
  export default db;
