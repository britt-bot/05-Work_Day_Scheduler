// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    moment().day("Sunday");
    console.log(moment().hour());
    $( "#currentDay" ).text(moment().format('dddd, MMMM Do'));
    $('textarea').removeClass('past').addClass('future');
    if(.hour = currentTime) {
        turn aka change to aka display correct color = red  
        display textarea background-color = red; based on currentTime
    } 
    if(before < currentTime) {
        display correct textarea aka color = gray
    } 
    else(future > currentTime) {
        display correct textarea aka color = green 
    } 
    // $() / 9 = textarea
});
