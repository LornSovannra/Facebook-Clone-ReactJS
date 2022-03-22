import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDw92tifWtJoGZ0J26K1qvXMSQn2ezTtqg",
    authDomain: "facebook-clone-33f33.firebaseapp.com",
    projectId: "facebook-clone-33f33",
    storageBucket: "facebook-clone-33f33.appspot.com",
    messagingSenderId: "152678410153",
    appId: "1:152678410153:web:73e89c62fc8c651efd46b8"
};

//Connect to firebase store
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

//Connect to flatform Authuntication
const auth = firebase.auth();

//Tell google to provide turn on login service
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider };
export default db;