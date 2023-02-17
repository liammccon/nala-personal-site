// Wait for the HTML document to finish loading before running any jQuery code
$(document).ready(function() {

    let beginQuizBtn = $('#begin'); //Button to begin quiz
    let quizAnswerBtn = $('.quiz-btn'); //All four buttons with possible answers
    let currentQuestion = 0; //The current question, 0 is before starting the quiz
    let numOfCorrectAnswers = 0;

    const answers = {
        q1: 'a',
        q2: 'c',
        q3: 'b',
        q4: 'a'
    };

    beginQuizBtn.click(function() {
        //Begin the Quiz
        $("#begin-div").addClass("d-none"); // Hide the begin button
        $('#quiz-questions').removeClass("d-none"); // Show the questions

        currentQuestion = 1;
    });

    quizAnswerBtn.click(function() {
        //Evaluate if answer was correct

    });




});