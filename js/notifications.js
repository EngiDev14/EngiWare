import { messaging, db, auth } from "./firebase.js";

import {
getToken
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging.js";

import {
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const vapidKey = "BM5PUXs3siXz_ruTCAq2vMEUqj1z9Gq3tJv9LZM60ZGo1zlSD6cgL9GyehuLovOnOyljSL9sGNfmDyZRqvrVnSw";

console.log("Notifications JS Loaded 🚀");

async function registerNotifications() {

try {

if (!("serviceWorker" in navigator)) {
    console.log("Service Worker not supported");
    return;
}

await navigator.serviceWorker.register("/firebase-messaging-sw.js");
console.log("Service Worker Registered");

const permission = await Notification.requestPermission();

console.log("Permission:", permission);

if (permission !== "granted") {
    console.log("Permission denied");
    return;
}

const token = await getToken(messaging, {
    vapidKey
});

console.log("FCM Token:", token);

if (auth.currentUser) {

    await updateDoc(
        doc(db, "users", auth.currentUser.uid),
        {
            fcmToken: token
        }
    );

    console.log("Token Saved Successfully");

}

}
catch(err){
    console.error("FCM ERROR:", err);
}

}