import { auth } from "./firebase.js";

import {
EmailAuthProvider,
reauthenticateWithCredential,
updatePassword
}

from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

document
.getElementById("backBtn")
.addEventListener("click",()=>{

window.location.href = "hub.html";

});

window.goProfile = function(){

window.location.href = "profile.html";

}

window.togglePasswordSection = function(){

const section =
document.getElementById("passwordSection");

const about =
document.getElementById("aboutSection");

about.style.display = "none";

section.style.display =
section.style.display === "block"
? "none"
: "block";

}

window.toggleAboutSection = function(){

const about =
document.getElementById("aboutSection");

const section =
document.getElementById("passwordSection");

section.style.display = "none";

about.style.display =
about.style.display === "block"
? "none"
: "block";

}

document
.getElementById("backBtn")
.onclick = ()=>{

window.location.href = "hub.html";

};

const changePasswordBtn =
document.getElementById("changePasswordBtn");

changePasswordBtn.addEventListener("click",async()=>{

const currentPassword =
document.getElementById("currentPassword").value;

const newPassword =
document.getElementById("newPassword").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(
currentPassword==="" ||
newPassword==="" ||
confirmPassword===""){

window.showToast(
"Please fill all fields.",
"error"
);

return;

}

if(newPassword.length < 6){

window.showToast(
"Password must contain at least 6 characters.",
"error"
);

return;

}

if(newPassword !== confirmPassword){

window.showToast(
"Passwords do not match.",
"error"
);

return;

}

if(currentPassword === newPassword){

window.showToast(
"New password cannot be same as current password.",
"error"
);

return;

}

try{

const user =
auth.currentUser;

const credential =
EmailAuthProvider.credential(
user.email,
currentPassword
);

await reauthenticateWithCredential(
user,
credential
);

await updatePassword(
user,
newPassword
);

window.showToast(
"🔒 Password changed successfully!"
);

document.getElementById("currentPassword").value="";
document.getElementById("newPassword").value="";
document.getElementById("confirmPassword").value="";

}

catch(error){

window.showToast(
error.message,
"error"
);

}

});