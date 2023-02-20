$(document).ready(function() { 

    const photos = $('.ltm-photo');
    console.log(photos);
    // Add a click event listener to the link
    photos.click(function(event) {
        
        //Change the image of the modal to the clicked image
        const imageId = $(this).attr('id');
        console.log('ID: ' + imageId);
        const clickedImage = $(`#${imageId}`);
        const imageSrc = clickedImage.attr('src');
        $("#modal-img").attr('src', imageSrc);

        //Change the modal text to the alt text of the clicked image
        const titleText = clickedImage.attr('alt');
        $("#modal-title").text(titleText);
        $("#modal-img").attr('alt', titleText);

        
        // Trigger the desired Bootstrap event (e.g. modal, dropdown, etc.)
        // Here's an example of triggering a modal
        $('#modal').modal('show');

    });

});