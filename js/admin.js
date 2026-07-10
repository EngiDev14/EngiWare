import { db } from "./firebase.js";

let editingNoteId = null;
let allNotes = [];

let editingSubjectId = null;
let allSubjects = [];

let editingLectureId = null;
let allLectures = [];

let allPYQs = [];

import{
collection,
getDocs,
getDoc,
addDoc,
updateDoc,
deleteDoc,
doc,
serverTimestamp

} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function loadDashboard(){

    // USERS
    const usersSnapshot =
    await getDocs(collection(db,"users"));

    document.getElementById("totalUsers").textContent =
    usersSnapshot.size;


    // NOTES
    const notesSnapshot =
    await getDocs(collection(db,"notes"));

    allNotes = [];

    notesSnapshot.forEach(doc=>{

    allNotes.push({

    id:doc.id,

    ...doc.data()

    });

    });

    document.getElementById("totalNotes").textContent =
    notesSnapshot.size;

    const activity =
        document.getElementById("recentActivity");

        activity.innerHTML = "";

        document.getElementById("activityCount").textContent =
        notesSnapshot.size + " Items";

        notesSnapshot.forEach((noteDoc)=>{

        const note = noteDoc.data();

        const noteId = noteDoc.id;

        activity.innerHTML += `

        <div class="activity-card">

            <div class="activity-icon">
                📄
            </div>

            <div class="activity-info">

                <h3>${note.title}</h3>

                <p>

                ${note.branch}
                •
                ${note.semester}
                •
                ${note.subject}

                </p>

            </div>

            <div class="activity-actions">

            <button
            class="view-btn"
            onclick="viewNote('${note.pdfUrl}')">
            👁
            </button>

            <button
            class="edit-btn"
            onclick="editNote('${noteId}')">
            ✏
            </button>

            <button
            class="delete-btn"
            onclick="deleteNote('${noteId}')">
            🗑
            </button>

        </div>

        </div>

        `;

        });

        if(notesSnapshot.empty){

        activity.innerHTML = `

        <div class="activity-card">

            <div class="activity-icon">
                📄
            </div>

            <div class="activity-info">

                <h3>No Notes Uploaded</h3>

                <p>

                Upload your first study material.

                </p>

            </div>

        </div>

        `;

        }

        const notesTableBody =
        document.getElementById("notesTableBody");

        notesTableBody.innerHTML = "";

        notesSnapshot.forEach((noteDoc)=>{

            const note = noteDoc.data();

            const noteId = noteDoc.id;

            notesTableBody.innerHTML += `

        <tr>

        <td>${note.title}</td>

        <td>${note.branch}</td>

        <td>${note.semester}</td>

        <td>${note.subject}</td>

        <td>

        <button
        class="view-btn"
        onclick="viewNote('${note.pdfUrl}')">

        👁

        </button>

        <button
        class="edit-btn"
        onclick="editNote('${noteId}')">

        ✏

        </button>

        <button
        class="delete-btn"
        onclick="deleteNote('${noteId}')">

        🗑

        </button>

        </td>

        </tr>

        `;

        });

        if(notesSnapshot.empty){

        notesTableBody.innerHTML = `

        <tr>

        <td colspan="5"
        style="text-align:center;padding:25px;">
        No Notes Uploaded Yet 📄
        </td>
        </tr>
        `;
        }

    // LECTURES
        const lecturesSnapshot =
        await getDocs(collection(db,"lectures"));

        document.getElementById("totalLectures").textContent =
        lecturesSnapshot.size;

        allLectures = [];

        const lecturesTable =
        document.getElementById("lecturesTableBody");

        lecturesTable.innerHTML = "";

        lecturesSnapshot.forEach((lectureDoc)=>{

        const lecture = lectureDoc.data();

        if(
        lecture.title &&
        lecture.branch &&
        lecture.semester &&
        lecture.subject
        ){

        allLectures.push({
        id: lectureDoc.id,
        ...lecture
        });
        }

        lecturesTable.innerHTML += `

        <tr>

        <td>${lecture.title}</td>

        <td>${lecture.branch}</td>

        <td>${lecture.semester}</td>

        <td>${lecture.subject}</td>

        <td>

        <button
        class="view-btn"
        onclick="viewLecture('${lecture.lectureUrl}')">

        👁

        </button>

        <button
        class="edit-btn"
        onclick="editLecture('${lectureDoc.id}')">

        ✏

        </button>

        <button
        class="delete-btn"
        onclick="deleteLecture('${lectureDoc.id}')">

        🗑

        </button>

        </td>

        </tr>

        `;

        });

        if(lecturesSnapshot.empty){

        lecturesTable.innerHTML = `

        <tr>

        <td colspan="5"
        style="text-align:center;padding:25px;">

        No Lectures Uploaded Yet 🎥

        </td>

        </tr>

        `;

        }

        // ================= Load PYQs =================

        const pyqSnapshot =
        await getDocs(collection(db,"pyqs"));

        allPYQs = [];

        pyqSnapshot.forEach((doc)=>{

            allPYQs.push({

                id: doc.id,

                ...doc.data()

            });

        });

        renderFilteredPYQs();

    // SUBJECTS
        const subjectsSnapshot =
        await getDocs(collection(db,"subjects"));

        document.getElementById("totalSubjects").textContent =
        subjectsSnapshot.size;

        allSubjects = [];

        subjectsSnapshot.forEach((subjectDoc)=>{

            const subject = subjectDoc.data();

        if(
        subject.name &&
        subject.branch &&
        subject.semester
        ){

        allSubjects.push({
        id: subjectDoc.id,
        ...subject
        });
        }

        });
        renderFilteredSubjects();
        renderFilteredLectures();
}

