var time = 200;
var score = 0;
var index = 0;
let timeInterval;
let selectedAnswer;

$(document).ready(function () {
  $(".next-btn").hide(); // hide next
  $(".highscore-btn").hide(); // hide highscore
  $(".question-container").hide(); // hide question container
  $(".timer").hide(); // hide time tracker
  $(".green-alert").hide(); // hide green alert
  $(".red-alert").hide(); // hide red alert
  // Start Quiz
  $(".start-btn").on("click", function () {
    $(".timer").show(); // show time tracker
    $(".start-btn").hide(); // hide start
    $(".question-container").show(); // show Q & A's
    $(".next-btn").show(); // hide next
    startTimer();
    showQuestions(); // show questions
  });
  // Timer
  function startTimer() {
    timeInterval = setInterval(function () {
      if (time >= 0) {
        $("#time-tracker").text("Time: " + time + " sect ");
        time--;
      } else {
        alert("The time is up and quiz is over.");
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  // Questions
  function showQuestions() {
    if (index > questions.length - 1) {
      console.log("Quiz Over");
      clearInterval(timeInterval);
      lastScore();
      $(".highscore-btn").show();
    } else {
    }
  }
});
