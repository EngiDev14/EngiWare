// Splash screen auto redirect

if (
    window.location.pathname === "/EngiWare/" ||
    window.location.pathname.endsWith("index.html")
)
{
    setTimeout(() => {
        window.location.href = "login.html";
    }, 3000);
}

// Login

function loginUser()
{
    let username =
    document.getElementById("username").value;

    if(username.trim() === "")
    {
        alert("Please enter your username");
        return;
    }

    localStorage.setItem("user", username);

    window.location.href = "dashboard.html";
}


// Dashboard welcome

if(window.location.pathname.includes("dashboard.html"))
{
    let username =
    localStorage.getItem("user");

    document.getElementById("welcomeText")
    .innerText =
    "Hello " + username + " 👋";
}

// quotes : 

const quotes = [

"The expert in anything was once a beginner.",

"Small progress every day adds up to big results.",

"Discipline beats motivation.",

"Success is built one study session at a time.",

"Dream big. Start small. Act now.",

"Your future is created by what you do today.",

"Engineering is solving problems that matter.",

"Stay curious. Keep building.",

"Every bug you fix makes you a better engineer.",

"Learning never exhausts the mind."

];

function loadDailyQuote()
{
    const today =
    new Date().toLocaleDateString();

    const savedDate =
    localStorage.getItem("quoteDate");

    let quote;

    if(savedDate === today)
    {
        quote =
        localStorage.getItem("dailyQuote");
    }
    else
    {
        quote =
        quotes[Math.floor(Math.random() * quotes.length)];
        localStorage.setItem("dailyQuote", quote);
        localStorage.setItem("quoteDate", today);
    }
        typeQuote(`"${quote}"`);
}

function typeQuote(text)
{
    const quote =
    document.getElementById("dailyQuote");
    quote.style.opacity = "0";
    setTimeout(() =>
    {
        quote.style.opacity = "1";
        quote.innerHTML = "";

        let i = 0;

        const typing = setInterval(() =>
        {
            quote.innerHTML += text.charAt(i);
            i++;
            if(i >= text.length)
            {
                clearInterval(typing);
            }
        },35);
    },250);
}

// stream

function goToStreams()
{
    window.location.href = "stream.html";
}

// branch info...
function selectStream(branch)
{
    localStorage.setItem("branch",branch);

    window.location.href =
    "branch-info.html";
}

function goToSemester()
{
    window.location.href = "semester.html";
}

function openSemester(sem){

    let branch = localStorage.getItem("branch");

    window.location.href =
    "sub-" + branch + "-sem" + sem + ".html";
}
// branch info paragraph :

if(window.location.pathname
.includes("branch-info.html"))
{
    let stream =
    localStorage.getItem("branch");

    let title =
    document.getElementById("branchName");

    let msg =
    document.getElementById("branchMessage");

    title.innerText =
    "Welcome " + stream + " Student 🎓";

    if(stream==="CSE")
    {
        msg.innerText =
        "You are entering one of the fastest-growing engineering fields. CSE focuses on programming, software development, artificial intelligence, cybersecurity, cloud computing, and data science. Strong problem-solving skills and continuous learning are essential. Build projects, practice coding regularly, and stay updated with emerging technologies. Your skills can create solutions used by millions of people.";
    }

    else if(stream==="ECE")
    {
        msg.innerText =
        "ECE combines electronics, communication systems, embedded systems, signal processing, and modern networking technologies. The future of 5G, IoT, robotics, and satellite communication relies heavily on ECE engineers. Focus on both theoretical concepts and practical circuit design. A strong foundation in electronics opens many opportunities in industry and research.";
    }

    else if(stream==="ECM")
    {
        msg.innerText =
        "ECM is a blend of electronics and computer science. You will study programming, digital electronics, microprocessors, embedded systems, and computer hardware. This branch offers flexibility to work in both software and electronics industries. Developing both coding and hardware skills will give you a significant advantage.";
    }

    else if(stream==="CIVIL")
    {
        msg.innerText =
        "Civil engineers design and build the infrastructure that supports society. Roads, bridges, buildings, water systems, and transportation networks all depend on civil engineering. Focus on structural analysis, design principles, and practical applications. Attention to detail and strong technical knowledge are key to creating safe and sustainable structures.";
    }

    else if(stream==="ME")
    {
        msg.innerText =
        "Mechanical engineering is one of the broadest engineering disciplines. It covers machines, manufacturing, thermodynamics, robotics, automotive systems, and industrial design. Understanding how things work and how to improve them is at the heart of this field. Practical skills and engineering creativity are equally important.";
    }

    else if(stream==="EEE")
    {
        msg.innerText =
        "EEE focuses on electrical systems, power generation, transmission, control systems, and electronics. As the world moves toward renewable energy and smart grids, electrical engineers play a crucial role in shaping the future. Strong analytical thinking and a solid understanding of electrical fundamentals will help you excel.";
    }
}


