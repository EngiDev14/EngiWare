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

updateStats();
renderHistory();
}

function updateStats(){

const total=allHistory.length;

const present=
allHistory.filter(i=>i.status==="Present").length;

const absent=
allHistory.filter(i=>i.status==="Absent").length;

const percentage=
total===0
?0
:((present/total)*100).toFixed(1);

document.getElementById("historyTotal").textContent=total;
document.getElementById("historyPresent").textContent=present;
document.getElementById("historyAbsent").textContent=absent;
document.getElementById("historyPercentage").textContent=
percentage+"%";
}

function renderHistory(){

tableBody.innerHTML = "";

// Filters
const search =
document.getElementById("historySearch").value.toLowerCase();

const selectedDate =
document.getElementById("historyDate").value;

const selectedStatus =
document.getElementById("historyStatus").value;

const sort =
document.getElementById("historySort").value;

// Filter
let filtered = allHistory.filter(item=>{

const matchSearch =
item.subject.toLowerCase().includes(search);

const matchStatus =
selectedStatus === "" ||
item.status === selectedStatus;

let formattedDate = "";

if(selectedDate){
const [year,month,day] = selectedDate.split("-");
formattedDate = `${day}/${month}/${year}`;
}

const matchDate =
selectedDate === "" ||
item.date === formattedDate;

return matchSearch &&
matchStatus &&
matchDate;

});

function parseDate(dateStr){
    const [day, month, year] = dateStr.split("/");
    return new Date(year, month - 1, day);
}

// Sort
if(sort==="latest"){
    filtered.sort((a,b)=>
        b.timestamp.seconds - a.timestamp.seconds
    );
}

else if(sort==="oldest"){
    filtered.sort((a,b)=>
        a.timestamp.seconds - b.timestamp.seconds
    );
}

else if(sort === "az"){
filtered.sort((a,b)=>
a.subject.localeCompare(b.subject));
}

else if(sort === "za"){
filtered.sort((a,b)=>
b.subject.localeCompare(a.subject));
}

// oldest keeps original order

if(filtered.length===0){
tableBody.innerHTML=`

<tr>
<td colspan="5"
style="text-align:center;padding:20px;">
No Attendance History Found 📅
</td>
</tr>
`;

return;

}

filtered.forEach(item=>{

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
}

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

onAuthStateChanged(auth,(user)=>{
if(user){
loadHistory();
}
});

document.getElementById("historySearch")
.addEventListener("input",renderHistory);

document.getElementById("historyDate")
.addEventListener("change",renderHistory);

document.getElementById("historyStatus")
.addEventListener("change",renderHistory);

document.getElementById("historySort")
.addEventListener("change",renderHistory);