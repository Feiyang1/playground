import { getDatabase, ref as rtdbRef, get } from "firebase/database";
import { getStorage, uploadString, getDownloadURL, ref } from "firebase/storage";
import { initializeApp, FirebaseApp, FirebaseOptions } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getAnalytics, logEvent, settings, SettingsOptions } from 'firebase/analytics';
import { getPerformance, FirebasePerformance, PerformanceTrace, trace } from 'firebase/performance';
import { getRemoteConfig, RemoteConfig, setLogLevel, fetchAndActivate, getAll } from 'firebase/remote-config';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getMessaging, onBackgroundMessage } from 'firebase/messaging/sw';

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

async function run() {
    /**
     * Auth
     */
    const auth = getAuth(firebaseApp);
    console.log('signed in', await signInAnonymously(auth));

    /**
     * Firestore
     */
    const firestore = getFirestore();
    getDoc(doc(firestore, 'coll/New York')).then(d => {
        console.log('got data from firestore, ', d.data())
    });

    /**
     * Database
     */
    const database = getDatabase(firebaseApp);
    console.log('get database ref');
    get(rtdbRef(database, "Foo")).then(d => {
        console.log('got data from database, ', d.val())
    });


    /**
     * Storage
     */
    const storage = getStorage(firebaseApp);
    const storageRef = ref(storage, "data_txt");
    await uploadString(storageRef, "Hello World");
    const url = await getDownloadURL(storageRef);
    console.log('download url is ', url);

    /**
     * Analytics
     */
    const analytics = getAnalytics(firebaseApp);
    logEvent(analytics, 'test_exp');


    /**
     * RC
     */
    const rc: RemoteConfig = getRemoteConfig(firebaseApp);
    await fetchAndActivate(rc);

    for (const key of Object.keys(getAll(rc))) {
        console.log('rc', key);
    }

    /**
     * Perf
     */
    const perf: FirebasePerformance = getPerformance(firebaseApp);

    /**
     * FCM
     */
    onBackgroundMessage(getMessaging(), () => {})

    /**
     * Functions
     */
}

run();