//light mode :
function toggleTheme(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");

    }else{

        localStorage.setItem("theme","dark");
    }
}

window.onload=function(){

    if(localStorage.getItem("theme")==="light"){

        document.body.classList.add("light-mode");
    }
}
// subject details : 

function openSubject(subjectName)
{
    localStorage.setItem("subject", subjectName);

    // Save last opened subject
    localStorage.setItem("lastSubject", subjectName);

    // Save last opened page
    localStorage.setItem("lastPage", "subject-details.html");

    window.location.href = "subject-details.html";
}

// notes details
function openNotes()
{
    let branch = localStorage.getItem("branch");

    window.location.href =
    "notes/" + branch + ".html";
}
// PYQs details

function openPYQs()
{
    let branch = localStorage.getItem("branch");

    window.location.href =
    "pyqs/" + branch + ".html";
}
// lectures details : 
function openLectures()
{
    let branch = localStorage.getItem("branch");

    window.location.href =
    "lectures/" + branch + ".html";
}

// quiz details :
function openQuiz()
{
    let branch = localStorage.getItem("branch");

    window.location.href =
    "quiz/" + branch + ".html";
}
// main dashboard settings : 

function goToHub()
{
    window.location.href = "hub.html";
}

// last opened page saving : 

function loadContinueLearning()
{
    let subject = localStorage.getItem("lastSubject");

    let subjectBox = document.getElementById("lastSubject");

    if(subjectBox == null)
    {
        return;
    }

    if(subject == null)
    {
        subjectBox.innerHTML = "No recent subject";
    }
    else
    {
        subjectBox.innerHTML = subject;
    }
}

function continueLearning()
{
    let page = localStorage.getItem("lastPage");

    if(page == null)
    {
        alert("No recent subject found.");
        return;
    }

    window.location.href = page;
}

document.addEventListener("DOMContentLoaded", function()
{
    loadContinueLearning();
}
);

//================ SIDEBAR =================

function toggleSidebar()
{
    document.getElementById("sidebar").style.left = "0";

    document.getElementById("overlay").style.display = "block";

    document.body.style.overflow = "hidden";
}

function closeSidebar()
{
    document.getElementById("sidebar").style.left = "-320px";

    document.getElementById("overlay").style.display = "none";

    document.body.style.overflow = "auto";
}

// bookmark block : 

function toggleBookmark()
{
    const subject =
    localStorage.getItem("subject");

    let bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

    if(bookmarks.includes(subject))
    {
        bookmarks =
        bookmarks.filter(item => item !== subject);
    }
    else
    {
        bookmarks.push(subject);
    }
    localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks)
    );
    updateBookmarkButton();
}

function updateBookmarkButton()
{
    const btn =
    document.getElementById("bookmarkBtn");

    if(!btn) return;

    const subject =
    localStorage.getItem("subject");

    const bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

    if(bookmarks.includes(subject))
    {
        btn.innerHTML = "⭐ Bookmarked";
        btn.classList.add("bookmarked");
    }
    else
    {
        btn.innerHTML = "☆ Bookmark";
        btn.classList.remove("bookmarked");
    }
}
// bookmark page : 
function loadBookmarks()
{
    const container =
    document.getElementById("bookmarkList");

    if(!container) return;

    const bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

    if(bookmarks.length === 0)
    {
        container.innerHTML =
        "<h2>No bookmarks yet ⭐</h2>";
        return;
    }
    container.innerHTML = "";

    bookmarks.forEach(subject =>
    {
        container.innerHTML +=
        `
        <div class="resource-card"
        onclick="openSubject('${subject}')">
            ⭐ ${subject}
        </div>
        `;
    });
}
// on hub : 
function loadBookmarkPreview()
{
    const preview =
    document.getElementById("bookmarkPreview");

    if(!preview) return;

    const bookmarks =
    JSON.parse(localStorage.getItem("bookmarks")) || [];

    preview.innerHTML = "";

    if(bookmarks.length === 0)
    {
        preview.innerHTML =
        "<p>No bookmarks yet ⭐</p>";
        return;
    }

    bookmarks.slice(0,3).forEach(subject =>
    {
        preview.innerHTML +=
        `
        <div class="bookmark-item"
        onclick="openSubject('${subject}')">
            ⭐ ${subject}
        </div>
        `;
    });
}