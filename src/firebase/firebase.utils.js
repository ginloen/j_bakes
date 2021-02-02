import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3NykdQ28_Y60ym29lhCoV1_V9HGr0POU",
    authDomain: "j-bakes-db.firebaseapp.com",
    projectId: "j-bakes-db",
    storageBucket: "j-bakes-db.appspot.com",
    messagingSenderId: "475872576755",
    appId: "1:475872576755:web:c6b9167368cc7e8bc62386"
  };

export const createUserProfileDocument = async (userAuth, additonalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;