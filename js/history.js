import { db, auth } from "./firebase.js";

import{

collection,
getDocs,
query,
where

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const tableBody =
document.getElementById("historyTableBody");

let allHistory = [];

async function loadHistory(){

tableBody.innerHTML = "";

const q = query(

collection(db,"attendanceHistory"),

where("userId","==",auth.currentUser.uid)

);

const snapshot =
await getDocs(q);

allHistory = [];

snapshot.forEach((doc)=>{

allHistory.push({

id:doc.id,

...doc.data()

});

});

renderHistory();

}

function renderHistory(){

tableBody.innerHTML = "";

allHistory.forEach(item=>{

tableBody.innerHTML += `

<tr>

<td>${item.subject}</td>

<td>${item.faculty || "-"}</td>

<td class="${
item.status==="Present"
? "status-present"
: "status-absent"
}">
${item.status==="Present"
? "🟢 Present"
: "🔴 Absent"}
</td>

<td>${item.date}</td>

<td>${item.time}</td>

</tr>

`;

});

if(allHistory.length===0){

tableBody.innerHTML=`

<tr>

<td colspan="5"
style="text-align:center;padding:20px;">

No Attendance History Yet 📅

</td>

</tr>

`;

}

}

onAuthStateChanged(auth,(user)=>{

if(user){

loadHistory();

}

});