function returnScore() {
    alert("Your score is " + getScore() + "/30");
}

var userInput = [];
var answers = []
answers[0] = "B"; answers[1] = "D"; answers[2] = "C"; answers[3] = "C"; answers[4] = "A"; answers[5] = "A"; answers[6] = "D"; answers[7] = "C";
answers[8] = "B"; answers[9] = "B"; answers[10]= "D";answers[11]= "A";answers[12]= "C"; answers[13]= "A"; answers[14]= "B"; answers[15]= "C";
answers[16]= "B";answers[17]= "A";answers[18]= "A";answers[19]= "B"; answers[20]= "D"; answers[21]= "D"; answers[22]= "C"; answers[23]= "B";
answers[24]= "A"; answers[25]= "D"; answers[26]= "B"; answers[27]= "D"; answers[28]= "D"; answers[29]= "C";

function getScore() {
     var score = 0;
     var numQuestions = 30;
	 var form = document.getElementById('form1');

    userInput[0] = form1.question1.value; userInput[1] = form1.question2.value; userInput[2] = form1.question3.value; userInput[3] = form1.question4.value;
    userInput[4] = form1.question5.value; userInput[5] = form1.question6.value; userInput[6] = form1.question7.value; userInput[7] = form1.question8.value;
	 userInput[8] = form1.question9.value; userInput[9] = form1.question10.value;userInput[10] = form1.question11.value; userInput[11] = form1.question12.value;
	 userInput[12] = form1.question13.value; userInput[13] = form1.question14.value; userInput[14] = form1.question15.value; userInput[15] = form1.question16.value;
	 userInput[16] = form1.question17.value; userInput[17] = form1.question18.value;userInput[18] = form1.question19.value;userInput[19] = form1.question20.value;
	 userInput[20]= form1.question21.value; userInput[21]= form1.question22.value; userInput[22]= form1.question23.value; userInput[23]= form1.question24.value;
	 userInput[24]= form1.question25.value; userInput[25]= form1.question26.value; userInput[26]= form1.question27.value; userInput[27]= form1.question28.value;
	  userInput[28]= form1.question29.value; userInput[29]= form1.question30.value;

     for (var i = 0; i < numQuestions; i++) {

          if (userInput[i] == answers[i]) {
               score += 1;
          } else {
               score += 0;
          }

     }
     return score;
    }

    function showAnswers() {
  	  var x = document.getElementById("answers");
  	  if (x.style.display === "none") {
  	    x.style.display = "block";
  	  } else {
  	    x.style.display = "none";
  	  }}


//Problem Solving Part 10 Questions

function myAnswer1() {
  var x = document.getElementById("mySolution1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}

function myAnswer2() {
  var x = document.getElementById("mySolution2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}

function myAnswer3() {
  var x = document.getElementById("mySolution3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
function myAnswer4() {
  var x = document.getElementById("mySolution4");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
 function myAnswer5() {
  var x = document.getElementById("mySolution5");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
 function myAnswer6() {
  var x = document.getElementById("mySolution6");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
  function myAnswer7() {
  var x = document.getElementById("mySolution7");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
 function myAnswer8() {
  var x = document.getElementById("mySolution8");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
  function myAnswer9() {
  var x = document.getElementById("mySolution9");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
  function myAnswer10() {
  var x = document.getElementById("mySolution10");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }}
