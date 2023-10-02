
$(document).ready(function () {

//listener added to to save the events entered by the user
$('.saveBtn').on('click', function() {
  var value = $(this).siblings('.description').val();
  var key = $(this).parent().attr('id');
   

  //save items to local storage
  localStorage.setItem(key, value);

  //Show user that entry was saved to localStorage just above the hours section
  $('.notification').addClass('show');

  console.log(localStorage);
});

  //Function will change the background color of each time block according to whether it is in the past, the present, or the future
  function hourCurrent() {
    var currentHour = dayjs().hour();

    $('.time-block').each(function () {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      if(blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourCurrent();
  //check if current time needs to be updated
  var update = setInterval(hourCurrent, 1000);


  //load the saved data from the localStorage to the page
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))

//Displays the current date to the header of the page
  $('#currentDay').text(dayjs().format('MM/DD/YYYY') )
});
