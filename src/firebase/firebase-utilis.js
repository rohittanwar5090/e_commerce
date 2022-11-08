// import firebase from 'firebase/app'
// import 'firebase/firestore'
// import 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAI69EKO0SzpkJB_FcN_CWbfxyiXFw9v9o",
    authDomain: "crown-db-6f41a.firebaseapp.com",
    projectId: "crown-db-6f41a",
    storageBucket: "crown-db-6f41a.appspot.com",
    messagingSenderId: "1067765523942",
    appId: "1:1067765523942:web:04c3115e25d9a5c4f4a227",
    measurementId: "G-PCJZ251QLV"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth , additionalData) =>{  
  // console.log('i am from firebase' , userAuth);
  if(!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)  

  const snapShot = await userRef.get();

  // console.log(snapShot);
  if(!snapShot.exists){
    const{displayName , email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName , 
        email , 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log("error in adding user" , error.message);
    }
  }
  // console.log(userRef);
  return userRef
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)
export default firebase;  
