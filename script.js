// Wait for the HTML document to finish loading before running any jQuery code
$(document).ready(function() {

    let beginQuizBtn = $('#begin'); //Button to begin quiz
    let quizAnswerBtn = $('.quiz-btn'); //All four buttons with possible answers
    let currentQuestion = 0; //The current question, 0 is before starting the quiz
    let numOfCorrectAnswers = 0;


    

    beginQuizBtn.click(function() {
        currentQuestion = 1;
        populateQuiz();

        //Begin the Quiz
        $("#begin-div").addClass("d-none"); // Hide the begin button
        $('#quiz-questions').removeClass("d-none"); // Show the questions

    });

    const questions = {
        q1: {
            question: "What is Nala's full name?",
            'a': "Nala M'Lady Nestor-Cuevas",
            'b': "Nala Schmala Bo Bala",
            'c': "Nala Lalalala La",
            'd': "Cat",
            correct: "a"
        },
        q2: {
            question: "Do I like snow?",
            'a': "Yes",
            'b': "No",
            correct: "b"
        }
    }
    
    function populateQuiz(){
        const question = getCurrentQuestion();

        //Get the question p tag
        const questionText = $('#question');
        //Set its text to the question
        questionText.text(question.question);

        //Set the four choices
        const choices = ['a', 'b', 'c', 'd'];
        choices.forEach(function(choice) {
            const choiceButton = $(`#${choice}`);
            const choiceText = question[choice];
            if (choiceText){
                //If there is anything written for the question
                choiceButton.text(choiceText);
                choiceButton.removeClass("d-none");
            } else {
                //Hide choice
                choiceButton.addClass("d-none");
            }
        });
    }

    //Clicked on an answer button for the question
    quizAnswerBtn.click(function() {
        //Evaluate if answer was correct
        const id = $(this).attr("id"); //ID can be a, b, c, or d.
        evaluateAnswer(id);
    });
    
    function evaluateAnswer(answer){
        const chosenAnswer = $(`#${answer}`);
        const question = getCurrentQuestion();


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



