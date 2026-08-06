import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail,
onAuthStateChanged,
signOut
}

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
doc,
setDoc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// ---------------- REGISTER ----------------

const registerBtn =
document.getElementById("registerBtn");

if(registerBtn){

registerBtn.addEventListener("click", async ()=>{

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const password =
document.getElementById("password").value;

try{

if(name === ""){
showToast("Please enter your name","error");
return;
}

const userCredential =
await createUserWithEmailAndPassword(
auth,
email,
password
);

await setDoc(
doc(db, "users", userCredential.user.uid),
{
name: name,
email: email,
college: "",
branch: "",
semester: "",
role: "student",
createdAt: new Date().toISOString()
}
);

window.showToast(
"🎉 Account Created Successfully!"
);

setTimeout(()=>{
window.location.replace("login.html");
},2500);
}

catch(error){
window.showToast(
error.message,
"error"
);
}
});
}

// ---------------- LOGIN ----------------

const loginBtn =
document.getElementById("loginBtn");

if(loginBtn){

loginBtn.addEventListener("click", async ()=>{

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

try{
await signInWithEmailAndPassword(
auth,
email,
password
);

window.showToast(
"✅ Login Successful!"
);

setTimeout(()=>{
window.location.replace("hub.html");
},2500);
}
catch(error){

window.showToast(
error.message,
"error"
);
}
});
}

// ------------ Forgot Password ------------- //

const forgotPassword =
document.getElementById("forgotPassword");

if (forgotPassword) {

forgotPassword.onclick = async function(e){

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    if(email === ""){

        window.showToast(
        "Please enter your email first.",
        "error"
        );
        return;
    }

    try{
        await sendPasswordResetEmail(auth,email);
        window.showToast(
        "📧 Password reset link sent to your email."
        );
    }

    catch(error){
        window.showToast(
        error.message,
        "error"
        );
    }
};
}

// ---------------- AUTO LOGIN ----------------

onAuthStateChanged(auth, async (user) => {

if(user){

const page =
window.location.pathname;

const docRef =
doc(db,"users",user.uid);

const docSnap =
await getDoc(docRef);

if(docSnap.exists()){

const data =
docSnap.data();

localStorage.setItem(
"userName",
data.name
);

localStorage.setItem(
"userRole",
data.role || "student"
);

localStorage.setItem(
"userId",
user.uid
);

}

if(
page.endsWith("login.html") ||
page.endsWith("register.html")
){
window.location.replace("hub.html");
}

}

});

// ---------------- LOG OUT ----------------

window.logoutUser = async function(){

try{

await signOut(auth);

window.showToast(
"👋 Logged Out Successfully!"
);

setTimeout(()=>{
window.location.replace("login.html");
},1800);
}

catch(error){
alert(error.message);
}
};