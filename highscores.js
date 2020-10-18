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
function init() {
  var storedInitials = JSON.parse(localStorage.getItem("initialsScores"));
  if (storedInitials !== null) {
      initialsScores = storedInitials;
  }
  renderInitials();
}
function storedInitials() {
  localStorage.setItem("initialScores", JSON.stringify(initialsScores));
}
// Form Submitted
initialsForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var initialsText = initialsInput.nodeValue.trim();
  If (initialsText === "") {
      return;
  }
  initialsScores.push(inititialsText)
  initialsInput.value = "";
  
  storeInitials();
  renderInitials();


});