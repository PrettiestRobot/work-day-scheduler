
// wait for document to load before executing code
$(document).ready(function () {


  $(function () {
    //Save Button Functionality
    $(".saveBtn").click(function () {
      let key = $(this).parent().attr('id');
      let text = $(this).siblings('.description').val();
      localStorage.setItem(key,text);
    });
    
    //Add task persistence so tasks do not clear on page refresh.
    let hourRows = $('.time-block');
    hourRows.each(function() {
      let textKey = $(this).attr('id');
      let textValue = localStorage.getItem(textKey)
      console.log(textValue);
      $(this).find(".description").val(textValue);
    });


    // Update the date and check the time to apply css styles every second
      setInterval(function () {
        const currentDate = new Date();
        // **comment the following line out to check styles**
        const currentHour = currentDate.getHours();
        // **uncomment the following line to check css styles**
        // const currentHour = 12;
        var todaysDate = dayjs(currentDate).format("dddd, MMMM D");
        $('#currentDay').text(todaysDate);
        hourRows.each(function() {
          if ($(this).data('hour') === currentHour) {
            $(this).removeClass('past future');
            $(this).addClass('present');
          } else if ($(this).data('hour') < currentHour) {
            $(this).removeClass('present future');
            $(this).addClass('past');
          } else if ($(this).data('hour') > currentHour) {
            $(this).removeClass('past present');
            $(this).addClass('future');
          } else {
            $(this).removeClass('past present');
            $(this).addClass('future');
          }
        });
      }, 1000);

  });
});
