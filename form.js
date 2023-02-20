$(document).ready(function() { 

    $('#send-button').click(function() {
        validate();
    });
    const inputIDs = ['#name', '#email', '#message'];


    function validate() {
        let allValid = true;
        const success = $('#send-success');
        success.addClass('d-none');

        inputIDs.forEach( inputId => {
            //Reset validation
            const input = $(inputId);
            const feedback = $(inputId+'-feedback');

            input.removeClass('invalid');
            feedback.addClass('d-none');

            //If input contains no text
            if(!input.val()){
                allValid = false;
                input.addClass('invalid');
                feedback.removeClass('d-none');
            }
        });

        if (allValid){
            success.removeClass('d-none');
        }
    }
});