loadDashboard();

// ================= NOTES Modal =================

const uploadModal =
document.getElementById("uploadModal");

// ================= PYQ Modal =================

const pyqModal =
document.getElementById("pyqModal");

document
.getElementById("uploadPYQBtn")
.onclick = () => {

pyqModal.style.display = "flex";

loadPYQSubjects();

};

document
.getElementById("closePYQ")
.onclick = () => {

pyqModal.style.display = "none";

};

// ================= LECTURES Modal =================

const lectureModal =
document.getElementById("lectureModal");

// ================= SUBJECTS Modal =================

const subjectModal =
document.getElementById("subjectModal");

document
.getElementById("uploadNotesBtn")
.onclick = () => {                            // upload notes modal

uploadModal.style.display = "flex";

loadSubjectsDropdown();

};

document
.getElementById("uploadLectureBtn")
.onclick = () => {                              // upload lectures modal

lectureModal.style.display = "flex";

loadLectureSubjects();

};


document
.getElementById("closeUpload")
.onclick = () => {                                  // close notes modal

    uploadModal.style.display = "none";

    editingNoteId = null;

    document.getElementById("uploadPDF").textContent = "Upload";

    document.getElementById("noteTitle").value = "";
    document.getElementById("noteSubject").value = "";
    document.getElementById("noteSubject").innerHTML = `
        <option value="">
        Select Subject
        </option>
        `;
    document.getElementById("noteFileName").value = "";
    document.getElementById("noteBranch").selectedIndex = 0;
    document.getElementById("noteSemester").selectedIndex = 0;

};

document
.getElementById("closeLecture")
.onclick = () => {

lectureModal.style.display = "none";
                                                                   // close lecture modal
document.getElementById("lectureTitle").value = "";

document.getElementById("lectureUrl").value = "";

document.getElementById("lectureBranch").selectedIndex = 0;

document.getElementById("lectureSemester").selectedIndex = 0;

document.getElementById("lectureSubject").innerHTML = `
<option value="">Select Subject</option>
`;

document.getElementById("uploadLecture").textContent = "Upload";

loadDashboard();

};

document
.getElementById("manageSubjectsBtn")
.onclick = ()=>{                                            // manage subjects modal

subjectModal.style.display="flex";

};

document
.getElementById("closeSubjectModal")
.onclick = ()=>{

subjectModal.style.display="none";
                                                               // close subjects modal
editingSubjectId = null;

document.getElementById("subjectName").value = "";

document.getElementById("subjectBranch").selectedIndex = 0;

document.getElementById("subjectSemester").selectedIndex = 0;

document.getElementById("addSubjectBtn").textContent = "Add Subject";

};

// ---------- EVENT LISTENERS ---------- //

document
.getElementById("uploadPDF")
.onclick = uploadNote;

document
.getElementById("noteBranch")
.addEventListener("change",loadSubjectsDropdown);

document
.getElementById("noteSemester")
.addEventListener("change",loadSubjectsDropdown);

