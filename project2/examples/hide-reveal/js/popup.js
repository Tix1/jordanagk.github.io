// Button to open a modal
$(document).ready(function (){
    $('#kaline-button').click(function() {
        $("#kaline-modal").toggleClass("visible");
        $("#trammell-button").toggleClass("pink");
        $("#inge-button").toggleClass("green");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#kaline-close').click(function() {
        $("#kaline-modal").toggleClass("visible");
        
        });
});





//************************ Templates ************************

// Button to open a modal
$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#place-button-name-here').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#place-modal-name-here").toggleClass("visible");
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#place-modal_close-icon-name-here').click(function() {
        $("#place-modal-name-here").toggleClass("visible")
        });
});