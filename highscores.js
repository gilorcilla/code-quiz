// highscore variables

var initialsForm = document.querySelector("#initials-form");
var initialsInput = document.querySelector("#initials-text");
var initialsList = document.querySelector("#initialsList");
var initialsScores = [];
init();
function renderInitials() {
  initialsList.innerHTML = "";
  for (var i = 0; i < initialsScores.length; i++) {
    var initial = initialsScores[i];

    var li = document.createElement("li");
    li.textContent = initial;
    li.setAttribute("data-index", i);

    initialsList.appendChild(li);
  }
}