document
.getElementById("lectureBranch")
.addEventListener("change",loadLectureSubjects);

document
.getElementById("lectureSemester")
.addEventListener("change",loadLectureSubjects);

document
.getElementById("pyqBranch")
.addEventListener("change",loadPYQSubjects);

document
.getElementById("pyqSemester")
.addEventListener("change",loadPYQSubjects);

// -------- Notes uploading -------- //

async function uploadNote(){

    const title =
    document.getElementById("noteTitle").value.trim();

    const branch =
    document.getElementById("noteBranch").value;

    const semester =
    document.getElementById("noteSemester").value;

    const subject =
    document.getElementById("noteSubject").value;

    const fileName =
    document.getElementById("noteFileName").value.trim();

    if(
        title === "" ||
        subject === "" ||
        fileName === ""
    ){

        window.showToast(
        "Please fill all fields.",
        "error"
        );
        return;

    }

    // GitHub PDF URL
    const pdfUrl =
    `pdfs/${fileName}`;

    try{
        // notes updating and uploading ----------- 

        const noteData = {

            title,
            branch,
            semester,
            subject,
            fileName,
            pdfUrl,

            createdAt:
            serverTimestamp()

        };

        if(editingNoteId){

            await updateDoc(
                doc(db,"notes",editingNoteId),
                noteData
                );
            window.showToast(
            "✏ Note Updated Successfully!"
            );

            editingNoteId = null;

        }
        else{

            await addDoc(

                collection(db,"notes"),

                noteData

            );

            window.showToast(
            "📄 Note Uploaded Successfully!"
            );

        }

        uploadModal.style.display = "none";

        document.getElementById("noteTitle").value = "";
        document.getElementById("noteSubject").value = "";
        document.getElementById("noteFileName").value = "";
        document.getElementById("uploadPDF").textContent = "Upload";

        loadDashboard();

    }

    catch(error){

        window.showToast(
        error.message,
        "error"
        );

    }

}

// ================= Upload PYQ to Firestore =================

async function uploadPYQ(){

const title =
document.getElementById("pyqTitle").value.trim();

const branch =
document.getElementById("pyqBranch").value;

const semester =
document.getElementById("pyqSemester").value;

const subject =
document.getElementById("pyqSubject").value;

const fileName =
document.getElementById("pyqFileName").value.trim();

if(

title === "" ||

subject === "" ||

fileName === ""

){

alert("Please fill all fields.");

return;

}

const pdfUrl =
`pdfs/${fileName}`;

await addDoc(

collection(db,"pyqs"),

{

title,

branch,

semester,

subject,

fileName,

pdfUrl,

createdAt:
serverTimestamp()

}

);

alert("PYQ Uploaded Successfully ✅");

document.getElementById("pyqModal").style.display = "none";

// Clear Fields

document.getElementById("pyqTitle").value = "";

document.getElementById("pyqFileName").value = "";

document.getElementById("pyqSubject").innerHTML = `

<option value="">
Select Subject
</option>

`;

loadDashboard();

}

// ------------ EDIT NOTES ------------ //

window.editNote = async function(noteId){

    editingNoteId = noteId;

    const noteRef = doc(db,"notes",noteId);

    const noteSnap = await getDoc(noteRef);

    if(!noteSnap.exists()){

        window.showToast(
        "Note not found!",
        "error"
        );

        return;

    }

    const note = noteSnap.data();

    document.getElementById("noteTitle").value = note.title;

    document.getElementById("noteBranch").value = note.branch;

    document.getElementById("noteSemester").value = note.semester;

    await loadSubjectsDropdown();

    document.getElementById("noteSubject").value = note.subject;

    document.getElementById("noteFileName").value = note.fileName;

    document.getElementById("uploadPDF").textContent = "Update Note";

    uploadModal.style.display = "flex";

}

// -------- DELETE NOTES --------//

window.deleteNote = async function(noteId){

const confirmDelete =
confirm("Delete this note?");

if(!confirmDelete)
return;

await deleteDoc(
doc(db,"notes",noteId)
);

loadDashboard();

window.showToast(
"🗑 Note Deleted Successfully!"
);

}

// ---------- VIEW NOTES ----------//

window.viewNote = function(pdfUrl){

    if(!pdfUrl){
        window.showToast(
        "PDF URL not found!",
        "error"
        );
        return;
    }
    window.open(pdfUrl, "_blank");
}

