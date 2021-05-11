import { getFirestore, getDoc, doc, setLogLevel } from "firebase/firestore";
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, get, ref } from 'firebase/database';
import { getStorage, getDownloadURL, ref as storageRef } from 'firebase/storage';

const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyCSwhdsZZ34EQXL-QOOidN9IHUGxmmjPdU",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267",
    appId: "1:473315497267:web:48b86522c4d135a4",
    measurementId: "G-56GY1RSM8T"
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

// getAuth();
// const firestore = getFirestore(firebaseApp);
// setLogLevel("debug");
// // getAuth();
// getDoc(doc(firestore, 'coll/New York')).then(v => {
//     console.log('sync firestore get', v.data());
// });
// async function run() {
//     // const auth = getAuth();
//     // await signInAnonymously(auth);

//     // getDoc(doc(firestore, 'coll/New York')).then(v => {
//     //     console.log('sync firestore get', v.data());
//     // });
// }

// setTimeout(() => {
//     // getAuth();
//     console.log('after getAuth()())()()()()()(()()')
//     getDoc(doc(firestore, 'coll/New York')).then(v => {
//         console.log('AAAAAAsync firestore get', v.data());
//     });
// }, 500);

// run();


/** Database */
// getAuth();
const database = getDatabase();
// getAuth();
const docRef = ref(database, 'Foo');

// get(docRef).then(d => {
//     console.log('database get', d.val());
// });

setTimeout(async () => {
    await signInWithEmailAndPassword(getAuth(), 'test@test.test', 'testtest');

    // access denied
    // get(docRef).then(d => {
    //     console.log('database get async', d.val());
    // });

    // onAuthStateChanged(getAuth(), (user) => {
    //     // access denied
    //     get(docRef).then(d => {
    //         console.log('database get async', d.val());
    //     });
    // });

    getDownloadURL(storageRef(getStorage(), 'data_txt')).then(url => console.log('url is', url))
}, 1000)