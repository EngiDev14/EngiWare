// ================= ATTENDANCE MODULE =================
import { db } from "./firebase.js";

let editingAttendanceId = null;
// ================= DELETE MODAL =================

let deleteId = null;
let deleteCallback = null;

const deleteModal =
document.getElementById("deleteModal");

window.openDeleteModal = function(message,id,callback){

deleteId = id;
deleteCallback = callback;

document.getElementById("deleteMessage").textContent =
message;

deleteModal.style.display = "flex";

};

document.getElementById("cancelDelete").onclick = ()=>{

deleteModal.style.display = "none";

};

document.getElementById("confirmDelete").onclick = async ()=>{

deleteModal.style.display = "none";

if(deleteCallback){

await deleteCallback(deleteId);

}

};

import {
collection,
addDoc,
getDocs,
getDoc,
deleteDoc,
serverTimestamp,
updateDoc,
doc
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

// ================= VARIABLES =================

const modal =
document.getElementById("attendanceModal");

const addBtn =
document.getElementById("addSubjectBtn");

const closeBtn =
document.getElementById("closeAttendanceModal");

const saveBtn =
document.getElementById("saveAttendanceSubject");

const container =
document.getElementById("attendanceContainer");

// ================= OPEN / CLOSE MODAL =================

addBtn.onclick = () => {
modal.style.display = "flex";
};

closeBtn.onclick = () => {
modal.style.display = "none";
};

// ================= SAVE SUBJECT =================

saveBtn.onclick = async ()=>{

const subject =
document.getElementById("attendanceSubject").value.trim();

const faculty =
document.getElementById("attendanceFaculty").value.trim();

if(subject===""){

window.showToast(
"Please enter subject name.",
"error"
);

return;
}

try{

const attendanceData={
subject,
faculty
};

if(editingAttendanceId){

await updateDoc(
doc(db,"attendance",editingAttendanceId),
attendanceData
);

window.showToast(
"✏ Subject Updated Successfully!"
);

editingAttendanceId = null;
saveBtn.textContent = "Save";

}
else{

attendanceData.userId =
localStorage.getItem("userId");

attendanceData.present = 0;
attendanceData.absent = 0;
attendanceData.createdAt = serverTimestamp();

await addDoc(
collection(db,"attendance"),
attendanceData
);

window.showToast(
"📚 Subject Added Successfully!"
);
}

document.getElementById("attendanceSubject").value="";
document.getElementById("attendanceFaculty").value="";
modal.style.display="none";
loadAttendance();

}

catch(error){

window.showToast(
error.message,
"error"
);
}
};

// ================= EDIT SUBJECT =================

window.editAttendance = async function(id){

const snapshot =
await getDoc(
doc(db,"attendance",id)
);

const data =
snapshot.data();

document.getElementById("attendanceSubject").value =
data.subject;

document.getElementById("attendanceFaculty").value =
data.faculty;

editingAttendanceId = id;
saveBtn.textContent = "Update";
modal.style.display = "flex";

};

// ================= DELETE SUBJECT =================

window.deleteAttendance = function(id){

openDeleteModal(
"Delete this subject?",
id,
confirmDeleteAttendance
);

};

async function confirmDeleteAttendance(id){

try{

await deleteDoc(
doc(db,"attendance",id)
);

window.showToast(
"🗑 Subject Deleted Successfully!"
);

loadAttendance();

}

catch(error){

window.showToast(
error.message,
"error"
);

}

}

// ================= LOAD SUBJECTS =================

async function loadAttendance(){

container.innerHTML="";

let totalPresent = 0;
let totalAbsent = 0;

const snapshot =
await getDocs(collection(db,"attendance"));

let totalSubjects = 0;

snapshot.forEach((doc)=>{

const data = doc.data();

if(data.userId !== localStorage.getItem("userId"))
return;

const present = data.present;
const absent = data.absent;

const total = present + absent;

const percentage =
total === 0
? 0
: Number(((present / total) * 100).toFixed(1));

let cardClass = "";
let statusText = "";

if(percentage >= 90){

cardClass = "excellent-card";
statusText = "🟢 Excellent";

}
else if(percentage >= 75){

cardClass = "safe-card";
statusText = "🟡 Safe";

}
else{

cardClass = "danger-card";
statusText = "🔴 Danger";

}

let predictionMessage = "";

// ================= ATTENDANCE PREDICTOR =================

if(percentage < 75){

let need = 0;

while(
((present + need) /
(total + need)) * 100 < 75
){
need++;
}

predictionMessage =
`⚠ Need <b>${need}</b> more Present classes to reach 75%.`;
}
else{

let bunk = 0;

while(
(present /
(total + bunk + 1)) * 100 >= 75
){
bunk++;
}

predictionMessage =
`🎉 You can miss <b>${bunk}</b> classes safely.`;
}

totalPresent += data.present;
totalAbsent += data.absent;

totalSubjects++;

// ------------ Progress Color ------------- //

let progressColor = "";

if(percentage >= 90){
progressColor = "#22c55e";
}
else if(percentage >= 75){
progressColor = "#facc15";
}
else{
progressColor = "#ef4444";
}

container.innerHTML += `

<div class="attendance-card ${cardClass}">

<h2>${data.subject}</h2>

<div class="attendance-status">
${statusText}
</div>

<p> 👨‍🏫 ${data.faculty || "No Faculty"} </p> 

<div class="attendance-counter">     

<div class="counter-row">

<span>✅ Present</span>

<div class="counter-buttons">

<button
class="small-btn"
onclick="decreasePresent('${doc.id}')">

➖

</button>

<span>${data.present}</span>

<button
class="small-btn"
onclick="markPresent('${doc.id}')">

➕

</button>

</div>

</div>

<div class="counter-row">

<span>❌ Absent</span>

<div class="counter-buttons">

<button
class="small-btn"
onclick="decreaseAbsent('${doc.id}')">

➖

</button>

<span>${data.absent}</span>

<button
class="small-btn"
onclick="markAbsent('${doc.id}')">

➕

</button>

</div>

</div>

</div>

<p> Attendance : <strong>${percentage}%</strong> </p>

<div class="progress">
<div
class="progress-bar" style = "width:${percentage}%; background:${progressColor};">
</div>
</div>

<div class="attendance-prediction">
${predictionMessage}
</div>

<div class="attendance-actions">

<button class="present-btn" onclick="markPresent('${doc.id}')">
➕ Present
</button>

<button class="absent-btn" onclick="markAbsent('${doc.id}')">
➖ Absent
</button>

<button class="edit-btn" onclick="editAttendance('${doc.id}')">
✏ Edit
</button>

<button class="delete-btn" onclick="deleteAttendance('${doc.id}')">
🗑 Delete
</button>

</div>
</div>
`;
});

document.getElementById("totalSubjects").textContent =
totalSubjects;

// ================= OVERALL ATTENDANCE =================

const totalClasses =
totalPresent + totalAbsent;

const overall =
totalClasses === 0
? 0
: ((totalPresent / totalClasses) * 100).toFixed(1);

document.getElementById("overallAttendance").textContent =
overall + "%";

}

// ================= START =================

loadAttendance();

// ================= PRESENT =================

window.markPresent = async function(id){

    try{
        const docRef =
        doc(db,"attendance",id);

        const snapshot =
        await getDoc(docRef);

        const data =
        snapshot.data();

        await updateDoc(docRef,{
            present : data.present + 1
        });

        window.showToast(
        "✅ Present Marked Successfully!"
        );

        loadAttendance();
    }

    catch(error){
        window.showToast(
        error.message,
        "error"
        );
    }
};

// ================= ABSENT =================

window.markAbsent = async function(id){

    try{
        const docRef =
        doc(db,"attendance",id);

        const snapshot =
        await getDoc(docRef);

        const data =
        snapshot.data();

        await updateDoc(docRef,{
            absent : data.absent + 1
        });

        window.showToast(
        "❌ Absent Marked Successfully!"
        );

        loadAttendance();
    }

    catch(error){
        window.showToast(
        error.message,
        "error"
        );
    }
};

// ================= DECREASE PRESENT =================

window.decreasePresent = async function(id){

try{

const docRef =
doc(db,"attendance",id);

const snapshot =
await getDoc(docRef);

const data =
snapshot.data();

if(data.present===0){

window.showToast(
"Present cannot be less than 0.",
"error"
);

return;

}

await updateDoc(docRef,{

present:data.present-1

});

window.showToast(
"Present Updated!"
);

loadAttendance();

}

catch(error){

window.showToast(
error.message,
"error"
);

}

};

// ================= DECREASE ABSENT =================

window.decreaseAbsent = async function(id){

try{

const docRef =
doc(db,"attendance",id);

const snapshot =
await getDoc(docRef);

const data =
snapshot.data();

if(data.absent===0){

window.showToast(
"Absent cannot be less than 0.",
"error"
);

return;

}

await updateDoc(docRef,{

absent:data.absent-1

});

window.showToast(
"Absent Updated!"
);

loadAttendance();

}

catch(error){

window.showToast(
error.message,
"error"
);

}

};