// --------- RENDERING NOTES -----------//

    function renderFilteredNotes(){

        const keyword =
        document
        .getElementById("searchNotes")
        .value
        .toLowerCase();

        const branch =
        document
        .getElementById("filterBranch")
        .value;

        const semester =
        document
        .getElementById("filterSemester")
        .value;

        const table =
        document.getElementById("notesTableBody");

        table.innerHTML="";

        const filtered =
        allNotes.filter(note=>{

        const matchesKeyword =

        note.title.toLowerCase().includes(keyword) ||

        note.subject.toLowerCase().includes(keyword);

        const matchesBranch =

        branch === "" ||

        note.branch.toLowerCase() === branch.toLowerCase();

        const matchesSemester =

        semester === "" ||

        note.semester.toLowerCase() === semester.toLowerCase();

        return (

        matchesKeyword &&
        matchesBranch &&
        matchesSemester

        );

        });

        if(filtered.length===0){

        table.innerHTML=`

        <tr>

        <td colspan="5"
        style="text-align:center;padding:25px;">

        No Notes Found 😕

        </td>

        </tr>

        `;

        return;

        }

        filtered.forEach(note=>{

        table.innerHTML += `

        <tr>

        <td>${note.title}</td>

        <td>${note.branch}</td>

        <td>${note.semester}</td>

        <td>${note.subject}</td>

        <td>

        <button
        class="view-btn"
        onclick="viewNote('${note.pdfUrl}')">

        👁

        </button>

        <button
        class="edit-btn"
        onclick="editNote('${note.id}')">

        ✏

        </button>

        <button
        class="delete-btn"
        onclick="deleteNote('${note.id}')">

        🗑

        </button>

        </td>

        </tr>

        `;

        });

    }

    function renderFilteredSubjects(){

        const keyword =
        document.getElementById("searchSubjects").value.toLowerCase();

        const branch =
        document.getElementById("filterSubjectBranch").value;

        const semester =
        document.getElementById("filterSubjectSemester").value;

        const table =
        document.getElementById("subjectsTableBody");

        table.innerHTML = "";

        const filtered = allSubjects.filter(subject=>{

        if(
        !subject.name ||
        !subject.branch ||
        !subject.semester
        ){
        return false;
        }

        const matchesKeyword =
        subject.name.toLowerCase().includes(keyword);

        const matchesBranch =
        branch === "" ||
        subject.branch.toLowerCase() === branch.toLowerCase();

        const matchesSemester =
        semester === "" ||
        subject.semester.toLowerCase() === semester.toLowerCase();

       return (
            matchesKeyword &&
            matchesBranch &&
            matchesSemester
        );

        });

        if(filtered.length===0){

        table.innerHTML = `

        <tr>

        <td colspan="4"
        style="text-align:center;padding:25px;">

        No Subjects Found 📚

        </td>

        </tr>

        `;

        return;

        }

        filtered.forEach(subject=>{

        table.innerHTML += `

        <tr>

        <td>${subject.name}</td>

        <td>${subject.branch}</td>

        <td>${subject.semester}</td>

        <td>

        <button
        class="edit-btn"
        onclick="editSubject('${subject.id}')">
        ✏
        </button>

        <button
        class="delete-btn"
        onclick="deleteSubject('${subject.id}')">
        🗑
        </button>

        </td>

        </tr>

        `;

        });

        }

        // Rendering lectures 

        function renderFilteredLectures(){

        const keyword =
        document.getElementById("searchLectures")
        .value
        .toLowerCase();

        const branch =
        document.getElementById("filterLectureBranch").value;

        const semester =
        document.getElementById("filterLectureSemester").value;

        const table =
        document.getElementById("lecturesTableBody");

        table.innerHTML="";

        const filtered = allLectures.filter(lecture=>{

        if(
        !lecture.title ||
        !lecture.branch ||
        !lecture.semester ||
        !lecture.subject
        ){
        return false;
        }

        const matchesKeyword =

        lecture.title.toLowerCase().includes(keyword) ||

        lecture.subject.toLowerCase().includes(keyword);

        const matchesBranch =
        branch==="" ||
        lecture.branch.toLowerCase()===branch.toLowerCase();

        const matchesSemester =
        semester==="" ||
        lecture.semester.toLowerCase()===semester.toLowerCase();

        return (
            matchesKeyword &&
            matchesBranch &&
            matchesSemester
        );
        });

        if(filtered.length===0){
        table.innerHTML=`

        <tr>
        <td colspan="5"
        style="text-align:center;padding:25px;">
        No Lectures Found 🎥
        </td>
        </tr>
        `;

        return;
        }

        filtered.forEach(lecture=>{
        table.innerHTML +=`

        <tr>
        <td>${lecture.title}</td>
        <td>${lecture.branch}</td>
        <td>${lecture.semester}</td>
        <td>${lecture.subject}</td>
        <td>

        <button
        class="view-btn"
        onclick="viewLecture('${lecture.lectureUrl}')">
        👁
        </button>

        <button
        class="edit-btn"
        onclick="editLecture('${lecture.id}')">
        ✏
        </button>

        <button
        class="delete-btn"
        onclick="deleteLecture('${lecture.id}')">
        🗑
        </button>
        </td>
        </tr>
        `;
        });
        }

        // ================= Render Filtered PYQs =================

        function renderFilteredPYQs(){

        const keyword =
        document.getElementById("searchPYQs").value.toLowerCase();

        const branch =
        document.getElementById("filterPYQBranch").value;

        const semester =
        document.getElementById("filterPYQSemester").value;

        const table =
        document.getElementById("pyqsTableBody");

        table.innerHTML = "";

        const filtered = allPYQs.filter(pyq=>{

        const matchesKeyword =
        pyq.title.toLowerCase().includes(keyword);

        const matchesBranch =
        branch === "" ||
        pyq.branch.toLowerCase() === branch.toLowerCase();

        const matchesSemester =
        semester === "" ||
        pyq.semester.toLowerCase() === semester.toLowerCase();

        return matchesKeyword &&
        matchesBranch &&
        matchesSemester;

        });

        if(filtered.length===0){

        table.innerHTML = `

        <tr>

        <td colspan="5"
        style="text-align:center;padding:25px;">

        No PYQs Found 📑

        </td>

        </tr>

        `;

        return;

        }

        filtered.forEach(pyq=>{

        table.innerHTML += `

        <tr>

        <td>${pyq.title}</td>

        <td>${pyq.branch}</td>

        <td>${pyq.semester}</td>

        <td>${pyq.subject}</td>

        <td>

        <button
        class="edit-btn"
        onclick="editPYQ('${pyq.id}')">

        ✏

        </button>

        <button
        class="delete-btn"
        onclick="deletePYQ('${pyq.id}')">

        🗑

        </button>

        </td>

        </tr>

        `;

        });

        }

        // ================= Delete PYQ =================

        async function deletePYQ(id){

        const confirmDelete =
        confirm("Delete this PYQ?");

        if(!confirmDelete){

        return;

        }

        await deleteDoc(

        doc(db,"pyqs",id)

        );

        loadDashboard();

        }

        // ================= Edit PYQ =================

        async function editPYQ(id){

        const snapshot =
        await getDoc(doc(db,"pyqs",id));

        if(!snapshot.exists()){

        alert("PYQ not found.");

        return;

        }

        const pyq =
        snapshot.data();

        document.getElementById("pyqTitle").value =
        pyq.title;

        document.getElementById("pyqBranch").value =
        pyq.branch;

        document.getElementById("pyqSemester").value =
        pyq.semester;

        await loadPYQSubjects();

        document.getElementById("pyqSubject").value =
        pyq.subject;

        document.getElementById("pyqFileName").value =
        pyq.fileName;

        pyqModal.style.display = "flex";

        document.getElementById("uploadPYQ").innerText =
        "Update";

        document.getElementById("uploadPYQ").onclick =
        ()=>updatePYQ(id);

        }

        // ================= Update PYQ =================

        async function updatePYQ(id){

        const title =
        document.getElementById("pyqTitle").value.trim();

        const branch =
        document.getElementById("pyqBranch").value;

        const semester =
        document.getElementById("pyqSemester").value;

        const subject =
        document.getElementById("pyqSubject").value;

        const fileName =
        document.getElementById("pyqFileName").value.trim();

        await updateDoc(

        doc(db,"pyqs",id),

        {

        title,

        branch,

        semester,

        subject,

        fileName,

        pdfUrl:
        `pdfs/${fileName}`

        }

        );

        alert("PYQ Updated Successfully ✅");

        pyqModal.style.display = "none";

        document.getElementById("uploadPYQ").innerText =
        "Upload";

        document.getElementById("uploadPYQ").onclick =
        uploadPYQ;

        loadDashboard();

        }

        

        // ---------- EDIT SUBJECT ----------//

        window.editSubject = async function(subjectId){

        editingSubjectId = subjectId;

        const subjectRef =
        doc(db,"subjects",subjectId);

        const subjectSnap =
        await getDoc(subjectRef);

        if(!subjectSnap.exists()){

        window.showToast(
        "Subject not found!",
        "error"
        );

        return;

        }

        const subject =
        subjectSnap.data();

        document.getElementById("subjectName").value =
        subject.name;

        document.getElementById("subjectBranch").value =
        subject.branch;

        document.getElementById("subjectSemester").value =
        subject.semester;

        document.getElementById("addSubjectBtn").textContent =
        "Update Subject";

        subjectModal.style.display = "flex";

        }

        // ---------- DELETE SUBJECT ----------//

        window.deleteSubject = async function(subjectId){

        const confirmDelete =
        confirm("Delete this subject?");

        if(!confirmDelete)
        return;

        await deleteDoc(
        doc(db,"subjects",subjectId)
        );

        loadDashboard();

        window.showToast(
        "🗑 Subject Deleted Successfully!"
        );

        }

