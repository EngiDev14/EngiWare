import { db } from "./firebase.js";

import {
collection,
getDocs

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

    document.getElementById("totalNotes").textContent =
    notesSnapshot.size;


    // LECTURES
    const lecturesSnapshot =
    await getDocs(collection(db,"lectures"));

    document.getElementById("totalLectures").textContent =
    lecturesSnapshot.size;


    // SUBJECTS
    const subjectsSnapshot =
    await getDocs(collection(db,"subjects"));

    document.getElementById("totalSubjects").textContent =
    subjectsSnapshot.size;

}

loadDashboard();

const uploadModal =
document.getElementById("uploadModal");

document
.getElementById("uploadNotesBtn")
.onclick = () => {

uploadModal.style.display="flex";

};

document
.getElementById("closeUpload")
.onclick = () => {

uploadModal.style.display="none";

};