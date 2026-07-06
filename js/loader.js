import { auth } from "./firebase.js";

import {
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const loadingText =
document.getElementById("loadingText");

const loadingFill =
document.getElementById("loadingFill");

function updateProgress(text,width){

loadingText.innerHTML = text;

loadingFill.style.width = width + "%";

}

updateProgress(
"Initializing...",
20
);

setTimeout(()=>{

updateProgress(
"Connecting Firebase...",
45
);

},600);

setTimeout(()=>{

updateProgress(
"Checking Account...",
75
);

},1200);

setTimeout(()=>{

onAuthStateChanged(auth,(user)=>{

updateProgress(
"Preparing Workspace...",
100
);

setTimeout(()=>{

if(user){

window.location.replace("hub.html");

}

else{

window.location.replace("login.html");

}

},700);

});

},1800);