// ------- search bar ---------//

document
.getElementById("searchNotes")
.addEventListener("input",renderFilteredNotes);

document
.getElementById("filterBranch")
.addEventListener("change",renderFilteredNotes);

document
.getElementById("filterSemester")
.addEventListener("change",renderFilteredNotes);

document
.getElementById("searchSubjects")
.addEventListener("input",renderFilteredSubjects);

document
.getElementById("filterSubjectBranch")
.addEventListener("change",renderFilteredSubjects);

document
.getElementById("filterSubjectSemester")
.addEventListener("change",renderFilteredSubjects);

document
.getElementById("searchLectures")
.addEventListener("input",renderFilteredLectures);

document
.getElementById("filterLectureBranch")
.addEventListener("change",renderFilteredLectures);

document
.getElementById("filterLectureSemester")
.addEventListener("change",renderFilteredLectures);

// --------- ADD SUBJECT ---------//

async function addSubject(){

const branch =
document.getElementById("subjectBranch").value;

const semester =
document.getElementById("subjectSemester").value;

const name =
document.getElementById("subjectName").value.trim();

if(name===""){

window.showToast(
"Enter Subject Name",
"error"
);
return;
}

try{

    const duplicate = allSubjects.find(subject =>

    subject.branch === branch &&
    subject.semester === semester &&
    subject.name.toLowerCase() === name.toLowerCase() &&
    subject.id !== editingSubjectId

    );

    if(duplicate){

    window.showToast(
    "⚠ Subject already exists!",
    "error"
    );

    return;

    }

const subjectData = {

    name,
    branch,
    semester,
    createdAt: serverTimestamp()
};

if(editingSubjectId){

    await updateDoc(
        doc(db,"subjects",editingSubjectId),
        subjectData
    );

    window.showToast(
    "✏ Subject Updated Successfully!"
    );

    editingSubjectId = null;
}
else{
    await addDoc(
        collection(db,"subjects"),
        subjectData
    );

    window.showToast(
    "📚 Subject Added Successfully!"
    );
}

document.getElementById("subjectName").value="";
subjectModal.style.display="none";

document.getElementById("addSubjectBtn").textContent = "Add Subject";

loadDashboard();
loadSubjectsDropdown();
}

catch(error){
window.showToast(
error.message,
"error"
);
}
}

