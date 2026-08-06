import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
getAuth,
setPersistence,
browserLocalPersistence
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import { getFirestore }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
getMessaging
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

const firebaseConfig = {

apiKey: "AIzaSyCH50y_J4xH8R1rFuzK9DMQbBEv677UrgQ",

authDomain: "engiware.firebaseapp.com",

projectId: "engiware",

storageBucket: "engiware.firebasestorage.app",

messagingSenderId: "174038798847",

appId: "1:174038798847:web:2b46020936f0272a5457ca",

measurementId: "G-PWPYYPECNM"

};

const app =
initializeApp(firebaseConfig);

const auth =
getAuth(app);

const db =
getFirestore(app);

const messaging =
getMessaging(app);

await setPersistence(
auth,
browserLocalPersistence
);

export { auth, db, messaging };