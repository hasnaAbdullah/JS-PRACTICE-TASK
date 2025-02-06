/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let givenScore = prompt("your score ");
// filtering grade
let studentScore =
  givenScore > 100
    ? alert("score must be under 100 or equal to 100. so try again")
    : givenScore;

// counting grade
if (studentScore >= 90 && studentScore <= 100) {
  alert("you have got A");
} else if (studentScore >= 80 && studentScore <= 89) {
  alert("you have got B");
} else if (studentScore >= 70 && studentScore <= 79) {
  alert("you have got C");
} else if (studentScore >= 60 && studentScore <= 69) {
  alert("you have got D");
} else {
  if (studentScore) {
    alert("you have got F");
  }
}
