// Wait for the HTML document to finish loading before running any jQuery code
$(document).ready(function() {

    // Select the HTML element with the ID "my-button"
    var beginBtn = $('#begin');
  
    // Add a click event listener to the button
    beginBtn.click(function() {
      // Do something when the button is clicked
        $("#begin-div").addClass("d-none"); // Hide the div
        console.log("HIGDIHSFID");
    });
  
});