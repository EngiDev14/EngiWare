import { db, auth } from "./firebase.js";

import {
collection,
addDoc,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const branch =
localStorage.getItem("branch").toLowerCase();

const script =
document.createElement("script");

script.src = `../quizzes/${branch}.js`;

script.onload = () => {
    startQuiz();
};

document.body.appendChild(script);

function startQuiz(){

let subject = localStorage.getItem("subject");

document.getElementById("quizTitle").innerHTML = "🎯 " + subject + " Quiz";

const semester = localStorage.getItem("semester").replace(" ", "").toLowerCase();

// accessing questions of each semster of a particular branch .........

const semesterData = quizData[semester];

if (!semesterData) {
    showComingSoon();
    return;
}

const questions = semesterData[subject];

if (!questions || questions.length === 0) {
    showComingSoon();
    return;
}

function showComingSoon(){

document.getElementById("questionBox").innerHTML =
"🚧 Quiz Coming Soon";

document.getElementById("option0").style.display="none";
document.getElementById("option1").style.display="none";
document.getElementById("option2").style.display="none";
document.getElementById("option3").style.display="none";

document.getElementById("nextButton").style.display="none";

}

let currentQuestion = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

showQuestion();

function showQuestion() {
  document.getElementById("questionNo").innerHTML =
    "Question " + (currentQuestion + 1) + " of " + questions.length;

  document.getElementById("questionBox").innerHTML =
    questions[currentQuestion].question;

  document.getElementById("option0").innerHTML =
    questions[currentQuestion].options[0];

  document.getElementById("option1").innerHTML =
    questions[currentQuestion].options[1];

  document.getElementById("option2").innerHTML =
    questions[currentQuestion].options[2];

  document.getElementById("option3").innerHTML =
    questions[currentQuestion].options[3];

  let progress = ((currentQuestion + 1) / questions.length) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
}

let answered = false;

window.checkAnswer = function(option){
  if (answered) {
    return;
  }
  answered = true;
  let correct = questions[currentQuestion].answer;

  if (option == correct) {
    score++;
    document.getElementById("resultMessage").innerHTML = "✅ Correct Answer!";
    document.getElementById("explanationBox").innerHTML = "💡 " + questions[currentQuestion].explanation;
    document.getElementById("option" + option).style.background = "green";
    correctAnswers++;

    document.getElementById("correctCount").innerHTML =
      "✔ Correct : " + correctAnswers;
  }
  else {
    document.getElementById("resultMessage").innerHTML = "❌ Wrong Answer!";
    document.getElementById("explanationBox").innerHTML = "💡 " + questions[currentQuestion].explanation;
    document.getElementById("option" + option).style.background = "red";
    document.getElementById("option" + correct).style.background = "green";
    wrongAnswers++;

    document.getElementById("wrongCount").innerHTML =
      "❌ Wrong : " + wrongAnswers;
  }
}

window.nextQuestion = async function(){
  if (!answered) {
    alert("Please answer the question first!");
    return;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    document.getElementById("questionBox").innerHTML = "🎉 Quiz Completed!";

    document.getElementById("questionNo").innerHTML = "Final Score";

    document.getElementById("resultMessage").innerHTML = "";

    document.getElementById("explanationBox").innerHTML = "";

    document.getElementById("option0").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";

    let percentage = Math.round((score / questions.length) * 100);

    const quizResult = {
    userId: auth.currentUser.uid,
    subject: subject,
    branch: branch,
    semester: semester,
    score: score,
    totalQuestions: questions.length,
    correct: correctAnswers,
    wrong: wrongAnswers,
    percentage: percentage,
    createdAt: serverTimestamp()
    };

    let message = "";
    let grade = "";
    if (percentage >= 90) {
      grade = "🏅 Grade : A+";
      message = "🔥 Outstanding Performance!";
    } else if (percentage >= 80) {
      grade = "🥇 Grade : A";
      message = "🎉 Excellent Work!";
    } else if (percentage >= 70) {
      grade = "🥈 Grade : B";
      message = "👏 Very Good!";
    } else if (percentage >= 60) {
      grade = "🥉 Grade : C";
      message = "🙂 Good, Keep Improving!";
    } else if (percentage >= 40) {
      grade = "📘 Grade : D";
      message = "💪 Practice More!";
    } else {
        grade = "❌ Grade : F";
        message = "📚 Don't Give Up. Try Again!";
    }
    document.getElementById("finalScore").innerHTML =
      "⭐ Score : " + score + " / " + questions.length;

    document.getElementById("finalPercentage").innerHTML =
      "📊 Percentage : " + percentage + "%";

    document.getElementById("finalGrade").innerHTML = grade;
    document.getElementById("performanceMessage").innerHTML = message;
    document.getElementById("resultCard").style.display = "block";
    document.getElementById("resultButtons").style.display = "block";
    document.getElementById("questionBox").style.display = "none";
    document.getElementById("questionNo").style.display = "none";
    document.getElementById("progressContainer").style.display = "none";
    document.getElementById("correctCount").style.display = "none";
    document.getElementById("wrongCount").style.display = "none";
    document.getElementById("resultMessage").style.display = "none";

    document.getElementById("option0").style.display = "none";
    document.getElementById("option1").style.display = "none";
    document.getElementById("option2").style.display = "none";
    document.getElementById("option3").style.display = "none";
    document.getElementById("nextButton").style.display = "none";

      try{
      await addDoc(
      collection(db,"quizResults"),
      quizResult
      );
      }
      catch(error){
      console.error(error);
      }


    return;
  }

  answered = false;

  document.getElementById("resultMessage").innerHTML = "";

  document.getElementById("option0").style.background = "";
  document.getElementById("option1").style.background = "";
  document.getElementById("option2").style.background = "";
  document.getElementById("option3").style.background = "";

  showQuestion();
}
// new buttons on quiz dashboard :

window.restartQuiz = function(){
  location.reload();
}

window.goHome = function(){
  window.location.href = "/stream.html";
}

window.goBackSubjects = function(){
  history.back();
}
}