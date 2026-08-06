// ================= Notification Permission =================

const notificationModal =
document.getElementById("notificationModal");

const allowBtn =
document.getElementById("allowNotifications");

const skipBtn =
document.getElementById("skipNotifications");

// Show only once
window.addEventListener("load",()=>{

const alreadyAsked =
localStorage.getItem("notificationAsked");

if(!alreadyAsked){

notificationModal.style.display="flex";

}

});

// ---------------- Allow ----------------

allowBtn.addEventListener("click",async()=>{

const permission =
await Notification.requestPermission();

if(permission==="granted"){

window.showToast(
"🔔 Attendance reminders enabled!"
);

}

else{

window.showToast(
"Notifications were blocked.",
"error"
);

}

localStorage.setItem("notificationAsked","true");

notificationModal.style.display="none";

});

// ---------------- Skip ----------------

skipBtn.addEventListener("click",()=>{

localStorage.setItem("notificationAsked","true");

notificationModal.style.display="none";

});