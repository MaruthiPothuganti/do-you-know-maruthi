var score = 0
var readlineSync = require("readline-sync");
var userName = readlineSync.question("what's your name?");
console.log("welcome " + userName + " to DO YOU KNOW Maruthi Pothuganti?");

function play(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
        console.log("right");
        score = score + 1;
    } else {
        console.log("wrong");
    }
    console.log("current score", score);
    console.log("--------");
}
var questions = [{
    question: "where do i live? ",
    answer: "peddapally"
}, {
    question: "which supervillian do i like most?",
    answer: "joker"

}, {
    question: "the indian state which i like most?",
    answer: "kerala"
}, {
    question: "the socialmedia platform that i love?",
    answer: "instagram"
}, {
    question: "what do i mostly do in my free time?",
    answer: "watch movies"
}, {
    question: "from which college had i graduated?",
    answer: "VITS"
}];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! your score is :", score);