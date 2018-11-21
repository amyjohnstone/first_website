function check() {

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

if (question1 == "True" ) {
    correct++;
}
if (question2 == "True") {
  correct++;
}
if (question3 == "False") {
  correct++;
}
  if (question4 == "True") {
    correct++;
}
document.getElementById("aftersubmit").style.visibility= "visible";
document.getElementById("numbercorrect").innerHTML = "Well done! You got " + correct + "correct";
}
