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

const profileImageInput =
document.getElementById("profileImageInput");

const profileImagePreview =
document.getElementById("profileImagePreview");

let selectedImage = "";

profileImageInput.addEventListener("change",(e)=>{

const file = e.target.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(event){

selectedImage = event.target.result;

profileImagePreview.src = selectedImage;

};

reader.readAsDataURL(file);

});

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

if(data.profileImage){

profileImagePreview.src =
data.profileImage;

}

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

const latestSnap = await getDoc(userRef);

let imageURL = latestSnap.data()?.profileImage || "";

if(selectedImage){

imageURL = selectedImage;

}

const updateData = {

name:
document.getElementById("profileName").value,

college:
document.getElementById("profileCollege").value,

branch:
document.getElementById("profileBranch").value,

semester:
document.getElementById("profileSemester").value,

profileImage: imageURL

};

await setDoc(userRef, updateData,{
merge:true
});

await setDoc(userRef, updateData,{

name:
document.getElementById("profileName").value,

college:
document.getElementById("profileCollege").value,

branch:
document.getElementById("profileBranch").value,

semester:
document.getElementById("profileSemester").value,

profileImage: imageURL

},{
merge:true
});

if(imageURL){

profileImagePreview.src = imageURL;

}

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