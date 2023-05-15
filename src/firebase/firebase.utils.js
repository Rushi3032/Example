import firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
    apiKey: "AIzaSyDQRO4TqwVt3t0oG8-WMW87-AFOVzYPEFo",
    authDomain: "rakka-web.firebaseapp.com",
    projectId: "rakka-web",
    storageBucket: "rakka-web.appspot.com",
    messagingSenderId: "624376528335",
    appId: "1:624376528335:web:ba1fbf648ce286575c66ba",
    measurementId: "G-0NQ8V4K4JL"
  };


  export const createUserProfileDocument = async (userAuth, additionalData)=> {

    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    console.log(snapShot);

    if(!snapShot.exists) {

      const {displayName, email } = userAuth;
      
    const createdAt = new Date();

    try {
      await userRef.set({displayName,
      email,
    createdAt, ...additionalData
  });
    }  catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
 };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;  