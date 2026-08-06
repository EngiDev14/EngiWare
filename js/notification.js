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

// ================= Attendance Reminder Scheduler =================

function scheduleReminder(hour, minute){

    function checkTime(){

        const now = new Date();

        if(
            now.getHours() === hour &&
            now.getMinutes() === minute
        ){

            if(Notification.permission === "granted"){

                new Notification("📘 AttendGuard",{

                    body:"Don't forget to mark today's attendance!",
                    icon:"images/logo.png",
                    badge:"images/logo.png"
                });
            }
        }
    }

    // Check every 30 seconds
    setInterval(checkTime,30000);
}

// 12:00 PM
scheduleReminder(22,18);

// 5:00 PM
scheduleReminder(17,0);

// 8:00 PM
scheduleReminder(20,0);