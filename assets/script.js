// displays current time
$(document).ready(function() {
  console.log('ready!');
  moment().day('Sunday');
  console.log(moment().hour());
  $('#currentDay').text(moment().format('dddd, MMMM Do'));

// changes timeblock color based on current time
  function timeColor() {
  // set current time  
  const currentTime = moment().hour();
  console.log(currentTime);

  // // uses military time to calculate current time
  // for (let i = 9; i < 18; i++) {
  //   let hour = '#' + i; 

  //   console.log(hour);
  //   console.log($(hour).attr('id'));
  //   console.log(scheduleHour);

  //loop through time blocks
  $('textarea').each(function () {
    var scheduleHour = parseInt($(this).attr('id'));
    
    if (scheduleHour < currentTime) {
    // display correct textarea aka color = gray
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past');

    } else if (scheduleHour === currentTime) {
    // display textarea background-color = red; 
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');

    } else {
    // display correct textarea aka color = green 
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    } 
  })
}
// save button
  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".description").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".time-block row").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));
  })

// Get item from local storage if any
  window.onbeforeunload = function() {
    localStorage.setItem()


    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
    $("#6pm .description").val(localStorage.getItem("6pm"));
    console.log('awwwwwwww');
  }

timeColor();
});


  // // $() / 9 = textarea
    
//  changes past to future
  // $('textarea').removeClass('past').addClass('future');

  // print to the page
  // shoppingListEl.append(shoppingListItemEl);


// use event delegation on the `shoppingListEl` to listen for click on any element with a class of `delete-item-btn`
// shoppingListEl.on('click', '.delete-item-btn', handleRemoveItem);
// shoppingFormEl.on('submit', handleFormSubmit);

// A $( document ).ready() block.