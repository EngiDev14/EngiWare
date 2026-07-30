import { auth, db } from "./firebase.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

import {
doc,
getDoc,
setDoc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const saveBtn =
document.getElementById("saveProfileBtn");

onAuthStateChanged(auth, async(user)=>{

if(!user){

window.location.replace("login.html");

return;

}

const userRef =
doc(db,"users",user.uid);

const userSnap =
await getDoc(userRef);

if(userSnap.exists()){

const data =
userSnap.data();

document.getElementById("welcomeName").textContent =
`Welcome Back, ${data.name || "Student"}`;

document.getElementById("displayName").textContent =
data.name || "-";

document.getElementById("displayEmail").textContent =
user.email;

document.getElementById("displayCollege").textContent =
data.college || "-";

document.getElementById("displayBranch").textContent =
data.branch || "-";

document.getElementById("displaySemester").textContent =
data.semester || "-";

document.getElementById("profileName").value =
data.name || "";

document.getElementById("profileCollege").value =
data.college || "";

document.getElementById("profileBranch").value =
data.branch || "";

document.getElementById("profileSemester").value =
data.semester || "";

}

saveBtn.addEventListener("click", async()=>{

await setDoc(userRef,{

name:
document.getElementById("profileName").value,

college:
document.getElementById("profileCollege").value,

branch:
document.getElementById("profileBranch").value,

semester:
document.getElementById("profileSemester").value

},{
merge:true
});

localStorage.setItem(
"userName",
document.getElementById("profileName").value
);

document.getElementById("welcomeName").textContent =
`Welcome Back, ${document.getElementById("profileName").value}`;

document.getElementById("displayName").textContent =
document.getElementById("profileName").value;

document.getElementById("displayCollege").textContent =
document.getElementById("profileCollege").value;

document.getElementById("displayBranch").textContent =
document.getElementById("profileBranch").value;

document.getElementById("displaySemester").textContent =
document.getElementById("profileSemester").value;

showToast("✅ Profile Updated Successfully!");

});

});