document
.getElementById("addSubjectBtn")
.onclick = addSubject;

// ---------- LOAD SUBJECTS IN NOTES DROPDOWN ----------//

async function loadSubjectsDropdown(){

const branch =
document.getElementById("noteBranch").value;

const semester =
document.getElementById("noteSemester").value;

const dropdown =
document.getElementById("noteSubject");

dropdown.innerHTML = `

<option value="">
Select Subject
</option>

`;

const subjectsSnapshot =
await getDocs(collection(db,"subjects"));

subjectsSnapshot.forEach((doc)=>{

const subject = doc.data();

if(

subject.branch === branch &&
subject.semester === semester

){

dropdown.innerHTML += `

<option value="${subject.name}">

${subject.name}

</option>

`;

}

});

}

// LECTURE LOADING --------->

async function loadLectureSubjects(){

const branch =
document.getElementById("lectureBranch").value;

const semester =
document.getElementById("lectureSemester").value;

const subjectSelect =
document.getElementById("lectureSubject");

subjectSelect.innerHTML = `
<option value="">Select Subject</option>
`;

const subjectsSnapshot =
await getDocs(collection(db,"subjects"));

subjectsSnapshot.forEach((doc)=>{

const subject = doc.data();

if(

subject.branch === branch &&
subject.semester === semester

){

subjectSelect.innerHTML += `
<option value="${subject.name}">
${subject.name}
</option>
`;
}
});
}

