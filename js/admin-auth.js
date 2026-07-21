import { auth, db } from "./firebase.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

onAuthStateChanged(auth, async(user)=>{

    if(!user){
        window.location.replace("login.html");
        return;
    }

    const snap = await getDoc(doc(db,"users",user.uid));

    if(!snap.exists() || snap.data().role !== "admin"){

        window.showToast?.("Access Denied!", "error");
        setTimeout(() => {
            window.location.replace("hub.html");
        }, 1200);
        return;
    }
});