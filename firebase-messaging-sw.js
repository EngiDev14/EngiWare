importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.0.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "BM5PUXs3siXz_ruTCAq2vMEUqj1z9Gq3tJv9LZM60ZGo1zlSD6cgL9GyehuLovOnOyljSL9sGNfmDyZRqvrVnSw",
    authDomain: "engiware.firebaseapp.com",
    projectId: "engiware",
    storageBucket: "engiware.firebasestorage.app",
    messagingSenderId: "174038798847",
    appId: "1:174038798847:web:2b46020936f0272a5457ca"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {

    self.registration.showNotification(
        payload.notification.title,
        {
            body: payload.notification.body,
            icon: "/images/logo.png"
        }
    );

});