// PYQs LOADING --------->

async function loadPYQSubjects(){

const branch =
document.getElementById("pyqBranch").value;

const semester =
document.getElementById("pyqSemester").value;

const subjectSelect =
document.getElementById("pyqSubject");

subjectSelect.innerHTML = `
<option value="">Select Subject</option>
`;

const snapshot =
await getDocs(collection(db,"subjects"));

snapshot.forEach((doc)=>{

const subject = doc.data();

if(

subject.branch.toLowerCase() === branch.toLowerCase() &&

subject.semester.toLowerCase() === semester.toLowerCase()

){

subjectSelect.innerHTML += `

<option>

${subject.name}

</option>

`;

}

});

}

// ================= Upload PYQ Button =================

document
.getElementById("uploadPYQ")
.onclick = uploadPYQ;

document
.getElementById("uploadLecture")
.onclick =
uploadLecture;

// ------- UPLOAD LECTURE ------>>>>>

async function uploadLecture(){

const title =
document.getElementById("lectureTitle").value.trim();

const branch =
document.getElementById("lectureBranch").value;

const semester =
document.getElementById("lectureSemester").value;

const subject =
document.getElementById("lectureSubject").value;

const lectureUrl =
document.getElementById("lectureUrl").value.trim();

if(
title==="" ||
subject==="" ||
lectureUrl===""
){

window.showToast(
"Please fill all fields.",
"error"
);
return;
}

const lectureData={
title,
branch,
semester,
subject,
lectureUrl,
createdAt:
serverTimestamp()
};

try{

if(editingLectureId){

await updateDoc(

doc(db,"lectures",editingLectureId),

lectureData

);

window.showToast(
"🎥 Lecture Updated Successfully!"
);

editingLectureId=null;

document.getElementById("uploadLecture").textContent = "Upload";

}
else{

await addDoc(
collection(db,"lectures"),
lectureData
);

window.showToast(
"🎥 Lecture Uploaded Successfully!"
);

}

lectureModal.style.display="none";
document.getElementById("lectureTitle").value="";
document.getElementById("lectureUrl").value="";
document.getElementById("uploadLecture").textContent="Upload";
loadDashboard();
}

catch(error){

window.showToast(
error.message,
"error"
);
}
}

// ---------- VIEW LECTURE ----------//

window.viewLecture = function(url){

if(!url){

window.showToast(
"Lecture link not found!",
"error"
);

return;
}

window.open(url,"_blank");
}

// ---------- EDIT LECTURE ----------//

window.editLecture = async function(lectureId){

editingLectureId = lectureId;

const lectureRef =
doc(db,"lectures",lectureId);

const lectureSnap =
await getDoc(lectureRef);

if(!lectureSnap.exists()){

window.showToast(
"Lecture not found!",
"error"
);

return;

}

const lecture =
lectureSnap.data();

document.getElementById("lectureTitle").value =
lecture.title;

document.getElementById("lectureBranch").value =
lecture.branch;

document.getElementById("lectureSemester").value =
lecture.semester;

await loadLectureSubjects();

document.getElementById("lectureSubject").value =
lecture.subject;

document.getElementById("lectureUrl").value =
lecture.lectureUrl;

document.getElementById("uploadLecture").textContent =
"Update";

lectureModal.style.display = "flex";

}

// ---------- DELETE LECTURE ----------//

window.deleteLecture = async function(lectureId){

const confirmDelete =
confirm("Delete this lecture?");

if(!confirmDelete)
return;

await deleteDoc(
doc(db,"lectures",lectureId)
);

window.showToast(
"🗑 Lecture Deleted Successfully!"
);

loadDashboard();

}