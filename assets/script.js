// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    moment().day("Sunday");
    console.log(moment().hour());
    $( "#currentDay" ).text(moment().format('dddd, MMMM Do'));
    $('textarea').removeClass('past').addClass('future');
    if currentTime = time display correct textarea aka color = red
    before < currentTime = gray
    future > currentTime = green
    // $() / 9
});
