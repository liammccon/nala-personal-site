// Wait for the HTML document to finish loading before running any jQuery code
$(document).ready(function() {

    let beginQuizButton = $('#begin'); //Button to begin quiz
    let quizAnswerButton = $('.quiz-btn'); //All four buttons with possible answers
    let nextButton = $('#next-button');
    let currentQuestion = 0; //The current question, 0 is before starting the quiz
    let numOfCorrectAnswers = 0;

    const questions = {
        q1: {
            question: "What is Nala's full name?",
            'a': "Nala Schmala Bo Bala",
            'b': "Nala M'Lady Nestor-Cuevas",
            'c': "Nala Lalalala La",
            'd': "Cat",
            correct: "b"
        },
        q2: {
            question: "Do I like snow?",
            'a': "Yes",
            'b': "No",
            correct: "a"
        }
    }
    let numOfQuestions = Object.keys(questions).length;


    

    beginQuizButton.click(function() {
        currentQuestion = 1;
        populateQuiz();

        //Begin the Quiz
        $("#begin-div").addClass("d-none"); // Hide the begin button
        $('#quiz-questions').removeClass("d-none"); // Show the questions
    });

    //Clicked on an answer button for the question
    quizAnswerButton.click(function() {
        //Evaluate if answer was correct
        const choice = $(this).attr("id"); //ID can be a, b, c, or d.
        evaluateAnswer(choice);
    });
    nextButton.click(function() { 
        currentQuestion++;

        //Hide unecessary elements, enable buttons
        quizAnswerButton.removeClass('btn-success');
        quizAnswerButton.removeClass('btn-danger');
        quizAnswerButton.addClass('btn-outline-secondary');
        $('#correct').addClass('d-none');
        $('#wrong').addClass('d-none');
        $('#next-button-div').addClass("d-none");
        quizAnswerButton.prop('disabled', false);

        //Populate the quiz
        populateQuiz();
    });

    
    
    //Populate the question and answers for the current question
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
    
    function evaluateAnswer(choice){
        //Gets the answer button from using choice as the ID of the question (a, b, c, or d)
        const chosenAnswerButton = $(`#${choice}`);
        const question = getCurrentQuestion();

        //Disable all answer buttons
        quizAnswerButton.prop('disabled', true);
        //Determine if it was the correct answer
        const correct = question.correct.toLowerCase() === choice.toLowerCase()
        //Color the answer button accordingly and show success message
        chosenAnswerButton.removeClass('btn-outline-secondary');
        if (correct) {
            numOfCorrectAnswers++;
            chosenAnswerButton.addClass('btn-success');
            $('#correct').removeClass('d-none');
        } else {
            chosenAnswerButton.addClass('btn-danger');
            $('#wrong').removeClass('d-none');
        }
        //Show the 'next question' button if more questions are available
        if (currentQuestion < numOfQuestions)
            $('#next-button-div').removeClass("d-none");
        else
            displayEndMessage();
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

      function displayEndMessage() {
        $('#end-message').removeClass('d-none');
        $('#end-message').text(`You got ${numOfCorrectAnswers}/${numOfQuestions} questions!`);
      }
});



