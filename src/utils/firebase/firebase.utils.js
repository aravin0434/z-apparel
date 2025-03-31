import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdlBWB5EoSajbGA0qULXMdvJ9ip6hGOzY",
    authDomain: "z-apparel-db.firebaseapp.com",
    projectId: "z-apparel-db",
    storageBucket: "z-apparel-db.firebasestorage.app",
    messagingSenderId: "800940915951",
    appId: "1:800940915951:web:b5285dc0aa5fb303186f1a"
};
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export async function createUserDocFromAuth(userAuth) {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
    if(userSnapshot.exists()) {
        return userDocRef;
    }
    
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
        return userDocRef;
    } catch (error) {
        console.log('Error creating the user', error.message);
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}