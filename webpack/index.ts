import { getDatabase } from "firebase/database";
import { getStorage, uploadString, getDownloadURL, ref } from "firebase/storage";
import { getFirestore, doc, getDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getAuth, indexedDBLocalPersistence, initializeAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getMessaging, onBackgroundMessage} from 'firebase/messaging/sw'

const firebaseConfig = {
    apiKey: "AIzaSyCSwhdsZZ34EQXL-QOOidN9IHUGxmmjPdU",
    authDomain: "havefun-1d170.firebaseapp.com",
    databaseURL: "https://havefun-1d170.firebaseio.com",
    projectId: "havefun-1d170",
    storageBucket: "havefun-1d170.appspot.com",
    messagingSenderId: "473315497267",
    appId: "1:473315497267:web:48b86522c4d135a4",
    measurementId: "G-56GY1RSM8T"
};

const firebaseApp = initializeApp(firebaseConfig);

// const database = getDatabase(firebaseApp);
// console.log('get database ref');
// const databaseRef = database.ref("data.txt");
// const storage = getStorage(firebaseApp);
const auth = getAuth();
const firestore = getFirestore(firebaseApp);

console.log(auth);

// const docRef = doc(firestore, 'coll/New York');
// onSnapshot(docRef, snapshot => {
//     console.log('snapshot', snapshot.data());
// }, err => {
//     console.log('error', err);
// });

// const storageRef = ref(storage, "data.txt");

async function run() {
    // await signInAnonymously(auth);
    getDoc(doc(firestore, 'coll/New York')).then(d => console.log('auth initialize sync', d.data()));



    // await uploadString(storageRef, "Hello World");
    // const url = await getDownloadURL(storageRef);
    // console.log('download url is ', url);
    // await databaseRef.set(url);

    onBackgroundMessage(getMessaging(), () => {})
}

setTimeout(async () => {
    // const auth = initializeAuth(firebaseApp, { persistence: [indexedDBLocalPersistence] });
    // console.log('initializedAuth async!')
    // getDoc(doc(firestore, 'coll/New York')).then(d => console.log('auth initialize sync', d.data()));


    // onAuthStateChanged(auth, async (_user) => {
    //     const d = await getDoc(doc(firestore, 'coll/New York'));

    //     console.log('auth initialize onAuthStateChanged', d.data());
    // });

    // setTimeout(async () => {
    //     const d = await getDoc(doc(firestore, 'coll/New York'));

    //     console.log('auth initialize async', d.data());
    // }, 500)
}, 1000);

run();