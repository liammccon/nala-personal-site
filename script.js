// Wait for the HTML document to finish loading before running any jQuery code
$(document).ready(function() {

    let beginQuizBtn = $('#begin'); //Button to begin quiz
    let quizAnswerBtn = $('.quiz-btn'); //All four buttons with possible answers
    let currentQuestion = 0; //The current question, 0 is before starting the quiz
    let numOfCorrectAnswers = 0;


    

    beginQuizBtn.click(function() {
        //Begin the Quiz
        $("#begin-div").addClass("d-none"); // Hide the begin button
        $('#quiz-questions').removeClass("d-none"); // Show the questions

        currentQuestion = 1;
        populateQuiz(1);
    });

    const questions = {
        q1: {
            question: "What is Nala's full name?",
            a: "Nala M'Lady Nestor-Cuevas",
            b: "Nala Schmala Bo Bala",
            c: "Nala Lalalala La",
            d: "Cat",
            correct: "a"
        },
        q2: {
            question: "Which is not incorrect?",
            a: "False",
            b: "Correct",
            c: "False",
            d: "False",
            correct: "b"
        }
    }
    
    function populateQuiz(question){
        
    }

    //Clicked on an answer button for the question
    quizAnswerBtn.click(function() {
        //Evaluate if answer was correct
        const id = $(this).attr("id"); //ID can be a, b, c, or d.
        evaluateAnswer(id);
    });
    
    function evaluateAnswer(answer){
        const chosenAnswer = $(`#${answer}`);

    }

    //Return the currrent question object to display
    function getCurrentQuestion() {
        switch (currentQuestion) {
          case 1:
            return questions.q1;
          case 2:
            return questions.q2;
          default:
            return null;
        }
      }

    

    
});



